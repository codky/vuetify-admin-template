import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      // xs: 360,
    }
  },
  theme: {
    themes: {
      light: {
        //primary: '#00BCD4',
        secondary: colors.purple
      },
    }
  }
});
