import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//define a service user a base URL

const appApi = createApi({
    reducePath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder)=>({
        //creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: '/user',
                method: 'POST',
                body: user,

            })
        }),

        //login
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/user',
                method: 'POST',
                body: user,
            }),
        }),

        // logout 
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: '/logout',
                method: 'DELETE',
                body: payload,
            })
        }),
    })
});

export const {useSignUpUserMutation, useLoginUserMutation, useLogoutUserMutation} = appApi;

export default appApi;