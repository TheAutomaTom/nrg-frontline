import type {
  LaborItemDto,
  LaborItemsChunckedApiResponseDto,
} from "../models/nrg-dtos/LaborItemDto";
import type {
  WorkOrdersChunckedApiResponseDto,
  WorkOrderDto,
} from "../models/nrg-dtos/WorkOrderDto";
import type { INrgClient } from "./INrgClient";
// import { ResponseState } from "../ResponseState";

export class NrgClient implements INrgClient {
  _apiUrlBase: string;
  _proxyTag: string = "/proxy";
  _urlGetWorkOrders: string = "/api/projectWorkOrders?status=Open";
  _urlGetLaborItems: string = "/api/labors";
  // _urlPostPunch: string = "/api/timeTracking";
  key: string = "";

  constructor() {
    // console.warn(`==> NrgClient...`);
    // console.warn(`*** process.env.VITE_NRG_API_URL_BASE: ${import.meta.env.VITE_NRG_API_URL_BASE}`);
    // this._apiUrlBase = import.meta.env.VITE_NRG_API_URL_BASE as string;
    this._apiUrlBase = import.meta.env.DEV
      ? this._proxyTag
      : import.meta.env.VITE_BASE_URL + this._proxyTag;
    // console.log("import.meta.env.DEV == " + import.meta.env.DEV);
    // console.log("apiUrlBase == " + this._apiUrlBase);
    // console.warn("*** _apiUrlBase: ", this._apiUrlBase);
  }

  SetKey(pw: string): boolean {
    this.key = pw;
    return this.key == pw;
  }

  async get(url: string): Promise<Response> {
    // console.log("get url: " + this._apiUrlBase + url);
    // console.log(`key: `+ this.key);

    return await fetch(this._apiUrlBase + url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Api-Key": this.key,
      },
    });
  }

  async post(url: string, toPost: string): Promise<Response> {
    //
    // console.warn(`==> NrgClient.post(${url})`);
    // console.log("post url: " + this._apiUrlBase + url);
    // console.dir(`toPost: ${toPost}`);
    //
    return await fetch(this._apiUrlBase + url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Api-Key": this.key,
        "Content-Type": "application/json",
      },
      body: toPost,
    });
  }
  //===================================================================================//

  async GetLaborItems(): Promise<LaborItemDto[]> {
    const res = await this.get(this._urlGetLaborItems);

    if (res.ok) {
      const data = (await res.json()) as LaborItemsChunckedApiResponseDto;
      const flatItems: LaborItemDto[] = data.Items.flat();

      // console.log("GetLaborItems()");
      // console.dir(flatItems as LaborItemDto[]);

      return flatItems as LaborItemDto[];
    } else {
      throw Error(res.statusText);
    }
  }

  async GetWorkOrders(): Promise<WorkOrderDto[]> {
    const res = await this.get(this._urlGetWorkOrders);

    if (res.ok) {
      const data = (await res.json()) as WorkOrdersChunckedApiResponseDto;
      const flatItems: WorkOrderDto[] = data.Items.flat();

      // console.log("GetWorkOrders()");
      // console.dir(flatItems as WorkOrderDto[]);

      return flatItems as WorkOrderDto[];
    } else {
      throw Error(res.statusText);
    }
  }
}
