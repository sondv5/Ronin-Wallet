import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Loading extends Vue {
  @Getter('isLoading') isLoading: boolean;
}
