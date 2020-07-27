import BackUp from "@com/BackUp";

export const backTopMixIn = {
  components: {
    BackUp
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backup(){
      this.$refs.scroll.scrollTo(0,0)
    },
  },
}