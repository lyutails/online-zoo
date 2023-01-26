"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[934],{934:(e,t,n)=>{n.r(t),n.d(t,{Quidditch:()=>i});const o="http://localhost:3000/garage",a=(e,t=7)=>fetch(`${o}?_page=${e}&_limit=${t}`).then((e=>e.json()));var s=n(674);class c extends s.H{constructor(e){super("div",{className:"control_panel"});const t=new s.H("div",{className:"control_one"});this.append(t);const n=new s.H("input",{className:"control_one_item create_input"});t.append(n);const c=new s.H("input",{type:"color",value:"#ad0c36",className:"control_one_item colour_picker create"});t.append(c);const r=new s.H("button",{className:"control_one_item create_button"});r.setContent("Create"),t.append(r),r.getNode().addEventListener("click",(()=>{var t,s;n.getNode().value&&((t=n.getNode().value,s=c.getNode().value,fetch(`${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:s})}).then((e=>("OK"in e&&a(),e)))).then((t=>{e()})),n.getNode().value="",c.getNode().value="#ffffff")}));const i=new s.H("div",{className:"control_two"});this.append(i);const d=new s.H("input",{className:"control_two_item update_input"});i.append(d);const p=new s.H("input",{type:"color",value:"#2bc771",className:"control_two_item colour_picker update"});i.append(p);const l=new s.H("button",{className:"control_two_item update_button"});l.setContent("Update"),i.append(l),l.getNode().addEventListener("click",(()=>{return t=this,n=void 0,c=function*(){var t,n;d.getNode().value&&((t=d.getNode().value,n=p.getNode().value,fetch(`${o}/undefined`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:n})}).then((e=>("OK"in e&&a(),e)))).then((t=>{e()})),d.getNode().value="",p.getNode().value="#ffffff")},new((s=void 0)||(s=Promise))((function(e,o){function a(e){try{i(c.next(e))}catch(e){o(e)}}function r(e){try{i(c.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}i((c=c.apply(t,n||[])).next())}));var t,n,s,c}));const h=new s.H("div",{className:"control_three"});this.append(h);const u=new s.H("button",{className:"control_three_item race_button"});u.setContent("Race"),h.append(u);const m=new s.H("button",{className:"control_three_item reset_button"});m.setContent("Reset"),h.append(m);const _=new s.H("button",{className:"control_three_item more_button"});_.setContent("More Witches"),h.append(_)}}class r extends s.H{constructor(e){super("div",{className:"track"});const t=new s.H("div",{className:"track_line"});this.append(t);const n=new s.H("button",{className:"button_select"});n.setContent("select"),this.append(n),n.getNode().addEventListener("click",(()=>{var t;(t=e.id,fetch(`${o}/${t}`,{method:"GET"}).then((e=>e.json()))).then((e=>e))}));const a=new s.H("button",{className:"button_remove"});a.setContent("remove"),this.append(a),a.getNode().addEventListener("click",(()=>{var t;(t=e.id,fetch(`${o}/${t}`,{method:"DELETE"}).then((e=>{e.json()}))).then((()=>this.remove()))}));const c=new s.H("button",{className:"button_start"});c.setContent("start"),this.append(c);const r=this.getNode().offsetWidth;console.log(r),c.getNode().addEventListener("click",(()=>{var t;console.log(e.id),(t=e.id,fetch(`${o}?id=${t}&status=started`,{method:"PATCH"}).then((e=>e.json())).then((e=>e))).then((e=>console.log(e)))}));const i=new s.H("button",{className:"button_back"});i.setContent("back"),this.append(i);const d=new s.H("span",{className:"witch_name"});d.setContent(e.name),this.append(d);const p=new s.H("div",{className:"broom_flag_holder"});this.append(p);const l=new s.H("div",{className:"witch"});l.getNode().style.backgroundColor=e.color,p.append(l);const h=["/halloween-horror-owl.svg","/halloween-horror-owl_polar.svg"];(()=>{const e=new s.H("div",{className:"owl"}),t=h[Math.floor(Math.random()*h.length)];e.getNode().style.backgroundImage=`url(${t})`,p.append(e)})()}}class i extends s.H{constructor(){super("div",{className:"quidditch"}),this.quidditchWrapper=new s.H("div",{className:"quidditch_wrapper"}),this.append(this.quidditchWrapper);const e=new c((()=>{this.tracksWrapper.setInnerHTML(""),this.createTracks()}));this.quidditchWrapper.append(e);const t=new s.H("div",{className:"total_brooms_count"});t.setContent("Total Brooms Count X-Total-Count"),this.quidditchWrapper.append(t);const n=new s.H("div",{className:"page_number"});n.setContent("Page 1"),this.quidditchWrapper.append(n),this.tracksWrapper=new s.H("div",{className:"tracks_wrapper"}),this.quidditchWrapper.append(this.tracksWrapper),this.createTracks();const o=new s.H("button",{className:"pagination_previous"});o.setContent("previous"),this.quidditchWrapper.append(o);const a=new s.H("button",{className:"pagination_next"});a.setContent("next"),this.quidditchWrapper.append(a);const r=new s.H("div",{className:"attention"});r.setContent("Using magic wands during brooms racing is strictly probihited."),this.quidditchWrapper.append(r)}createTracks(){a().then((e=>{this.witchesArray=e.map((e=>{const t=new r(e);this.tracksWrapper.append(t)}))}))}}}}]);