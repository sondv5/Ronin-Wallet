import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

@Component
export default class Unlock extends Vue {
  @Getter('account') account;
  @Mutation('setAccount') setAccount;
  @Mutation('setExchangeRate') setExchangeRate;

  formObj = {
    password: '123456',
  };

  async checkPassword() {
    // check empty password when press enter
    this.formObj.password = (this.formObj.password || '').trim();
    if (!this.formObj.password) {
      return false;
    }

    // check on server and get account info
    const result = await this.$http
      .post('/check-password', this.formObj)
      .catch((err) => {
        this.$alert(err.response.data, 'Error Occurred', {
          type: 'error',
        });
      });
    this.setAccount(result);
    const exchangeRate = await this.$http
      .get('/exchange-rate', this.formObj)
      .catch((err) => {
        this.$alert(err.response.data, 'Error Occurred', {
          type: 'error',
        });
      });
    this.setExchangeRate(exchangeRate);

    this.$router.push({ name: 'Account' });
  }
}
