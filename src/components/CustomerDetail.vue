<template>
  <div class="customerdetail container">
    <router-link class="btn btn-default" to="/">返回主页</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone">{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-comment">{{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{customer.graduationschool}}</span>
      </li>

      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetail',
  data() {
    return {
      customer: '',
    }
  },
  methods: {
    fetchCustomer(id) {
      this.$http
        .get('http://localhost:3000/users/' + id)
        .then(function (response) {
          this.customer = response.body
        })
    },
    deleteCustomer: function (customer) {
      this.$http
        .delete('http://localhost:3000/users/' + customer.id)
        .then(function () {
          this.$router.push({
            path: '/',
            query: { alert: customer.name + '用户删除成功!' },
          })
        })
    },
  },
  created() {
    this.fetchCustomer(this.$route.params.id)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
