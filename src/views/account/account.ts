import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Account extends Vue {
  @Getter('account') account;
}
