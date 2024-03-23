// Code generated by wunderctl. DO NOT EDIT.

import type { GraphQLError } from '@wundergraph/sdk/client'
import type { ExtractInput, ExtractResponse } from '@wundergraph/sdk/operations'

import type function_OpenaiExtract_website_metadata from '../../../.wundergraph/operations/openai/extract-website-metadata'
import type function_OpenaiLoad_url from '../../../.wundergraph/operations/openai/load-url'
import type function_OpenaiSummarize_url_content from '../../../.wundergraph/operations/openai/summarize-url-content'
import type function_OpenaiSummary from '../../../.wundergraph/operations/openai/summary'
import type function_OpenaiWeather from '../../../.wundergraph/operations/openai/weather'
import type function_UsersGet from '../../../.wundergraph/operations/users/get'
import type function_UsersSubscribe from '../../../.wundergraph/operations/users/subscribe'
import type function_UsersUpdate from '../../../.wundergraph/operations/users/update'

export type JSONValue =
  | string
  | number
  | boolean
  | JSONObject
  | Array<JSONValue>

export type JSONObject = { [key: string]: JSONValue }

export interface CountriesCountryByCodeInput {
  code: string
}

export interface TodosAddTodoInput {
  text: string
  userId: string
}

export interface TodosGetAllTodosForCurrentUserInput {
  userId: string
}

export interface TodosUpdateTodoInput {
  id: string
  text: string
  isCompleted: boolean
}

export type OpenaiExtract_website_metadataInput = ExtractInput<
  typeof function_OpenaiExtract_website_metadata
>

export type OpenaiLoad_urlInput = ExtractInput<typeof function_OpenaiLoad_url>

export type OpenaiSummarize_url_contentInput = ExtractInput<
  typeof function_OpenaiSummarize_url_content
>

export type OpenaiSummaryInput = ExtractInput<typeof function_OpenaiSummary>

export type OpenaiWeatherInput = ExtractInput<typeof function_OpenaiWeather>

export type UsersGetInput = ExtractInput<typeof function_UsersGet>

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>

export interface CountriesCountryByCodeInputInternal {
  code: string
}

export interface TodosAddTodoInputInternal {
  text: string
  userId: string
}

export interface TodosGetAllTodosForCurrentUserInputInternal {
  userId: string
}

export interface TodosUpdateTodoInputInternal {
  id: string
  text: string
  isCompleted: boolean
}

export interface OpenaiExtract_website_metadataInputInternal {
  url: string
}

export interface OpenaiLoad_urlInputInternal {
  url: string
}

export interface OpenaiSummarize_url_contentInputInternal {
  url: string
}

export interface OpenaiSummaryInputInternal {
  url: string
}

export interface OpenaiWeatherInputInternal {
  country: string
}

export interface UsersGetInputInternal {
  id: string
}

export interface UsersSubscribeInputInternal {
  id: string
}

export interface UsersUpdateInputInternal {
  id: string
  name: string
  bio: string
}

export interface CountriesCountryByCodeInputInjected {
  code: string
}

export interface TodosAddTodoInputInjected {
  text: string
  userId: string
}

export interface TodosGetAllTodosForCurrentUserInputInjected {
  userId: string
}

export interface TodosUpdateTodoInputInjected {
  id: string
  text: string
  isCompleted: boolean
}

export interface CountriesCountryByCodeResponse {
  data?: CountriesCountryByCodeResponseData
  errors?: GraphQLError[]
}

export interface TodosAddTodoResponse {
  data?: TodosAddTodoResponseData
  errors?: GraphQLError[]
}

export interface TodosGetAllTodosForCurrentUserResponse {
  data?: TodosGetAllTodosForCurrentUserResponseData
  errors?: GraphQLError[]
}

export interface TodosUpdateTodoResponse {
  data?: TodosUpdateTodoResponseData
  errors?: GraphQLError[]
}

export interface OpenaiExtract_website_metadataResponse {
  data?: OpenaiExtract_website_metadataResponseData
  errors?: GraphQLError[]
}

export interface OpenaiLoad_urlResponse {
  data?: OpenaiLoad_urlResponseData
  errors?: GraphQLError[]
}

export interface OpenaiSummarize_url_contentResponse {
  data?: OpenaiSummarize_url_contentResponseData
  errors?: GraphQLError[]
}

export interface OpenaiSummaryResponse {
  data?: OpenaiSummaryResponseData
  errors?: GraphQLError[]
}

export interface OpenaiWeatherResponse {
  data?: OpenaiWeatherResponseData
  errors?: GraphQLError[]
}

export interface UsersGetResponse {
  data?: UsersGetResponseData
  errors?: GraphQLError[]
}

export interface UsersSubscribeResponse {
  data?: UsersSubscribeResponseData
  errors?: GraphQLError[]
}

export interface UsersUpdateResponse {
  data?: UsersUpdateResponseData
  errors?: GraphQLError[]
}

export interface CountriesCountryByCodeResponseData {
  countries_country?: {
    code: string
    name: string
    currencies: string[]
    capital?: string
  }
}

export interface TodosAddTodoResponseData {
  db_createOneTodo?: {
    id: string
    text: string
    user: {
      id: string
      name?: string
    }
  }
}

export interface TodosGetAllTodosForCurrentUserResponseData {
  db_findManyTodo: {
    id: string
    text: string
    isCompleted: boolean
  }[]
}

export interface TodosUpdateTodoResponseData {
  db_updateOneTodo?: {
    id: string
    text: string
    isCompleted: boolean
  }
}

export type OpenaiExtract_website_metadataResponseData = ExtractResponse<
  typeof function_OpenaiExtract_website_metadata
>

export type OpenaiLoad_urlResponseData = ExtractResponse<
  typeof function_OpenaiLoad_url
>

export type OpenaiSummarize_url_contentResponseData = ExtractResponse<
  typeof function_OpenaiSummarize_url_content
>

export type OpenaiSummaryResponseData = ExtractResponse<
  typeof function_OpenaiSummary
>

export type OpenaiWeatherResponseData = ExtractResponse<
  typeof function_OpenaiWeather
>

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>

export type UsersSubscribeResponseData = ExtractResponse<
  typeof function_UsersSubscribe
>

export type UsersUpdateResponseData = ExtractResponse<
  typeof function_UsersUpdate
>