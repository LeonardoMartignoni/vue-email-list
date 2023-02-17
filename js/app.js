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
      const newEmails = [];

      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            newEmails.push(response.data.response);
            if (newEmails.length >= 10) {
              this.emails = newEmails;
            }
          });
      }
    },
  },
}).mount("#app");
