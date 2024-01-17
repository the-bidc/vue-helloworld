<template>
  <nav>
    <router-link to="/">Home</router-link> |
     <router-link to="/dashboard">DashBoard</router-link> |
     <router-link to="/personnel">Personnel</router-link> |
     <router-link to="/multiSelect">Multi-Select</router-link> |
     <router-link to="/costs">Non-Paired Costs</router-link> | 
     <router-link to="/helloComponent">Hello Component</router-link>
  </nav>
  <router-view/>
</template>

<style>
.form-group {
  text-align:left
}
.spacer {
  padding: 10px;
}
.spacer-sm {
  padding: 5px;
}
.input-upper{
  text-transform: uppercase;
}

hr.new4 {
  border: 3px solid blue;
  margin-left:-10px
}

hr.new2 {
  border: 1px dashed  grayscale;
  margin-left:-10px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* this is for Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

btn-group-sm>.btn, .btn-sm {
  padding: 0.1rem 0.3rem !important;
  font-size: .75rem !important;
}

textarea::placeholder {
  font-style: italic;
  opacity: .4;
  font-size: 14px;
}

.my-table-label {
  font-weight: bold;
  font-size: 19px;
}
.table-responsive {
  overflow-x: hidden !important;
}
.table-responsive .form_control{
  padding: 0 !important;
}
.row>* {
  padding-left:5px !important
}
.my-table-filter {
  padding: 5px;
  border-radius: 15px;
  border: 1px solid #424241;
  max-height: 720px;
  min-height: 600px;
  min-width: 1296px;
  overflow: auto;
  display:inline-block;
}
.top-pad-5 {
  padding-top: 5px;
}
.btm-pad-5 {
  padding-bottom: 5px;
}
.btm-pad-8 {
  padding-bottom: 8px;
}

.btm-pad-10 {
  padding-bottom: 10px;
}

tr {
  font-size: 0.78em;
}
thead {
  font-size: 0.85em;
}

.bi-pencil-square {
  font-size: 1.1rem; 
  color: cornflowerblue;
  cursor: pointer;
  margin-left: 2px;
}
.bi-check-circle {
  font-size: 1.1rem; 
  color: rgb(14, 139, 10);
  cursor: pointer;
  margin-left: 2px;
}

#actions .bi-pencil-square {
  font-size: 1.0rem; 
  color: cornflowerblue;
  cursor: pointer;
}

h5{
  font-weight: bold;
  margin-top: 10px;
}
.bi-trash3 {
  font-size: 1.0rem; 
  color: crimson;
  cursor: pointer;
  margin-left: 5px;
}
.modal-content {
  display: flex;
  flex-direction: column;
}
label {
  padding: 3px;
  font-weight: bold;
}

.my-lpad-thead {
  padding-left: 6px;
}
</style>
