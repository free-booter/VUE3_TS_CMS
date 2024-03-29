import request from '@/service/index'
import type { IUsersList, IList } from '@/store/main/system/types'
import type { INewUserData } from '@/views/main/system/user/types'

/**
 *查询用户列表
 * @params  {offset: number,size: number,name?: string,cellphone?: number} data
 * @returns
 */

export const reqUsersList = (data: IUsersList) =>
  request.post({ url: '/users/list', data })

/**
 *获取部门列表
 * @param data
 * @returns
 */
export const reqDepartmentList = (data: IList) =>
  request.post({ url: '/department/list', data })

/**
 *获取角色列表
 * @param data
 * @returns
 */
export const reqRoleList = (data: IList) =>
  request.post({ url: '/role/list', data })

export const reqMenuList = () => request.post({ url: '/menu/list' })
/**
 * 新建用户
 * @param data
 * @returns
 */
export const reqCreateUser = (data: INewUserData) =>
  request.post({ url: '/users', data })

/**
 *查询某个用户
 * @param id
 * @returns
 */
export const reqSearchOneUser = (id: number) =>
  request.get({ url: `/users/${id}` })

/**
 *修改用户
 * @param data
 * @param id
 * @returns
 */
export const reqUpdateUser = (data: INewUserData, id: number) =>
  request.patch({ url: `/users/${id}`, data })

export const reqDeleteUser = (id: number) =>
  request.delete({ url: `/users/${id}` })

// 获取列表数据
export const reqPageList = (pageName: string, data: IList) =>
  request.post({ url: `/${pageName}/list`, data })

export const reqPageCreateData = (pageName: string, data: any) =>
  request.post({ url: `/${pageName}`, data })
/**
 * 删除数据
 * @param pageName
 * @param id
 * @returns
 */
export const reqPageDeleteData = (pageName: string, id: number) =>
  request.delete({ url: `/${pageName}/${id}` })

export const reqPageUpdateData = (pageName: string, data: any, id: number) =>
  request.patch({ url: `/${pageName}/${id}`, data })
