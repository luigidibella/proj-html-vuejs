import { reactive } from "vue";
import {headerMenues} from './menues'

export const store = reactive({
  header: headerMenues,

})