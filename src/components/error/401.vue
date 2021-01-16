<template>
    <div class="centered">
    <div class="emoji"><img src="@/assets/unicorn.gif" width=250></div>

    <p class="title">Ooooops!</p>
    <p class="text">你没有权限去该页面!</p>
    <v-btn width="100%" depressed @click="$router.go(-1)">返回</v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style >
    /* html {
        font-size: 62.5%;
    } */
    /* body {
        background-color: #fff;
        color: #000;
        font-family: helvetica, arial, sans-serif;
        font-size: 1.4em;
        line-height: 1.5;
    } */
    .centered {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .emoji {
      font-size: 9em;
      text-align: center;
    }
    .title {
      font-size: 3em;
      text-align: center;
      line-height: 0em;
      color: grey;
    }
    .text {
      text-align: center;
    }
</style>