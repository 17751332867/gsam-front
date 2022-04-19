import {get, post} from './http'

export const login = (params) => get(`user/login`, params)

export const selectAllIndexing = () => get(`indexing/selectAll`)

export const submitExperiment = (params) => post('indexingExperiment/doExperiment', params)

export const selectExperimentByUserId = (id) => get(`indexingExperiment/selectByUserId?id=${id}`)

export const submitIndexingBenchmark = (params) => post('benchmark/doBanchmark', params)

export const selectBenchmarkByUserId = (id) => get(`benchmark/selectByUserId?userId=${id}`)

export const selectBenchmarkById = (id) => get(`benchmark/selectById?id=${id}`)

export const getIndexingBenchmarkchartInfo = (id) => get(`benchmark/getChartInfo?id=${id}`)

export const insertPangenomeFile = (params) => post('PangenomeFile/insert', params)

export const selectAllData = () => get('data/selectAll')

export const visualize = (params) => post('visualization/visualize', params)
