import { reactive } from "vue";
import {headerMenues} from './menues'
import { footerMenues } from "./menues";

export const store = reactive({
  header: headerMenues,
  footer: footerMenues,

})