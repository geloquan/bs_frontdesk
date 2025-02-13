import React from "react";
import {
  Breadcrumb as Root,
  BreadcrumbItem as Item,
  BreadcrumbLink as Link,
  BreadcrumbList as List,
  BreadcrumbPage as Page,
  BreadcrumbSeparator as Separator,
} from "./ui/breadcrumb";
import { DashboardItem } from "@/types";

export function CrumbsComponent({
  item
} : {
  item: DashboardItem
}) {
  return (
    <Root
      className="justify-center place-content-center"
    >
      <List>
        <Item>
          Client
        </Item>
        <Separator 
        />
        <Item>
          Service
        </Item>
        <Separator />
        <Item>
          Seat
        </Item>
      </List>
    </Root>
  );
}