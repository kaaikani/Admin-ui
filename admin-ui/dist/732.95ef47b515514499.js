"use strict";(self.webpackChunkvendure_admin=self.webpackChunkvendure_admin||[]).push([[732],{6732:(yt,k,d)=>{d.r(k),d.d(k,{DEFAULT_DASHBOARD_WIDGET_LAYOUT:()=>S,DEFAULT_WIDGETS:()=>F,DashboardComponent:()=>m,DashboardModule:()=>O,DashboardWidgetComponent:()=>p,GET_ORDER_CHART_DATA:()=>ht,GET_ORDER_SUMMARY:()=>vt,LatestOrdersWidgetComponent:()=>u,LatestOrdersWidgetModule:()=>b,OrderChartWidgetComponent:()=>h,OrderSummaryWidgetComponent:()=>v,OrderSummaryWidgetModule:()=>y,TestWidgetComponent:()=>E,TestWidgetModule:()=>M,WelcomeWidgetComponent:()=>C,WelcomeWidgetModule:()=>T,dashboardRoutes:()=>j});var G=d(1010),t=d(5703),i=d(1644),K=d(2067),l=d(7589),V=d(2874),A=d(2727),N=d(4383),$=d(5835),P=d(2201),D=d(1533),c=d(6884),f=d(910),g=d(7244),x=d(6088),I=d(405),W=d(1614),X=d(3995),U=d(5259),Y=d(3737),B=d(1427);const z=["portal"],J=["*"];function Q(o,r){1&o&&t.SdG(0)}function H(o,r){}const q=o=>({index:o}),Z=o=>({width:o});function tt(o,r){if(1&o){const e=t.RV6();t.j41(0,"button",8),t.bIt("click",function(){const a=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.addWidget(a.id))}),t.EFF(1),t.nI1(2,"translate"),t.k0s()}if(2&o){let e;const n=r.$implicit;t.R7$(),t.SpI(" ",t.bMT(2,1,null!==(e=n.config.title)&&void 0!==e?e:n.id)," ")}}function et(o,r){if(1&o){const e=t.RV6();t.j41(0,"button",22),t.bIt("click",function(){const a=t.eBV(e).$implicit,s=t.XpG(2).$implicit,_=t.XpG(2);return t.Njj(_.setWidgetWidth(s,a))}),t.EFF(1),t.nI1(2,"translate"),t.k0s()}if(2&o){const e=r.$implicit,n=t.XpG(2).$implicit;t.Y8G("disabled",e===n.width),t.R7$(),t.SpI(" ",t.i5U(2,2,"dashboard.widget-width",t.eq3(5,Z,e))," ")}}function rt(o,r){if(1&o){const e=t.RV6();t.j41(0,"vdr-dashboard-widget",13)(1,"div",14)(2,"div",15),t.nrm(3,"clr-icon",16),t.k0s(),t.j41(4,"vdr-dropdown")(5,"button",17),t.nrm(6,"clr-icon",3),t.k0s(),t.j41(7,"vdr-dropdown-menu",4)(8,"h4",18),t.EFF(9),t.nI1(10,"translate"),t.k0s(),t.DNE(11,et,3,7,"button",19),t.nrm(12,"div",20),t.j41(13,"button",8),t.bIt("click",function(){t.eBV(e);const a=t.XpG().$implicit,s=t.XpG(2);return t.Njj(s.removeWidget(a))}),t.nrm(14,"clr-icon",21),t.EFF(15),t.nI1(16,"translate"),t.k0s()()()()()}if(2&o){const e=t.XpG().$implicit,n=t.XpG(2);t.Y8G("widgetConfig",e.config),t.R7$(9),t.JRh(t.bMT(10,4,"dashboard.widget-resize")),t.R7$(2),t.Y8G("ngForOf",n.getSupportedWidths(e.config)),t.R7$(4),t.SpI(" ",t.bMT(16,6,"dashboard.remove-widget")," ")}}function nt(o,r){if(1&o&&(t.j41(0,"div",11),t.DNE(1,rt,17,8,"vdr-dashboard-widget",12),t.k0s()),2&o){const e=r.$implicit,n=t.XpG(2);t.Y8G("ngClass",n.getClassForWidth(e.width))("cdkDragData",e),t.R7$(),t.Y8G("vdrIfPermissions",e.config.requiresPermissions||null)}}function at(o,r){if(1&o){const e=t.RV6();t.j41(0,"div",9),t.bIt("cdkDropListDropped",function(a){t.eBV(e);const s=t.XpG();return t.Njj(s.drop(a))}),t.DNE(1,nt,2,3,"div",10),t.k0s()}if(2&o){const e=r.$implicit,n=r.index,a=t.XpG();t.Y8G("cdkDropListData",t.eq3(3,q,n)),t.R7$(),t.Y8G("ngForOf",e)("ngForTrackBy",a.trackRowItem)}}const ot=o=>["/orders/",o];function it(o,r){if(1&o&&(t.j41(0,"a",6)(1,"span"),t.EFF(2),t.k0s(),t.nrm(3,"clr-icon",7),t.k0s()),2&o){const e=r.item;t.Y8G("routerLink",t.eq3(2,ot,e.id)),t.R7$(2),t.JRh(e.code)}}function dt(o,r){if(1&o&&t.nrm(0,"vdr-order-state-label",8),2&o){const e=r.item;t.Y8G("state",e.state)}}function st(o,r){if(1&o&&t.nrm(0,"vdr-customer-label",9),2&o){const e=r.item;t.Y8G("customer",e.customer)}}function ct(o,r){if(1&o&&(t.EFF(0),t.nI1(1,"localeCurrency")),2&o){const e=r.item;t.SpI(" ",t.i5U(1,1,e.totalWithTax,e.currencyCode)," ")}}function lt(o,r){if(1&o&&(t.EFF(0),t.nI1(1,"timeAgo")),2&o){const e=r.item;t.SpI(" ",t.bMT(1,1,e.orderPlacedAt)," ")}}function _t(o,r){if(1&o){const e=t.RV6();t.j41(0,"div",2)(1,"button",3),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.metricType$.next(a.MetricType.OrderTotal))}),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"button",4),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.metricType$.next(a.MetricType.OrderCount))}),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"button",4),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.metricType$.next(a.MetricType.AverageOrderValue))}),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.nrm(10,"div",5),t.j41(11,"button",3),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.refresh())}),t.nrm(12,"clr-icon",6),t.k0s()()}if(2&o){const e=r.ngIf,n=t.XpG();t.R7$(),t.AVh("active",e===n.MetricType.OrderTotal),t.R7$(),t.SpI(" ",t.bMT(3,9,"dashboard.metric-order-total-value")," "),t.R7$(2),t.AVh("active",e===n.MetricType.OrderCount),t.R7$(),t.SpI(" ",t.bMT(6,11,"dashboard.metric-number-of-orders")," "),t.R7$(2),t.AVh("active",e===n.MetricType.AverageOrderValue),t.R7$(),t.SpI(" ",t.bMT(9,13,"dashboard.metric-average-order-value")," ")}}function gt(o,r){if(1&o){const e=t.RV6();t.j41(0,"div",7)(1,"button",8),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.selection$.next({timeframe:"day",date:a.today}))}),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"button",9),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.selection$.next({timeframe:"day",date:a.yesterday}))}),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"button",9),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.selection$.next({timeframe:"week"}))}),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"button",9),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.selection$.next({timeframe:"month"}))}),t.EFF(11),t.nI1(12,"translate"),t.k0s()()}if(2&o){const e=r.ngIf,n=t.XpG();t.R7$(),t.AVh("active",e.date===n.today),t.R7$(),t.SpI(" ",t.bMT(3,12,"dashboard.today")," "),t.R7$(2),t.AVh("active",e.date===n.yesterday),t.R7$(),t.SpI(" ",t.bMT(6,14,"dashboard.yesterday")," "),t.R7$(2),t.AVh("active","week"===e.timeframe),t.R7$(),t.SpI(" ",t.bMT(9,16,"dashboard.thisWeek")," "),t.R7$(2),t.AVh("active","month"===e.timeframe),t.R7$(),t.SpI(" ",t.bMT(12,18,"dashboard.thisMonth")," ")}}function pt(o,r){if(1&o&&(t.j41(0,"div",10),t.EFF(1),t.nI1(2,"localeDate"),t.nI1(3,"localeDate"),t.k0s()),2&o){const e=r.ngIf;t.R7$(),t.Lme(" ",t.bMT(2,2,e.start)," - ",t.bMT(3,4,e.end)," ")}}function mt(o,r){if(1&o&&(t.j41(0,"p",4),t.EFF(1),t.k0s()),2&o){const e=t.XpG(2);t.R7$(),t.Lme(" ",e.hideVendureBranding?"":"Vendure"," ",e.hideVersion?"":"Admin UI v"+e.version," ")}}function ut(o,r){if(1&o&&(t.j41(0,"div")(1,"h4",3),t.EFF(2),t.nrm(3,"br"),t.j41(4,"small",4),t.EFF(5),t.nI1(6,"timeAgo"),t.k0s()(),t.DNE(7,mt,2,2,"p",5),t.k0s()),2&o){const e=r.ngIf,n=t.XpG();t.R7$(2),t.Lme(" Welcome, ",e.firstName," ",e.lastName,""),t.R7$(3),t.SpI("Last login: ",t.bMT(6,4,e.user.lastLogin),""),t.R7$(2),t.Y8G("ngIf",!n.hideVendureBranding||!n.hideVersion)}}class p{ngAfterViewInit(){this.loadWidget()}loadWidget(){var r=this;return(0,G.A)(function*(){const e=r.widgetConfig.loadComponent(),n=e instanceof Promise?yield e:e;r.componentRef=r.portal.createComponent(n),r.componentRef.changeDetectorRef.detectChanges()})()}ngOnDestroy(){this.componentRef&&this.componentRef.destroy()}static{this.\u0275fac=function(e){return new(e||p)}}static{this.\u0275cmp=t.VBU({type:p,selectors:[["vdr-dashboard-widget"]],viewQuery:function(e,n){if(1&e&&t.GBs(z,5,t.c1b),2&e){let a;t.mGM(a=t.lsd())&&(n.portal=a.first)}},inputs:{widgetConfig:"widgetConfig"},ngContentSelectors:J,decls:5,vars:3,consts:[["portal",""],[3,"title"],["vdrCardControls",""]],template:function(e,n){if(1&e&&(t.NAR(),t.j41(0,"vdr-card",1),t.nI1(1,"translate"),t.DNE(2,Q,1,0,"ng-template",2)(3,H,0,0,"ng-template",null,0,t.C5r),t.k0s()),2&e){let a;t.Y8G("title",t.bMT(1,1,null!==(a=n.widgetConfig.title)&&void 0!==a?a:""))}},dependencies:[i.iby,i.aVo,g.D9],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0})}}class m{constructor(r,e,n,a){this.dashboardWidgetService=r,this.localStorageService=e,this.changedDetectorRef=n,this.dataService=a,this.deletionMarker="__delete__",this.setTitle=(0,i.kwp)()}ngOnInit(){this.availableWidgets$=this.dataService.client.userStatus().stream$.pipe((0,l.T)(({userStatus:r})=>r.permissions),(0,l.T)(r=>this.dashboardWidgetService.getAvailableWidgets(r)),(0,V.M)(r=>this.widgetLayout=this.initLayout(r.map(e=>e.id)))),this.setTitle("breadcrumb.dashboard")}getClassForWidth(r){switch(r){case 3:return"clr-col-12 clr-col-sm-6 clr-col-lg-3";case 4:return"clr-col-12 clr-col-sm-6 clr-col-lg-4";case 6:return"clr-col-12 clr-col-lg-6";case 8:return"clr-col-12 clr-col-lg-8";case 12:return"clr-col-12";default:(0,K.assertNever)(r)}}getSupportedWidths(r){return r.supportedWidths||[3,4,6,8,12]}setWidgetWidth(r,e){r.width=e,this.recalculateLayout()}trackRow(r,e){return e.map(a=>`${a.id}:${a.width}`).join("|")}trackRowItem(r,e){return e.config}addWidget(r){const e=this.dashboardWidgetService.getWidgetById(r);if(e){const a={id:r,config:e,width:this.getSupportedWidths(e)[0]};let s;this.widgetLayout&&this.widgetLayout.length?s=this.widgetLayout[this.widgetLayout.length-1]:(s=[],this.widgetLayout?.push(s)),s.push(a),this.recalculateLayout()}}removeWidget(r){r.id=this.deletionMarker,this.recalculateLayout()}drop(r){const{currentIndex:e,previousIndex:n,previousContainer:a,container:s}=r;if((n!==e||a.data.index!==s.data.index)&&this.widgetLayout){const _=this.widgetLayout[a.data.index],w=this.widgetLayout[s.data.index];_.splice(n,1),w.splice(e,0,r.item.data),this.recalculateLayout()}}initLayout(r){const e=this.localStorageService.get("dashboardWidgetLayout");let n;return e&&(n=e.filter(a=>r.includes(a.id))),this.dashboardWidgetService.getWidgetLayout(n)}recalculateLayout(){if(this.widgetLayout){const e=this.widgetLayout.reduce((n,a)=>[...n,...a],[]).filter(n=>n.id!==this.deletionMarker).map(n=>({id:n.id,width:n.width}));this.widgetLayout=this.dashboardWidgetService.getWidgetLayout(e),this.localStorageService.set("dashboardWidgetLayout",e),setTimeout(()=>this.changedDetectorRef.markForCheck())}}static{this.\u0275fac=function(e){return new(e||m)(t.rXU(i.g_3),t.rXU(i.sji),t.rXU(t.gRc),t.rXU(i.uSP))}}static{this.\u0275cmp=t.VBU({type:m,selectors:[["vdr-dashboard"]],decls:13,vars:8,consts:[[1,"widget-header","mb-1"],["vdrDropdownTrigger","",1,"btn","btn-secondary","btn-sm"],["shape","plus"],["shape","ellipsis-vertical"],["vdrPosition","bottom-right"],["vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["cdkDropListGroup",""],["class","clr-row dashboard-row","cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf","ngForTrackBy"],["vdrDropdownItem","",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"clr-row","dashboard-row",3,"cdkDropListDropped","cdkDropListData"],["class","dashboard-item","cdkDrag","",3,"ngClass","cdkDragData",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"dashboard-item",3,"ngClass","cdkDragData"],[3,"widgetConfig",4,"vdrIfPermissions"],[3,"widgetConfig"],[1,"flex"],["cdkDragHandle","",1,"drag-handle"],["shape","drag-handle","size","24"],["vdrDropdownTrigger","",1,"icon-button"],[1,"dropdown-header"],["vdrDropdownItem","",3,"disabled","click",4,"ngFor","ngForOf"],["role","separator",1,"dropdown-divider"],["shape","trash",1,"is-danger"],["vdrDropdownItem","",3,"click","disabled"]],template:function(e,n){1&e&&(t.j41(0,"vdr-page-block")(1,"div",0)(2,"vdr-dropdown")(3,"button",1),t.nrm(4,"clr-icon",2),t.EFF(5),t.nI1(6,"translate"),t.nrm(7,"clr-icon",3),t.k0s(),t.j41(8,"vdr-dropdown-menu",4),t.DNE(9,tt,3,3,"button",5),t.nI1(10,"async"),t.k0s()()(),t.j41(11,"div",6),t.DNE(12,at,2,5,"div",7),t.k0s()()),2&e&&(t.R7$(5),t.SpI(" ",t.bMT(6,4,"dashboard.add-widget")," "),t.R7$(4),t.Y8G("ngForOf",t.bMT(10,6,n.availableWidgets$)),t.R7$(3),t.Y8G("ngForOf",n.widgetLayout)("ngForTrackBy",n.trackRow))},dependencies:[D.U4n,c.YU,c.Sq,f.O7,f.RK,f.T1,f.Fb,i.PsF,i.qLY,i.j$H,i.Mrl,i.pFL,i.eH4,p,c.Jj,g.D9],styles:[".widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;margin:24px;line-height:1em}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.drag-handle[_ngcontent-%COMP%]{cursor:move}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{padding:0;border-width:1;margin-bottom:6px;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:2px dashed var(--color-component-border-200);border-radius:var(--border-radius);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}}const j=[{path:"",component:m,pathMatch:"full"}];W.J1`
    query GetLatestOrders($options: OrderListOptions) {
        orders(options: $options) {
            items {
                id
                createdAt
                updatedAt
                type
                orderPlacedAt
                code
                state
                total
                totalWithTax
                currencyCode
                customer {
                    id
                    firstName
                    lastName
                }
            }
        }
    }
`;class u{constructor(r){this.dataService=r}ngOnInit(){this.latestOrders$=this.dataService.query(i.eWg,{options:{take:10,filter:{active:{eq:!1},state:{notIn:["Cancelled","Draft"]}},sort:{orderPlacedAt:i.xBQ.DESC}}}).refetchOnChannelChange().mapStream(r=>r.orders.items)}static{this.\u0275fac=function(e){return new(e||u)(t.rXU(i.uSP))}}static{this.\u0275cmp=t.VBU({type:u,selectors:[["vdr-latest-orders-widget"]],decls:17,vars:20,consts:[["id","latest-orders-widget-list",3,"items"],["id","code",3,"heading"],["id","state",3,"heading","hiddenByDefault"],["id","customer",3,"heading","hiddenByDefault"],["id","total",3,"heading"],["id","placed-at",3,"heading"],[1,"button-ghost",3,"routerLink"],["shape","arrow right"],[3,"state"],[3,"customer"]],template:function(e,n){1&e&&(t.j41(0,"vdr-data-table-2",0),t.nI1(1,"async"),t.j41(2,"vdr-dt2-column",1),t.nI1(3,"translate"),t.DNE(4,it,4,4,"ng-template"),t.k0s(),t.j41(5,"vdr-dt2-column",2),t.nI1(6,"translate"),t.DNE(7,dt,1,1,"ng-template"),t.k0s(),t.j41(8,"vdr-dt2-column",3),t.nI1(9,"translate"),t.DNE(10,st,1,1,"ng-template"),t.k0s(),t.j41(11,"vdr-dt2-column",4),t.nI1(12,"translate"),t.DNE(13,ct,2,4,"ng-template"),t.k0s(),t.j41(14,"vdr-dt2-column",5),t.nI1(15,"translate"),t.DNE(16,lt,2,3,"ng-template"),t.k0s()()),2&e&&(t.Y8G("items",t.bMT(1,8,n.latestOrders$)),t.R7$(2),t.Y8G("heading",t.bMT(3,10,"common.code")),t.R7$(3),t.Y8G("heading",t.bMT(6,12,"order.state"))("hiddenByDefault",!0),t.R7$(3),t.Y8G("heading",t.bMT(9,14,"customer.customer"))("hiddenByDefault",!0),t.R7$(3),t.Y8G("heading",t.bMT(12,16,"order.total")),t.R7$(3),t.Y8G("heading",t.bMT(15,18,"order.placed-at")))},dependencies:[D.U4n,x.Wk,i.Eb9,i.Fam,i.IMU,i.Y9G,c.Jj,g.D9,i.nnP,i.uc0],styles:["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}vdr-order-state-label[_ngcontent-%COMP%]{display:inline-block;margin-top:2px}"],changeDetection:0})}}class b{static{this.\u0275fac=function(e){return new(e||b)}}static{this.\u0275mod=t.$C({type:b})}static{this.\u0275inj=t.G2t({imports:[i.Ui,i.GgS]})}}const ht=W.J1`
    query GetOrderChartData($refresh: Boolean, $types: [MetricType!]!) {
        metricSummary(input: { interval: Daily, types: $types, refresh: $refresh }) {
            interval
            type
            entries {
                label
                value
            }
        }
    }
`;class h{constructor(r){this.dataService=r,this.refresh$=new X.B,this.metricType$=new U.t(i.vj3.OrderTotal),this.MetricType=i.vj3}ngOnInit(){const r=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream(a=>a.activeChannel.defaultCurrencyCode||void 0),e=this.dataService.client.uiState().mapStream(a=>a.uiState),n=this.metricType$.pipe((0,A.F)());this.metrics$=(0,Y.z)(n,r,e).pipe((0,P.n)(([a,s,_])=>this.refresh$.pipe((0,N.Z)(!1),(0,P.n)(w=>this.dataService.query(i.IEA,{types:[a],refresh:w}).mapSingle(R=>R.metricSummary).pipe((0,l.T)(R=>{const Dt=a===i.vj3.OrderCount?"number":"currency",ft=`${_.language}-${_.locale}`,bt={formatValueAs:Dt,currencyCode:s,locale:ft};return R.find(L=>L.type===a)?.entries.map(L=>({...L,formatOptions:bt}))??[]}))))))}refresh(){this.refresh$.next(!0)}static{this.\u0275fac=function(e){return new(e||h)(t.rXU(i.uSP))}}static{this.\u0275cmp=t.VBU({type:h,selectors:[["vdr-order-chart-widget"]],decls:4,vars:6,consts:[[3,"entries"],["class","flex",4,"ngIf"],[1,"flex"],[1,"button-small",3,"click"],[1,"ml-1","button-small",3,"click"],[1,"flex-spacer"],["shape","refresh"]],template:function(e,n){1&e&&(t.nrm(0,"vdr-chart",0),t.nI1(1,"async"),t.DNE(2,_t,13,15,"div",1),t.nI1(3,"async")),2&e&&(t.Y8G("entries",t.bMT(1,2,n.metrics$)),t.R7$(2),t.Y8G("ngIf",t.bMT(3,4,n.metricType$)))},dependencies:[D.U4n,c.bT,i.Qeh,c.Jj,g.D9],styles:[".button-small.active[_ngcontent-%COMP%]{background-color:var(--color-primary-200);color:var(--color-primary-900)}"],changeDetection:0})}}const vt=W.J1`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orders(options: { filter: { orderPlacedAt: { between: { start: $start, end: $end } } } }) {
            totalItems
            items {
                id
                totalWithTax
                currencyCode
            }
        }
    }
`;class v{constructor(r){this.dataService=r,this.today=new Date,this.yesterday=new Date((new Date).setDate(this.today.getDate()-1)),this.selection$=new U.t({timeframe:"day",date:this.today})}ngOnInit(){this.dateRange$=this.selection$.pipe((0,A.F)(),(0,l.T)(e=>({start:B(e.date).startOf(e.timeframe).toDate(),end:B(e.date).endOf(e.timeframe).toDate()})),(0,$.t)(1));const r=this.dateRange$.pipe((0,P.n)(({start:e,end:n})=>this.dataService.query(i.mVK,{start:e.toISOString(),end:n.toISOString()}).refetchOnChannelChange().mapStream(a=>a.orders)),(0,$.t)(1));this.totalOrderCount$=r.pipe((0,l.T)(e=>e.totalItems)),this.totalOrderValue$=r.pipe((0,l.T)(e=>e.items.reduce((n,a)=>n+a.totalWithTax,0))),this.currencyCode$=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream(e=>e.activeChannel.defaultCurrencyCode||void 0)}static{this.\u0275fac=function(e){return new(e||v)(t.rXU(i.uSP))}}static{this.\u0275cmp=t.VBU({type:v,selectors:[["vdr-order-summary-widget"]],decls:22,vars:23,consts:[[1,"stats"],[1,"stat"],[1,"stat-figure"],[1,"stat-label"],[1,"footer"],["class","flex",4,"ngIf"],["class","date-range",4,"ngIf"],[1,"flex"],[1,"button-small",3,"click"],[1,"ml-1","button-small",3,"click"],[1,"date-range"]],template:function(e,n){1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3),t.nI1(4,"async"),t.k0s(),t.j41(5,"div",3),t.EFF(6),t.nI1(7,"translate"),t.k0s()(),t.j41(8,"div",1)(9,"div",2),t.EFF(10),t.nI1(11,"async"),t.nI1(12,"async"),t.nI1(13,"localeCurrency"),t.k0s(),t.j41(14,"div",3),t.EFF(15),t.nI1(16,"translate"),t.k0s()()(),t.j41(17,"div",4),t.DNE(18,gt,13,20,"div",5),t.nI1(19,"async"),t.DNE(20,pt,4,6,"div",6),t.nI1(21,"async"),t.k0s()),2&e&&(t.R7$(3),t.JRh(t.bMT(4,6,n.totalOrderCount$)),t.R7$(3),t.JRh(t.bMT(7,8,"dashboard.total-orders")),t.R7$(4),t.SpI(" ",t.i5U(13,14,t.bMT(11,10,n.totalOrderValue$),t.bMT(12,12,n.currencyCode$)||void 0)," "),t.R7$(5),t.JRh(t.bMT(16,17,"dashboard.total-order-value")),t.R7$(3),t.Y8G("ngIf",t.bMT(19,19,n.selection$)),t.R7$(2),t.Y8G("ngIf",t.bMT(21,21,n.dateRange$)))},dependencies:[c.bT,c.Jj,g.D9,i.PU$,i.uc0],styles:[".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 3);font-size:var(--font-size-xs)}.footer[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;justify-content:space-between}.button-small.active[_ngcontent-%COMP%]{background-color:var(--color-primary-200);color:var(--color-primary-900)}"],changeDetection:0})}}class y{static{this.\u0275fac=function(e){return new(e||y)}}static{this.\u0275mod=t.$C({type:y})}static{this.\u0275inj=t.G2t({imports:[i.Ui]})}}const S=[{id:"metrics",width:12},{id:"orderSummary",width:6},{id:"latestOrders",width:6}],F={metrics:{title:(0,I.x)("dashboard.metrics"),supportedWidths:[6,8,12],loadComponent:()=>h,requiresPermissions:[i.aXG.ReadOrder]},orderSummary:{title:(0,I.x)("dashboard.orders-summary"),loadComponent:()=>v,supportedWidths:[4,6,8,12],requiresPermissions:[i.aXG.ReadOrder]},latestOrders:{title:(0,I.x)("dashboard.latest-orders"),loadComponent:()=>u,supportedWidths:[6,8,12],requiresPermissions:[i.aXG.ReadOrder]}};class O{constructor(r){Object.entries(F).map(([e,n])=>{r.getWidgetById(e)||r.registerWidget(e,n)}),0===r.getDefaultLayout().length&&r.setDefaultLayout(S)}static{this.\u0275fac=function(e){return new(e||O)(t.KVO(i.g_3))}}static{this.\u0275mod=t.$C({type:O})}static{this.\u0275inj=t.G2t({imports:[i.GgS,x.iI.forChild(j)]})}}class E{static{this.\u0275fac=function(e){return new(e||E)}}static{this.\u0275cmp=t.VBU({type:E,selectors:[["vdr-test-widget"]],decls:2,vars:0,template:function(e,n){1&e&&(t.j41(0,"p"),t.EFF(1,"This is a test widget!"),t.k0s())},changeDetection:0})}}class M{static{this.\u0275fac=function(e){return new(e||M)}}static{this.\u0275mod=t.$C({type:M})}static{this.\u0275inj=t.G2t({})}}class C{constructor(r){this.dataService=r,this.version=i.cBU,this.brand=(0,i.WEc)().brand,this.hideVendureBranding=(0,i.WEc)().hideVendureBranding,this.hideVersion=(0,i.WEc)().hideVersion}ngOnInit(){this.administrator$=this.dataService.administrator.getActiveAdministrator().mapStream(r=>r.activeAdministrator||null)}static{this.\u0275fac=function(e){return new(e||C)(t.rXU(i.uSP))}}static{this.\u0275cmp=t.VBU({type:C,selectors:[["vdr-welcome-widget"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"placeholder"],["shape","line-chart","size","128"],[1,""],[1,"p5"],["class","p5",4,"ngIf"]],template:function(e,n){1&e&&(t.DNE(0,ut,8,6,"div",0),t.nI1(1,"async"),t.j41(2,"div",1),t.nrm(3,"clr-icon",2),t.k0s()),2&e&&t.Y8G("ngIf",t.bMT(1,1,n.administrator$))},dependencies:[D.U4n,c.bT,c.Jj,i.nnP],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],changeDetection:0})}}class T{static{this.\u0275fac=function(e){return new(e||T)}}static{this.\u0275mod=t.$C({type:T})}static{this.\u0275inj=t.G2t({imports:[i.Ui]})}}}}]);
//# sourceMappingURL=732.95ef47b515514499.js.map