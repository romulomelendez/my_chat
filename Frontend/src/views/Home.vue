<template>

    <div>

        <input type="text" v-model="username" />
        <button @click="handleUserName">Entrar</button>

    </div>

</template>

<script>

    import router from '../routes/routes'

    export default {

        name: 'Home',

        data() {

            return {

                username: '',

            }

        },

        methods: {

            handleUserName() {

                if ( this.username.trim() ) {

                    router.push({ name: 'Chat', params: { username: this.username } })

                } else {

                    alert('Input cannot be empty')
                    
                }

            }
            
        }
        
}

</script>
