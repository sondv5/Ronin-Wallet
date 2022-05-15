import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Send extends Vue {
  @Getter('account') account;
  formObj: any = {};

  get assetAvailable() {
    return this.formObj.asset
      ? `AVAILABLE: ${
          (
            this.account.assets.find((x) => x.unit === this.formObj.asset) || {
              quantity: 0,
            }
          ).quantity
        } ${this.formObj.asset}`
      : '';
  }
}
