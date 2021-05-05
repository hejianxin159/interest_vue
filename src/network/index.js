import { request} from "@/network/request";

export function indexResponse() {
  return request({
    url: '/article'
  })
}
