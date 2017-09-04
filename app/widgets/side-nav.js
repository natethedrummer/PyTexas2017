import Vue from 'vue';

import {image} from '../filters';

var SideNav = Vue.component('side-nav', {
  template: '#tpl-widgets-side-nav',
  props: ['report_ref'],
  filters: {image: image},
  created() {
    this.report_ref(this);
    
    this.$nextTick(() => {
      var self = this.$refs.rightSidenav;
      self.open = function () {
        self.mdVisible = true;
        //self.$el.focus();
        self.$emit('open');
      };
    });
  },
  data() {
    return {
      links: [
        {name: 'About', url: '/page/about/conference'}
      ]
    };
  },
  methods: {
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      //console.log('Opened: ' + ref);
    },
    close(ref) {
      //console.log('Closed: ' + ref);
    },
    goto(url) {
      this.closeRightSidenav();
      this.$router.push(url);
    }
  }
});

export default SideNav;