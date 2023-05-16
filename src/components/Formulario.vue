<script setup lang="ts">
  import * as yup from 'yup';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  
  import {Field, ErrorMessage, Form, useForm} from 'vee-validate'
  const validationSchema = yup.object().shape({
    name : yup.string().required('Name is required!'),
    email : yup.string().required('Email is required!'),
    message : yup.string().required('Message is required!')
  })
  //investigar sobre hooks//
  const {handleSubmit}= useForm({
    initialValues:{name:'' , email: '', message :'',}, validationSchema
  })
  const OnSubmit = handleSubmit(async (values) => {
  try {
    //funcion que optimiza al utilizar abort early
    await validationSchema.validate(values, { abortEarly: false });

    toast.success('¡El formulario se envió correctamente!', {
     position:'top-center'
      
    });
  } catch (error) {
  }
});
</script>
<template>
  <div>
    <div class="py-16 flex justify-center items-center h-full dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-500 rounded-lg">
        <div class="flex flex-col justify-center items-center">
          <h3 class="text-4xl font-bold mb-4 text-center dark:text-white">Contact</h3>
          <p class="text-gray-700 mb-8 text-center dark:text-white">
            
           We are available to serve you!!
          </p>
          <form @submit="OnSubmit" class="w-full max-w-md" >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="name"
                  class="block text-black font-bold text-sm mb-2 dark:text-white"
                >Name</label>
                <Field
                  type="text"
                  placeholder ="Juan Gomez"
                  id="name"
                  name="name"
                  class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
                ></Field>
                <ErrorMessage name='name'></ErrorMessage>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="email"
                  class="block text-black font-bold text-sm mb-2 dark:text-white"
                >Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
                  placeholder="dfer4738@gmail.com"
                ></Field>
                <ErrorMessage name='email'></ErrorMessage>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="message"
                  class="block text-black font-bold text-sm mb-2 dark:text-white"
                >Message
              </label>
                <Field
                  id="message"
                  name="message"
                  class="w-full h-32 px-4 py-1 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
                  placeholder="Hola necesito de sus servicios"
                ></Field>
                <ErrorMessage name='message'></ErrorMessage>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <button
                type="submit"
                class="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 p-2"
              >Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>