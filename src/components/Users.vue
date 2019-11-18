<template>
  <div class="users">
    <form @submit="onSubmit">
      <input type="text" v-model="newUser.name" placeholder="请输入姓名" />
      <input type="text" v-model="newUser.email" placeholder="请输入邮箱" />
      <input type="submit" value="添加" />
    </form>
    <ul>
      <li v-for="(user, index) in users" v-bind:key="index">
        <input
          type="checkbox"
          class="toggle"
          v-model="user.contacted"
        />
        <!-- <button @click="show=!show">改变</button> -->
        <div :class="{ contacted: user.contacted }">
          <h2>{{ user.name }}</h2>
          <h3>{{ user.email }}</h3>
          <h3>{{ user.contacted }}</h3>
          <button @click="deleteUser(user)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newUser: {},
      show: false
    };
  },
  methods: {
    onSubmit(e) {
      console.log("hello");
      e.preventDefault();

      this.users.push({
        ...this.newUser,
        contacted: false
      });
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  beforeUpdate() {
    this.user = !!this.user && this.user.map(item =>{return {...item,contacted:false}})
    
    console.log(this.users);
  },
};
</script>

<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 10px suto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
.contacted {
  text-decoration: line-through;
}
</style>
