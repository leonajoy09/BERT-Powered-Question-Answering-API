<template>
    <div>
      <input v-model="question" placeholder="Ask a question..." />
      <button @click="askQuestion">Ask</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        question: ''
      };
    },
    methods: {
      async askQuestion() {
        try {
          const response = await axios.post('/ask', { question: this.question });
          this.$emit('response', response.data.answer);
          this.question = ''; // Clear the input field after asking the question
        } catch (error) {
          console.error('Error asking question:', error);
          // Handle error
        }
      }
    }
  };
  </script>
  