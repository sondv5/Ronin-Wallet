import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { isNullOrUndefined } from '@/core/misc';

@Component
export default class AmountSelect extends Vue {
  @Prop({ type: Number }) value;
  @Prop({ default: true }) formatNumber;
  @Prop({ type: Number }) min;
  @Prop({ default: ',' }) groupSymbal;
  @Prop({ default: '.' }) decimalSymbal;
  @Prop({ default: false }) allowEmpty;

  inputForm!: HTMLInputElement | null;

  @Watch('value', { immediate: true })
  onValueChange(e?) {
    if (this.formatNumber) {
      this.$nextTick(() => {
        this.inputForm!.value = this.formattedValue;
      });
    }

    if (isNullOrUndefined(this.value) && !this.allowEmpty) {
      this.$emit('input', !isNullOrUndefined(this.min) ? this.min : 0);
    }

    this.$nextTick(() => {
      if (!this.formatNumber) {
        const arr = this.inputForm!.value.toString().split('.');

        if (arr[1] && +arr[1] === 0) {
          this.inputForm!.value = arr[0];
        }
      }
    });
  }

  mounted() {
    this.inputForm = this.$el.querySelector('input');
    this.onValueChange();
    this.inputForm!.addEventListener('focus', () => {
      if (this.formatNumber) {
        const noCommaString = this.inputForm!.value.toString()
          .split(this.groupSymbal)
          .join('')
          .split(this.decimalSymbal)
          .join('.');

        this.inputForm!.value = noCommaString;
      }
    });
  }

  onBlur() {
    this.onValueChange();
  }

  get formattedValue(): string {
    if (isNullOrUndefined(this.value)) {
      return '';
    }

    const splitedStrings = (isNaN(this.value) ? '' : this.value)
      .toString()
      .split('.');
    const beforeDot: string = splitedStrings[0];
    const afterDot: string = splitedStrings[1];
    const reverseString = beforeDot
      .split('')
      .reverse()
      .reduce((accumulator, currentValue, index) => {
        return `${accumulator}${
          index && index % 3 === 0
            ? this.groupSymbal + currentValue
            : currentValue
        }`;
      }, '');
    const finalString =
      reverseString.split('').reverse().join('') +
      (afterDot ? `${this.decimalSymbal}${afterDot}` : '');

    return finalString;
  }
}
