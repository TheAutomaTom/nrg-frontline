export interface LaborItemsChunckedApiResponseDto {
  Items: LaborItemDto[][];
}

export interface LaborItemDto {
  LaborId: string
  Name: string
  // ExternalId?: string
  // DirectCost: DirectCost
  // TotalCost: TotalCost
  // Margin: Margin
  // MarginPercent: number
  // TotalSell: TotalSell
  Department?: string
  // JobCosting: string
  // GlAccount?: string
  // DebitGLAccount?: string
  Type: string
  WorkOrderType: string
  // Burdens: Burden[]
  HideInKiosk: boolean
}

// export interface DirectCost {
//   Value: number
//   OriginalValue: number
//   CurrencyCode: string
// }

// export interface TotalCost {
//   Value: number
//   OriginalValue: number
//   CurrencyCode: string
// }

// export interface Margin {
//   Value: number
//   OriginalValue: number
//   CurrencyCode: string
// }

// export interface TotalSell {
//   Value: number
//   OriginalValue: number
//   CurrencyCode: string
// }

// export interface Burden {
//   Name: string
//   Description?: string
//   FixedAmount: FixedAmount
//   PercentageValue: number
// }

// export interface FixedAmount {
//   Value: number
//   OriginalValue: number
//   CurrencyCode: string
// }
