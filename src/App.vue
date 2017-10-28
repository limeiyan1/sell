<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
  import header from 'components/header/header.vue';
  export default{
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
          if (response.errno === 0) {
            this.seller = response.data;
          }
      });
    },
    components: {'v-header': header}
  };
</script>
<style scoped>
  #app .tab{
    display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: relative;
  }
  .tab:after{
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      content: "";
  }
  .tab .tab-item{
    flex: 1;
    text-align: center
  }
  .tab-item a{
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .tab-item a.active{
    color: rgb(240, 20, 20);
  }
</style>
