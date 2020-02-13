<template>
    <div class="home">


        <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                required
                placeholder="Enter email"
                v-on:keyup.enter="checkEmail"
        />
        <p>{{message}}</p>

        <b-button variant="primary" v-on:click="checkEmail">S'inscrire</b-button>




    </div>

</template>

<script>
    export default {
        name: 'InputEmail',
        components: {},

        data() {
            /* eslint-disable no-unused-vars */
            /* eslint-disable no-undef */
            return (
                {
                    email: '',
                    message:'',

                }
            )
        },


        methods: {
            checkEmail() {
                let that = this
                fetch('http://apilayer.net/api/check?access_key=028c8c150429c673efd0919b8d77e8f9&email='+this.email+'&smtp=1&format = 1')
                .then(function (response) {
                    response.json()
                        .then(function(mailboxlayerresponse) {

                            if(mailboxlayerresponse.smtp_check == true){
                                that.message = 'email validé'

                            }else{
                                that.message = 'email pas beau'
                            }

                            console.log(mailboxlayerresponse);


                        });

                });
            }
        }


    }

</script>

<style>


</style>

