import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Background extends Vue {
  stars = [
    {
      size: 20,
      color: '#ffc729',
      position: [800, 100],
    },
    {
      size: 18,
      color: '#ffc729',
      position: [200, 700],
    },
    {
      size: 16,
      color: '#ec9fff',
      position: [600, 200],
    },
    {
      size: 18,
      color: '#ec9fff',
      position: [600, 400],
    },
    {
      size: 20,
      color: '#e9f5fe',
      position: [200, 100],
    },
    {
      size: 20,
      color: '#e9f5fe',
      position: [150, 470],
    },
    {
      size: 18,
      color: '#e9f5fe',
      position: [600, 450],
    },
    {
      size: 20,
      color: '#fbebff',
      position: [50, 150],
    },
    {
      size: 20,
      color: '#EC9FFF',
      position: [900, 900],
    },
  ];
}
