import { reactive } from "vue";
import { headerMenues } from './menues';
import { footerMenues } from "./menues";
import { dataCard } from "./cards";

export const store = reactive({
  header: headerMenues,
  footer: footerMenues,
  card: dataCard,

})