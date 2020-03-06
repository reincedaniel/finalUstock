<template>
  <q-page class="docs-input row justify-center">
    <!-- content -->
    <div class="text-center q-pt-xl">
        
        <label class="text-h4 text-bold text-red">O Seu Prazo de Aviliação Terminou!!!</label>
        <br />
        <q-btn color="red" to="/auth">
          <q-icon left size="3em" name="sentiment_dissatisfied"  />
          <div>Volar</div>
        </q-btn>
    </div>
  </q-page>
</template>

<script>


export default {
  data() {
    return {

    };
  },
  created(){
    this.$store.dispatch('login/clearToken')
  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style>
</style>
