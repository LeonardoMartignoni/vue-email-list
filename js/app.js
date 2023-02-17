const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },

  methods: {
    getEmails() {
      this.emails = [];

      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.emails.push(response.data.response);
            if (this.emails.length >= 10) {
              console.log(this.emails);
            }
          });
      }
    },
  },
}).mount("#app");
