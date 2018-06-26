import Vue from 'vue'
import Vuex from 'vuex'

import { abilityPlugin, ability as appAbility } from './modules/abilitys'

Vue.use(Vuex)
export const ability = appAbility

export const plugins = [ abilityPlugin ]
