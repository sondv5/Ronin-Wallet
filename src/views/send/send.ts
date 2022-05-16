import { ElForm } from 'element-ui/types/form';
import { Component, Ref, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Send extends Vue {
  @Getter('account') account;
  @Ref('form') form: ElForm;
  formObj: any = {
    from: ' ',
  };

  formRules = {
    from: [
      {
        required: true,
        message: ' ',
        trigger: ['blur', 'change'],
      },
    ],
    to: [
      {
        required: true,
        message: ' ',
        trigger: ['blur', 'change'],
      },
    ],
    asset: [
      {
        required: true,
        message: ' ',
        trigger: ['blur', 'change'],
      },
    ],
    amount: [
      {
        required: true,
        message: ' ',
        trigger: ['blur', 'change'],
      },
      {
        validator: (rule, value, callback) => {
          if (value === 0) {
            callback(new Error(' '));
          } else {
            callback();
          }
        },
      },
    ],
  };

  // get available asset amount as a string base on selected asset
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

  // get available asset amount as a number base on selected asset
  get assetAvailableOrigin() {
    return (
      this.account.assets.find((x) => x.unit === this.formObj.asset) || {
        quantity: 0,
      }
    ).quantity;
  }

  @Watch('formObj.asset')
  changeAsset() {
    this.formObj.amount = null;
    this.form.validateField('asset');
  }

  async submit() {
    const valid = await this.form.validate();
    if (!valid) {
      return;
    }
    this.$http
      .post('/send', this.formObj)
      .then((data) => {
        this.$store.commit('setAccount', data);
        this.$alert(
          `<div>Your ${this.formObj.asset} has been sent!</div>
          <div>Thank you for using our service</div>`,
          'Successfully Sent',
          {
            type: 'success',
            dangerouslyUseHTMLString: true,
            showClose: false,
            customClass: 'w400',
          }
        ).finally(() => {
          this.$router.push('/account');
        });
      })
      .catch((err) => {
        this.$alert(err.response.data, 'Error Occurred', {
          type: 'error',
        });
      });
  }
}
