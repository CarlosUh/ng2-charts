import * as ng2Charts from 'ng2-charts';
import { AppChartMetaConfig } from './app-chart-meta-config';

// Generated by ng2-charts-schematics. This file should not need any modification.
// To add new features to the chart.js module, edit the file 'app-chart-meta-config.ts`

export * from './app-chart-meta-config';
export {
  ChartsModule,
  Color,
  Colors,
  defaultColors,
  ChartDataSetsBase,
  ChartDataSetsUnion,
  BaseChartMetaConfig,
  ChartMetaConfig,
  LegacyMetaConfig,
  PromiscuousMetaConfig,
  ScaleUnion,
  ThemeService,
  BaseChartDirective,
  Label,
} from 'ng2-charts';

export type AngularChart = ng2Charts.AngularChart<AppChartMetaConfig>;
export type ChartOptions = ng2Charts.ChartOptions<AppChartMetaConfig> & AppChartMetaConfig['additionalOptions'];
export type ChartDataSetsBar = ng2Charts.ChartDataSetsBar<AppChartMetaConfig>;
export type ChartDataSetsLine = ng2Charts.ChartDataSetsLine<AppChartMetaConfig>;
export type ChartDataSetsDoughnut = ng2Charts.ChartDataSetsDoughnut<AppChartMetaConfig>;
export type ChartDataSetsRadar = ng2Charts.ChartDataSetsRadar<AppChartMetaConfig>;
export type ChartDataSetsBubble = ng2Charts.ChartDataSetsBubble<AppChartMetaConfig>;
export type ChartDataSetsScatter = ng2Charts.ChartDataSetsScatter<AppChartMetaConfig>;
export type MultiDataSet = ng2Charts.MultiDataSet<AppChartMetaConfig>;
export type SingleDataSet = ng2Charts.SingleDataSet<AppChartMetaConfig>;
export type ChartType = ng2Charts.ChartType<AppChartMetaConfig>;
export type LinearScale = ng2Charts.LinearScale<AppChartMetaConfig>;
export type LogarithmicScale = ng2Charts.LogarithmicScale<AppChartMetaConfig>;
export type CategoryScale = ng2Charts.CategoryScale<AppChartMetaConfig>;
export type CartesianScale = ng2Charts.CartesianScale<AppChartMetaConfig>;
export type RadialScale = ng2Charts.RadialScale<AppChartMetaConfig>;
export type RadialLinearScale = ng2Charts.RadialLinearScale<AppChartMetaConfig>;
