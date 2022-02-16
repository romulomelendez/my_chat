<template>

    <div>

        <input type="text" v-model="username" />
        <button @click="handleUserName">Entrar</button>

    </div>

</template>

<script>
import router from "../../../backend/routes"


export default {

    data() {

        return {

            username: '',

        }

    },

    methods: {

        handleUserName() {

            if ( this.username.length ) {

                this.$router.push('/chat')

            } else {

                alert('Input cannot be empty')
            }

        }
        
    }
    
}

</script>
