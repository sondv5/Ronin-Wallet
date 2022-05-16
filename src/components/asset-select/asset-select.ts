import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class AssetSelect extends Vue {
  @Getter('account') account;
  @Prop() value;

  dialogVisible = false;

  handleSelect(unit) {
    this.$emit('input', unit);
    this.$emit('change', unit);
    this.$nextTick(() => this.$emit('blur', unit));
    this.dialogVisible = false;
  }
}
