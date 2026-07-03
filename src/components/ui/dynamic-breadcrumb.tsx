import React, { useEffect, useState } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function DynamicBreadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<{ label: string; href: string }[]>([])
  const [currentPath, setCurrentPath] = useState<string>("")

  useEffect(() => {
    // 取得當前的路徑名稱
    const pathname = window.location.pathname
    
    // 將路徑依照斜線分割並過濾掉空字串
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    // 建立麵包屑的資料陣列
    const generatedBreadcrumbs = pathSegments.map((segment, index) => {
      // 組合出目前節點的完整路徑
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      
      // 將路徑名稱轉換為首字母大寫的格式作為標籤
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)
      
      return { label, href }
    })

    setBreadcrumbs(generatedBreadcrumbs)
    setCurrentPath(pathname)
  }, [])

  // 如果目前位於首頁則不重複渲染動態路徑
  if (currentPath === "/") {
    return (
      <Breadcrumb id="breadcrumb">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>首頁</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  return (
    <Breadcrumb id="breadcrumb">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">首頁</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.length > 0 && <BreadcrumbSeparator />}
        
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <React.Fragment key={crumb.href}>
              <BreadcrumbItem>
                {isLast ? (
                  // 最後一個節點使用不可點擊的 Page 組件
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  // 非最後一個節點使用可點擊的 Link 組件
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}