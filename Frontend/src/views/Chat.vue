<template>

    <div>

        <h1>Chat Page</h1>
        <h3>{{ username }}</h3>

    </div>

</template>

<script>

    export default {

        name: 'Chat',

        data() {

            return {

                username: this.$route.params.username

            }

        }

    }

</script>
