import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({})
export default class BalanceInfo extends Vue {
  @Getter('account') account;
}
