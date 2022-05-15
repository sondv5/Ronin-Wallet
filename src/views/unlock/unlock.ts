import { Component, Vue } from 'vue-property-decorator';
import {} from 'vuex';
import { Getter, Mutation } from 'vuex-class';

@Component
export default class Unlock extends Vue {
  @Getter('account') account;
  @Mutation('setAccount') setAccount;

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
        this.$alert('The password is incorrect. Please try again', 'Error', {
          type: 'error',
        });
        throw err;
      });
    this.setAccount(result);

    console.log(this.account);

    this.$router.push({ name: 'Account' });
  }
}
