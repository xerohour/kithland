import{e}from"./index-ddcwzkb0.js";function Ph(t){for(let n=t.length-1;n>=0;--n)if(t[n]>=65535)return!0;return!1}function Lh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ss(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Tc(){let t=Ss("canvas");return t.style.display="block",t}function mo(...t){let n="THREE."+t.shift();if(rs)rs("log",n,...t);else console.log(n,...t)}function Ec(t){let n=t[0];if(typeof n==="string"&&n.startsWith("TSL:")){let i=t[1];if(i&&i.isStackTrace)t[0]+=" "+i.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function nn(...t){t=Ec(t);let n="THREE."+t.shift();if(rs)rs("warn",n,...t);else{let i=t[0];if(i&&i.isStackTrace)console.warn(i.getError(n));else console.warn(n,...t)}}function sn(...t){t=Ec(t);let n="THREE."+t.shift();if(rs)rs("error",n,...t);else{let i=t[0];if(i&&i.isStackTrace)console.error(i.getError(n));else console.error(n,...t)}}function xs(...t){let n=t.join(" ");if(n in rl)return;rl[n]=!0,nn(...t)}function Ac(t,n,i){return new Promise(function(a,o){function c(){switch(t.clientWaitSync(n,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}class yi{addEventListener(t,n){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[t]===void 0)i[t]=[];if(i[t].indexOf(n)===-1)i[t].push(n)}hasEventListener(t,n){let i=this._listeners;if(i===void 0)return!1;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let o=a.indexOf(n);if(o!==-1)a.splice(o,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}function ls(){let t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[t&255]+Vn[t>>8&255]+Vn[t>>16&255]+Vn[t>>24&255]+"-"+Vn[n&255]+Vn[n>>8&255]+"-"+Vn[n>>16&15|64]+Vn[n>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function fn(t,n,i){return Math.max(n,Math.min(i,t))}function Nh(t,n){return(t%n+n)%n}function Wr(t,n,i){return(1-i)*t+i*n}function Rc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function go(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dh(t,n){if(n.constructor===Float32Array)return t;let i=go(n);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/i,-1)}function Uh(t,n){if(n.constructor===Float32Array)return t;let i=go(n);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*i)}function Fh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(o,c,m){if(this.enabled===!1||c===m||!c||!m)return o;if(this.spaces[c].transfer==="srgb")o.r=vi(o.r),o.g=vi(o.g),o.b=vi(o.b);if(this.spaces[c].primaries!==this.spaces[m].primaries)o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[m].fromXYZ);if(this.spaces[m].transfer==="srgb")o.r=ss(o.r),o.g=ss(o.g),o.b=ss(o.b);return o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){if(o==="")return"linear";return this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,m){return o.copy(this.spaces[m].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},n=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],a=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:n,whitePoint:a,transfer:"linear",toXYZ:ol,fromXYZ:ll,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:n,whitePoint:a,transfer:"srgb",toXYZ:ol,fromXYZ:ll,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}function vi(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function ss(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}class _o{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{if(Vi===void 0)Vi=Ss("canvas");Vi.width=t.width,Vi.height=t.height;let a=Vi.getContext("2d");if(t instanceof ImageData)a.putImageData(t,0,0);else a.drawImage(t,0,0,t.width,t.height);i=Vi}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ss("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=vi(o[c]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)if(n instanceof Uint8Array||n instanceof Uint8ClampedArray)n[i]=Math.floor(vi(n[i]/255)*255);else n[i]=vi(n[i]);return{data:n,width:t.width,height:t.height}}else return nn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Cs{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)t.set(n.videoWidth,n.videoHeight,0);else if(typeof VideoFrame<"u"&&n instanceof VideoFrame)t.set(n.displayWidth,n.displayHeight,0);else if(n!==null)t.set(n.width||0,n.height||0,n.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let n=t===void 0||typeof t==="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,m=a.length;c<m;c++)if(a[c].isDataTexture)o.push(qr(a[c].image));else o.push(qr(a[c]))}else o=qr(a);i.url=o}if(!n)t.images[this.uuid]=i;return i}}function qr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return _o.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return nn("Texture: Unable to serialize Texture."),{}}class yr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new A,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new A,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new r,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new r;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new A,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new r,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new r,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,n,i){let a=null,o=null,c=null,m=this._targetRay,y=this._grip,b=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(b&&t.hand){c=!0;for(let nt of t.hand.values()){let st=n.getJointPose(nt,i),H=this._getHandJoint(b,nt);if(st!==null)H.matrix.fromArray(st.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,H.jointRadius=st.radius;H.visible=st!==null}let w=b.joints["index-finger-tip"],N=b.joints["thumb-tip"],U=w.position.distanceTo(N.position),R=0.02,V=0.005;if(b.inputState.pinching&&U>R+V)b.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!b.inputState.pinching&&U<=R-V)b.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(y!==null&&t.gripSpace){if(o=n.getPose(t.gripSpace,i),o!==null){if(y.matrix.fromArray(o.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,o.linearVelocity)y.hasLinearVelocity=!0,y.linearVelocity.copy(o.linearVelocity);else y.hasLinearVelocity=!1;if(o.angularVelocity)y.hasAngularVelocity=!0,y.angularVelocity.copy(o.angularVelocity);else y.hasAngularVelocity=!1;if(y.eventsEnabled)y.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(m!==null){if(a=n.getPose(t.targetRaySpace,i),a===null&&o!==null)a=o;if(a!==null){if(m.matrix.fromArray(a.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,a.linearVelocity)m.hasLinearVelocity=!0,m.linearVelocity.copy(a.linearVelocity);else m.hasLinearVelocity=!1;if(a.angularVelocity)m.hasAngularVelocity=!0,m.angularVelocity.copy(a.angularVelocity);else m.hasAngularVelocity=!1;this.dispatchEvent(Xh)}}}if(m!==null)m.visible=a!==null;if(y!==null)y.visible=o!==null;if(b!==null)b.visible=c!==null;return this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new A;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}function Jr(t,n,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return t+(n-t)*6*i;if(i<0.5)return n;if(i<0.6666666666666666)return t+(n-t)*6*(0.6666666666666666-i);return t}class be{constructor(t,n=1,i=1000){this.isFog=!0,this.name="",this.color=new u(t),this.near=n,this.far=i}clone(){return new be(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qn{constructor(t=new r,n=new r,i=new r){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ii.subVectors(t,n),a.cross(ii);let o=a.lengthSq();if(o>0)return a.multiplyScalar(1/Math.sqrt(o));return a.set(0,0,0)}static getBarycoord(t,n,i,a,o){ii.subVectors(a,n),mi.subVectors(i,n),$r.subVectors(t,n);let c=ii.dot(ii),m=ii.dot(mi),y=ii.dot($r),b=mi.dot(mi),w=mi.dot($r),N=c*b-m*m;if(N===0)return o.set(0,0,0),null;let U=1/N,R=(b*y-m*w)*U,V=(c*w-m*y)*U;return o.set(1-R-V,V,R)}static containsPoint(t,n,i,a){if(this.getBarycoord(t,n,i,a,gi)===null)return!1;return gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,n,i,a,o,c,m,y){if(this.getBarycoord(t,n,i,a,gi)===null){if(y.x=0,y.y=0,"z"in y)y.z=0;if("w"in y)y.w=0;return null}return y.setScalar(0),y.addScaledVector(o,gi.x),y.addScaledVector(c,gi.y),y.addScaledVector(m,gi.z),y}static getInterpolatedAttribute(t,n,i,a,o,c){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,i),na.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(ta,o.x),c.addScaledVector(ea,o.y),c.addScaledVector(na,o.z),c}static isFrontFacing(t,n,i,a){return ii.subVectors(i,n),mi.subVectors(t,n),ii.cross(mi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),ii.cross(mi).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Qn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,o){return Qn.getInterpolation(t,this.a,this.b,this.c,n,i,a,o)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,o=this.c,c,m;Zi.subVectors(a,i),Ji.subVectors(o,i),Kr.subVectors(t,i);let y=Zi.dot(Kr),b=Ji.dot(Kr);if(y<=0&&b<=0)return n.copy(i);Qr.subVectors(t,a);let w=Zi.dot(Qr),N=Ji.dot(Qr);if(w>=0&&N<=w)return n.copy(a);let U=y*N-w*b;if(U<=0&&y>=0&&w<=0&&y-w>0)return c=y/(y-w),n.copy(i).addScaledVector(Zi,c);jr.subVectors(t,o);let R=Zi.dot(jr),V=Ji.dot(jr);if(V>=0&&R<=V)return n.copy(o);let nt=R*b-y*V;if(nt<=0&&b>=0&&V<=0)return m=b/(b-V),n.copy(i).addScaledVector(Ji,m);let st=w*V-R*N;if(st<=0&&N-w>=0&&R-V>=0)return gl.subVectors(o,a),m=(N-w)/(N-w+(R-V)),n.copy(a).addScaledVector(gl,m);let H=1/(st+nt+U);return c=nt*H,m=U*H,n.copy(i).addScaledVector(Zi,c).addScaledVector(Ji,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class D{constructor(t=new r(1/0,1/0,1/0),n=new r(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=si.copy(n).multiplyScalar(0.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let c=0,m=o.count;c<m;c++){if(t.isMesh===!0)t.getVertexPosition(c,si);else si.fromBufferAttribute(o,c);si.applyMatrix4(t.matrixWorld),this.expandByPoint(si)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Hs.copy(t.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Hs.copy(i.boundingBox)}Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}}let a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;if(t.normal.x>0)n=t.normal.x*this.min.x,i=t.normal.x*this.max.x;else n=t.normal.x*this.max.x,i=t.normal.x*this.min.x;if(t.normal.y>0)n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y;else n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y;if(t.normal.z>0)n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z;else n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z;return n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Ws.subVectors(this.max,ds),$i.subVectors(t.a,ds),Ki.subVectors(t.b,ds),Qi.subVectors(t.c,ds),Ei.subVectors(Ki,$i),Ai.subVectors(Qi,Ki),Ni.subVectors($i,Qi);let n=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Ni.z,Ni.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Ni.z,0,-Ni.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Ni.y,Ni.x,0];if(!ia(n,$i,Ki,Qi,Ws))return!1;if(n=[1,0,0,0,1,0,0,0,1],!ia(n,$i,Ki,Qi,Ws))return!1;return Vs.crossVectors(Ei,Ai),n=[Vs.x,Vs.y,Vs.z],ia(n,$i,Ki,Qi,Ws)}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(si).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return _i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}function ia(t,n,i,a,o){for(let c=0,m=t.length-3;c<=m;c+=3){Di.fromArray(t,c);let y=o.x*Math.abs(Di.x)+o.y*Math.abs(Di.y)+o.z*Math.abs(Di.z),b=n.dot(Di),w=i.dot(Di),N=a.dot(Di);if(Math.max(-Math.max(b,w,N),Math.min(b,w,N))>y)return!1}return!0}class se{constructor(t=new r,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;if(n!==void 0)i.copy(n);else Yh.setFromPoints(t).getCenter(i);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);if(n.copy(t),i>this.radius*this.radius)n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center);return n}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let n=fs.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*0.5;this.center.addScaledVector(fs,a/i),this.radius+=a}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(sa)),this.expandByPoint(fs.copy(t.center).sub(sa));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}class ai{constructor(t=new r(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=aa.subVectors(i,n).cross(Jh.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(aa),o=this.normal.dot(a);if(o===0){if(this.distanceToPoint(t.start)===0)return n.copy(t.start);return null}let c=-(t.start.dot(this.normal)+this.constant)/o;if(i===!0&&(c<0||c>1))return null;return n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||$h.getNormalMatrix(t),a=this.coplanarPoint(aa).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}class vo{constructor(t=new r,n=new r(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);if(i<0)return n.copy(this.origin);return n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=xi.subVectors(t,this.origin).dot(this.direction);if(n<0)return this.origin.distanceToSquared(t);return xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(t)}distanceSqToSegment(t,n,i,a){oa.copy(t).add(n).multiplyScalar(0.5),qs.copy(n).sub(t).normalize(),Ys.copy(this.origin).sub(oa);let o=t.distanceTo(n)*0.5,c=-this.direction.dot(qs),m=Ys.dot(this.direction),y=-Ys.dot(qs),b=Ys.lengthSq(),w=Math.abs(1-c*c),N,U,R,V;if(w>0)if(N=c*y-m,U=c*m-y,V=o*w,N>=0)if(U>=-V)if(U<=V){let nt=1/w;N*=nt,U*=nt,R=N*(N+c*U+2*m)+U*(c*N+U+2*y)+b}else U=o,N=Math.max(0,-(c*U+m)),R=-N*N+U*(U+2*y)+b;else U=-o,N=Math.max(0,-(c*U+m)),R=-N*N+U*(U+2*y)+b;else if(U<=-V)N=Math.max(0,-(-c*o+m)),U=N>0?-o:Math.min(Math.max(-o,-y),o),R=-N*N+U*(U+2*y)+b;else if(U<=V)N=0,U=Math.min(Math.max(-o,-y),o),R=U*(U+2*y)+b;else N=Math.max(0,-(c*o+m)),U=N>0?o:Math.min(Math.max(-o,-y),o),R=-N*N+U*(U+2*y)+b;else U=c>0?-o:o,N=Math.max(0,-(c*U+m)),R=-N*N+U*(U+2*y)+b;if(i)i.copy(this.origin).addScaledVector(this.direction,N);if(a)a.copy(oa).addScaledVector(qs,U);return R}intersectSphere(t,n){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),a=xi.dot(xi)-i*i,o=t.radius*t.radius;if(a>o)return null;let c=Math.sqrt(o-a),m=i-c,y=i+c;if(y<0)return null;if(m<0)return this.at(y,n);return this.at(m,n)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);if(i===null)return null;return this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);if(n===0)return!0;if(t.normal.dot(this.direction)*n<0)return!0;return!1}intersectBox(t,n){let i,a,o,c,m,y,b=1/this.direction.x,w=1/this.direction.y,N=1/this.direction.z,U=this.origin;if(b>=0)i=(t.min.x-U.x)*b,a=(t.max.x-U.x)*b;else i=(t.max.x-U.x)*b,a=(t.min.x-U.x)*b;if(w>=0)o=(t.min.y-U.y)*w,c=(t.max.y-U.y)*w;else o=(t.max.y-U.y)*w,c=(t.min.y-U.y)*w;if(i>c||o>a)return null;if(o>i||isNaN(i))i=o;if(c<a||isNaN(a))a=c;if(N>=0)m=(t.min.z-U.z)*N,y=(t.max.z-U.z)*N;else m=(t.max.z-U.z)*N,y=(t.min.z-U.z)*N;if(i>y||m>a)return null;if(m>i||i!==i)i=m;if(y<a||a!==a)a=y;if(a<0)return null;return this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,n,i,a,o){let c=this.origin,m=this.direction,{x:y,y:b,z:w}=m,N=t.x-c.x,U=t.y-c.y,R=t.z-c.z,V=n.x-c.x,nt=n.y-c.y,st=n.z-c.z,H=i.x-c.x,O=i.y-c.y,ot=i.z-c.z,lt=Math.abs(y),it=Math.abs(b),ct=Math.abs(w),dt,J,rt,mt,St,gt,bt,Ut,ht,wt,Rt,vt;if(lt>=it&&lt>=ct)if(rt=y,gt=N,ht=V,vt=H,y>=0)dt=b,J=w,mt=U,St=R,bt=nt,Ut=st,wt=O,Rt=ot;else dt=w,J=b,mt=R,St=U,bt=st,Ut=nt,wt=ot,Rt=O;else if(it>=ct)if(rt=b,gt=U,ht=nt,vt=O,b>=0)dt=w,J=y,mt=R,St=N,bt=st,Ut=V,wt=ot,Rt=H;else dt=y,J=w,mt=N,St=R,bt=V,Ut=st,wt=H,Rt=ot;else if(rt=w,gt=R,ht=st,vt=ot,w>=0)dt=y,J=b,mt=N,St=U,bt=V,Ut=nt,wt=H,Rt=O;else dt=b,J=y,mt=U,St=N,bt=nt,Ut=V,wt=O,Rt=H;if(rt===0)return null;let Gt=dt/rt,Et=J/rt,Lt=1/rt,Ot=mt-Gt*gt,_e=St-Et*gt,It=bt-Gt*ht,Bt=Ut-Et*ht,Re=wt-Gt*vt,Je=Rt-Et*vt,Ke=Re*Bt-Je*It,de=Ot*Je-_e*Re,xn=It*_e-Bt*Ot;if(a){if(Ke<0||de<0||xn<0)return null}else if((Ke<0||de<0||xn<0)&&(Ke>0||de>0||xn>0))return null;let hn=Ke+de+xn;if(hn===0)return null;let en=Lt*(Ke*gt+de*ht+xn*vt);if(hn>0?en<0:en>0)return null;return this.at(en/hn,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}function Qh(t,n,i,a,o,c,m,y){let b;if(n.side===1)b=a.intersectTriangle(m,c,o,!0,y);else b=a.intersectTriangle(o,c,m,n.side===0,y);if(b===null)return null;js.copy(y),js.applyMatrix4(t.matrixWorld);let w=i.ray.origin.distanceTo(js);if(w<i.near||w>i.far)return null;return{distance:w,point:js.clone(),object:t}}function tr(t,n,i,a,o,c,m,y,b,w){t.getVertexPosition(y,Js),t.getVertexPosition(b,$s),t.getVertexPosition(w,Ks);let N=Qh(t,n,i,a,Js,$s,Ks,vl);if(N){let U=new r;if(Qn.getBarycoord(vl,Js,$s,Ks,U),o)N.uv=Qn.getInterpolatedAttribute(o,y,b,w,U,new s);if(c)N.uv1=Qn.getInterpolatedAttribute(c,y,b,w,U,new s);if(m){if(N.normal=Qn.getInterpolatedAttribute(m,y,b,w,U,new r),N.normal.dot(a.direction)>0)N.normal.multiplyScalar(-1)}let R={a:y,b,c:w,normal:new r,materialIndex:0};Qn.getNormal(Js,$s,Ks,R.normal),N.face=R,N.barycoord=U}return N}class he{constructor(t=new ai,n=new ai,i=new ai,a=new ai,o=new ai,c=new ai){this.planes=[t,n,i,a,o,c]}set(t,n,i,a,o,c){let m=this.planes;return m[0].copy(t),m[1].copy(n),m[2].copy(i),m[3].copy(a),m[4].copy(o),m[5].copy(c),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=2000,i=!1){let a=this.planes,o=t.elements,c=o[0],m=o[1],y=o[2],b=o[3],w=o[4],N=o[5],U=o[6],R=o[7],V=o[8],nt=o[9],st=o[10],H=o[11],O=o[12],ot=o[13],lt=o[14],it=o[15];if(a[0].setComponents(b-c,R-w,H-V,it-O).normalize(),a[1].setComponents(b+c,R+w,H+V,it+O).normalize(),a[2].setComponents(b+m,R+N,H+nt,it+ot).normalize(),a[3].setComponents(b-m,R-N,H-nt,it-ot).normalize(),i)a[4].setComponents(y,U,st,lt).normalize(),a[5].setComponents(b-y,R-U,H-st,it-lt).normalize();else if(a[4].setComponents(b-y,R-U,H-st,it-lt).normalize(),n===2000)a[5].setComponents(b+y,R+U,H+st,it+lt).normalize();else if(n===2001)a[5].setComponents(y,U,st,lt).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let n=t.geometry;if(n.boundingSphere===null)n.computeBoundingSphere();Fi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let n=tu.distanceTo(t.center);return Fi.radius=0.7071067811865476+n,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(nr.x=a.normal.x>0?t.max.x:t.min.x,nr.y=a.normal.y>0?t.max.y:t.min.y,nr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class br{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let a=0;a<n.length;a++){let o=n[a];if(Ml.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),i[a]===void 0)i[a]=new he;i[a].setFromProjectionMatrix(Ml,o.coordinateSystem,o.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let a=0;a<t._count;a++){if(n[a]===void 0)n[a]=new he;n[a].copy(i[a])}return this._count=t._count,this}clone(){return new br().copy(this)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nn("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,a=this.getPoint(0),o=0;n.push(0);for(let c=1;c<=t;c++)i=this.getPoint(c/t),o+=i.distanceTo(a),n.push(o),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),a=0,o=i.length,c;if(n)c=n;else c=t*i[o-1];let m=0,y=o-1,b;while(m<=y)if(a=Math.floor(m+(y-m)/2),b=i[a]-c,b<0)m=a+1;else if(b>0)y=a-1;else{y=a;break}if(a=y,i[a]===c)return a/(o-1);let w=i[a],U=i[a+1]-w,R=(c-w)/U;return(a+R)/(o-1)}getTangent(t,n){let a=t-0.0001,o=t+0.0001;if(a<0)a=0;if(o>1)o=1;let c=this.getPoint(a),m=this.getPoint(o),y=n||(c.isVector2?new s:new r);return y.copy(m).sub(c).normalize(),y}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new r,a=[],o=[],c=[],m=new r,y=new p;for(let R=0;R<=t;R++){let V=R/t;a[R]=this.getTangentAt(V,new r)}o[0]=new r,c[0]=new r;let b=Number.MAX_VALUE,w=Math.abs(a[0].x),N=Math.abs(a[0].y),U=Math.abs(a[0].z);if(w<=b)b=w,i.set(1,0,0);if(N<=b)b=N,i.set(0,1,0);if(U<=b)i.set(0,0,1);m.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],m),c[0].crossVectors(a[0],o[0]);for(let R=1;R<=t;R++){if(o[R]=o[R-1].clone(),c[R]=c[R-1].clone(),m.crossVectors(a[R-1],a[R]),m.length()>Number.EPSILON){m.normalize();let V=Math.acos(fn(a[R-1].dot(a[R]),-1,1));o[R].applyMatrix4(y.makeRotationAxis(m,V))}c[R].crossVectors(a[R],o[R])}if(n===!0){let R=Math.acos(fn(o[0].dot(o[t]),-1,1));if(R/=t,a[0].dot(m.crossVectors(o[0],o[t]))>0)R=-R;for(let V=1;V<=t;V++)o[V].applyMatrix4(y.makeRotationAxis(a[V],R*V)),c[V].crossVectors(a[V],o[V])}return{tangents:a,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function So(){let t=0,n=0,i=0,a=0;function o(c,m,y,b){t=c,n=y,i=-3*c+3*m-2*y-b,a=2*c-2*m+y+b}return{initCatmullRom:function(c,m,y,b,w){o(m,y,w*(y-c),w*(b-m))},initNonuniformCatmullRom:function(c,m,y,b,w,N,U){let R=(m-c)/w-(y-c)/(w+N)+(y-m)/N,V=(y-m)/N-(b-m)/(N+U)+(b-y)/U;R*=N,V*=N,o(m,y,R,V)},calc:function(c){let m=c*c,y=m*c;return t+n*c+i*m+a*y}}}function El(t,n,i,a,o){let c=(a-n)*0.5,m=(o-i)*0.5,y=t*t,b=t*y;return(2*i-2*a+c+m)*b+(-3*i+3*a-2*c-m)*y+c*t+i}function eu(t,n){let i=1-t;return i*i*n}function nu(t,n){return 2*(1-t)*t*n}function iu(t,n){return t*t*n}function vs(t,n,i,a){return eu(t,n)+nu(t,i)+iu(t,a)}function su(t,n){let i=1-t;return i*i*i*n}function ru(t,n){let i=1-t;return 3*i*i*t*n}function au(t,n){return 3*(1-t)*t*t*n}function ou(t,n){return t*t*t*n}function ys(t,n,i,a,o){return su(t,n)+ru(t,i)+au(t,a)+ou(t,o)}function lu(t,n,i=2){let a=n&&n.length,o=a?n[0]*i:t.length,c=Ic(t,0,o,i,!0),m=[];if(!c||c.next===c.prev)return m;let y,b,w;if(a)c=fu(t,n,c,i);if(t.length>80*i){y=t[0],b=t[1];let N=y,U=b;for(let R=i;R<o;R+=i){let V=t[R],nt=t[R+1];if(V<y)y=V;if(nt<b)b=nt;if(V>N)N=V;if(nt>U)U=nt}w=Math.max(N-y,U-b),w=w!==0?32767/w:0}return Ms(c,m,i,y,b,w,0),m}function Ic(t,n,i,a,o){let c;if(o===Tu(t,n,i,a)>0)for(let m=n;m<i;m+=a)c=Al(m/a|0,t[m],t[m+1],c);else for(let m=i-a;m>=n;m-=a)c=Al(m/a|0,t[m],t[m+1],c);if(c&&as(c,c.next))Ts(c),c=c.next;return c}function Oi(t,n){if(!t)return t;if(!n)n=t;let i=t,a;do if(a=!1,!i.steiner&&(as(i,i.next)||Cn(i.prev,i,i.next)===0)){if(Ts(i),i=n=i.prev,i===i.next)break;a=!0}else i=i.next;while(a||i!==n);return n}function Ms(t,n,i,a,o,c,m){if(!t)return;if(!m&&c)xu(t,a,o,c);let y=t;while(t.prev!==t.next){let b=t.prev,w=t.next;if(c?hu(t,a,o,c):cu(t)){n.push(b.i,t.i,w.i),Ts(t),t=w.next,y=w.next;continue}if(t=w,t===y){if(!m)Ms(Oi(t),n,i,a,o,c,1);else if(m===1)t=uu(Oi(t),n),Ms(t,n,i,a,o,c,2);else if(m===2)du(t,n,i,a,o,c);break}}}function cu(t){let n=t.prev,i=t,a=t.next;if(Cn(n,i,a)>=0)return!1;let o=n.x,c=i.x,m=a.x,y=n.y,b=i.y,w=a.y,N=Math.min(o,c,m),U=Math.min(y,b,w),R=Math.max(o,c,m),V=Math.max(y,b,w),nt=a.next;while(nt!==n){if(nt.x>=N&&nt.x<=R&&nt.y>=U&&nt.y<=V&&_s(o,y,c,b,m,w,nt.x,nt.y)&&Cn(nt.prev,nt,nt.next)>=0)return!1;nt=nt.next}return!0}function hu(t,n,i,a){let o=t.prev,c=t,m=t.next;if(Cn(o,c,m)>=0)return!1;let y=o.x,b=c.x,w=m.x,N=o.y,U=c.y,R=m.y,V=Math.min(y,b,w),nt=Math.min(N,U,R),st=Math.max(y,b,w),H=Math.max(N,U,R),O=pa(V,nt,n,i,a),ot=pa(st,H,n,i,a),{prevZ:lt,nextZ:it}=t;while(lt&&lt.z>=O&&it&&it.z<=ot){if(lt.x>=V&&lt.x<=st&&lt.y>=nt&&lt.y<=H&&lt!==o&&lt!==m&&_s(y,N,b,U,w,R,lt.x,lt.y)&&Cn(lt.prev,lt,lt.next)>=0)return!1;if(lt=lt.prevZ,it.x>=V&&it.x<=st&&it.y>=nt&&it.y<=H&&it!==o&&it!==m&&_s(y,N,b,U,w,R,it.x,it.y)&&Cn(it.prev,it,it.next)>=0)return!1;it=it.nextZ}while(lt&&lt.z>=O){if(lt.x>=V&&lt.x<=st&&lt.y>=nt&&lt.y<=H&&lt!==o&&lt!==m&&_s(y,N,b,U,w,R,lt.x,lt.y)&&Cn(lt.prev,lt,lt.next)>=0)return!1;lt=lt.prevZ}while(it&&it.z<=ot){if(it.x>=V&&it.x<=st&&it.y>=nt&&it.y<=H&&it!==o&&it!==m&&_s(y,N,b,U,w,R,it.x,it.y)&&Cn(it.prev,it,it.next)>=0)return!1;it=it.nextZ}return!0}function uu(t,n){let i=t;do{let a=i.prev,o=i.next.next;if(!as(a,o)&&Lc(a,i,i.next,o)&&bs(a,o)&&bs(o,a))n.push(a.i,i.i,o.i),Ts(i),Ts(i.next),i=t=o;i=i.next}while(i!==t);return Oi(i)}function du(t,n,i,a,o,c){let m=t;do{let y=m.next.next;while(y!==m.prev){if(m.i!==y.i&&Su(m,y)){let b=Nc(m,y);m=Oi(m,m.next),b=Oi(b,b.next),Ms(m,n,i,a,o,c,0),Ms(b,n,i,a,o,c,0);return}y=y.next}m=m.next}while(m!==t)}function fu(t,n,i,a){let o=[];for(let c=0,m=n.length;c<m;c++){let y=n[c]*a,b=c<m-1?n[c+1]*a:t.length,w=Ic(t,y,b,a,!1);if(w===w.next)w.steiner=!0;o.push(yu(w))}o.sort(pu);for(let c=0;c<o.length;c++)i=mu(o[c],i);return i}function pu(t,n){let i=t.x-n.x;if(i===0){if(i=t.y-n.y,i===0){let a=(t.next.y-t.y)/(t.next.x-t.x),o=(n.next.y-n.y)/(n.next.x-n.x);i=a-o}}return i}function mu(t,n){let i=gu(t,n);if(!i)return n;let a=Nc(i,t);return Oi(a,a.next),Oi(i,i.next)}function gu(t,n){let i=n,{x:a,y:o}=t,c=-1/0,m;if(as(t,i))return i;do{if(as(t,i.next))return i.next;else if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){let U=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(U<=a&&U>c){if(c=U,m=i.x<i.next.x?i:i.next,U===a)return m}}i=i.next}while(i!==n);if(!m)return null;let y=m,b=m.x,w=m.y,N=1/0;i=m;do{if(a>=i.x&&i.x>=b&&a!==i.x&&Pc(o<w?a:c,o,b,w,o<w?c:a,o,i.x,i.y)){let U=Math.abs(o-i.y)/(a-i.x);if(bs(i,t)&&(U<N||U===N&&(i.x>m.x||i.x===m.x&&_u(m,i))))m=i,N=U}i=i.next}while(i!==y);return m}function _u(t,n){return Cn(t.prev,t,n.prev)<0&&Cn(n.next,t,t.next)<0}function xu(t,n,i,a){let o=t;do{if(o.z===0)o.z=pa(o.x,o.y,n,i,a);o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,vu(o)}function vu(t){let n,i=1;do{let a=t,o;t=null;let c=null;n=0;while(a){n++;let m=a,y=0;for(let w=0;w<i;w++)if(y++,m=m.nextZ,!m)break;let b=i;while(y>0||b>0&&m){if(y!==0&&(b===0||!m||a.z<=m.z))o=a,a=a.nextZ,y--;else o=m,m=m.nextZ,b--;if(c)c.nextZ=o;else t=o;o.prevZ=c,c=o}a=m}c.nextZ=null,i*=2}while(n>1);return t}function pa(t,n,i,a,o){return t=(t-i)*o|0,n=(n-a)*o|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t|n<<1}function yu(t){let n=t,i=t;do{if(n.x<i.x||n.x===i.x&&n.y<i.y)i=n;n=n.next}while(n!==t);return i}function Pc(t,n,i,a,o,c,m,y){return(o-m)*(n-y)>=(t-m)*(c-y)&&(t-m)*(a-y)>=(i-m)*(n-y)&&(i-m)*(c-y)>=(o-m)*(a-y)}function _s(t,n,i,a,o,c,m,y){return!(t===m&&n===y)&&Pc(t,n,i,a,o,c,m,y)}function Su(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!Mu(t,n)&&(bs(t,n)&&bs(n,t)&&bu(t,n)&&(Cn(t.prev,t,n.prev)||Cn(t,n.prev,n))||as(t,n)&&Cn(t.prev,t,t.next)>0&&Cn(n.prev,n,n.next)>0)}function Cn(t,n,i){return(n.y-t.y)*(i.x-n.x)-(n.x-t.x)*(i.y-n.y)}function as(t,n){return t.x===n.x&&t.y===n.y}function Lc(t,n,i,a){let o=sr(Cn(t,n,i)),c=sr(Cn(t,n,a)),m=sr(Cn(i,a,t)),y=sr(Cn(i,a,n));if(o!==c&&m!==y)return!0;if(o===0&&ir(t,i,n))return!0;if(c===0&&ir(t,a,n))return!0;if(m===0&&ir(i,t,a))return!0;if(y===0&&ir(i,n,a))return!0;return!1}function ir(t,n,i){return n.x<=Math.max(t.x,i.x)&&n.x>=Math.min(t.x,i.x)&&n.y<=Math.max(t.y,i.y)&&n.y>=Math.min(t.y,i.y)}function sr(t){return t>0?1:t<0?-1:0}function Mu(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Lc(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}function bs(t,n){return Cn(t.prev,t,t.next)<0?Cn(t,n,t.next)>=0&&Cn(t,t.prev,n)>=0:Cn(t,n,t.prev)<0||Cn(t,t.next,n)<0}function bu(t,n){let i=t,a=!1,o=(t.x+n.x)/2,c=(t.y+n.y)/2;do{if(i.y>c!==i.next.y>c&&i.next.y!==i.y&&o<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x)a=!a;i=i.next}while(i!==t);return a}function Nc(t,n){let i=ma(t.i,t.x,t.y),a=ma(n.i,n.x,n.y),o=t.next,c=n.prev;return t.next=n,n.prev=t,i.next=o,o.prev=i,a.next=i,i.prev=a,c.next=a,a.prev=c,a}function Al(t,n,i,a){let o=ma(t,n,i);if(!a)o.prev=o,o.next=o;else o.next=a.next,o.prev=a,a.next.prev=o,a.next=o;return o}function Ts(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function ma(t,n,i){return{i:t,x:n,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tu(t,n,i,a){let o=0;for(let c=n,m=i-a;c<i;c+=a)o+=(t[m]-t[c])*(t[c+1]+t[m+1]),m=c;return o}class Dc{static triangulate(t,n,i=2){return lu(t,n,i)}}class oi{static area(t){let n=t.length,i=0;for(let a=n-1,o=0;o<n;a=o++)i+=t[a].x*t[o].y-t[o].x*t[a].y;return i*0.5}static isClockWise(t){return oi.area(t)<0}static triangulateShape(t,n){let i=[],a=[],o=[];wl(t),Rl(i,t);let c=t.length;n.forEach(wl);for(let y=0;y<n.length;y++)a.push(c),c+=n[y].length,Rl(i,n[y]);let m=Dc.triangulate(i,a);for(let y=0;y<m.length;y+=3)o.push(m.slice(y,y+3));return o}}function wl(t){let n=t.length;if(n>2&&t[n-1].equals(t[0]))t.pop()}function Rl(t,n){for(let i=0;i<n.length;i++)t.push(n[i].x),t.push(n[i].y)}function Au(t,n,i){if(i.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let c=t[a];i.shapes.push(c.uuid)}else i.shapes.push(t.uuid);if(i.options=Object.assign({},n),n.extrudePath!==void 0)i.options.extrudePath=n.extrudePath.toJSON();return i}function wu(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,a=t.length;i<a;i++){let o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n}function Gi(t){let n={};for(let i in t){n[i]={};for(let a in t[i]){let o=t[i][a];if(Cl(o))if(o.isRenderTargetTexture)nn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[i][a]=null;else n[i][a]=o.clone();else if(Array.isArray(o))if(Cl(o[0])){let c=[];for(let m=0,y=o.length;m<y;m++)c[m]=o[m].clone();n[i][a]=c}else n[i][a]=o.slice();else n[i][a]=o}}return n}function Yn(t){let n={};for(let i=0;i<t.length;i++){let a=Gi(t[i]);for(let o in a)n[o]=a[o]}return n}function Cl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ru(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}function wo(t){let n=t.getRenderTarget();if(n===null)return t.outputColorSpace;if(n.isXRRenderTarget===!0)return n.texture.colorSpace;return gn.workingColorSpace}function es(t,n){if(!t||t.constructor===n)return t;if(typeof n.BYTES_PER_ELEMENT==="number")return new n(t);return Array.prototype.slice.call(t)}function rr(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class ki{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],o=n[i-1];n:{t:{let c;e:{i:if(!(t<a)){for(let m=i+2;;){if(a===void 0){if(t<o)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===m)break;if(o=a,a=n[++i],t<a)break t}c=n.length;break e}if(!(t>=o)){let m=n[1];if(t<m)i=2,o=m;for(let y=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===y)break;if(a=o,o=n[--i-1],t>=o)break t}c=i,i=0;break e}break n}while(i<c){let m=i+c>>>1;if(t<n[m])c=m;else i=m+1}if(a=n[i],o=n[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=t*a;for(let c=0;c!==a;++c)n[c]=i[o+c];return n}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}function Fc(t,n,i,a,o){let c=1-t;return c*c*c*n+3*c*c*t*i+3*c*t*t*a+t*t*t*o}function Pu(t,n,i,a,o){let c=1-t;return 3*c*c*(i-n)+6*c*t*(a-i)+3*t*t*(o-a)}function Lu(t,n,i,a,o){let c=(t-n)/(o-n);for(let m=0;m<8;m++){let y=Fc(c,n,i,a,o)-t;if(Math.abs(y)<0.0000000001)break;let b=Pu(c,n,i,a,o);if(Math.abs(b)<0.0000000001)break;c=Math.max(0,Math.min(1,c-y/b))}return c}class ti{constructor(t,n,i,a){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=es(n,this.TimeBufferType),this.values=es(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:es(t.times,Array),values:es(t.values,Array)};let a=t.getInterpolation();if(a!==t.DefaultInterpolation)i.interpolation=a;if(rr(t.settings))i.settings={inTangents:es(t.settings.inTangents,Array),outTangents:es(t.settings.outTangents,Array)}}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new No(this.times,this.values,this.getValueSize(),t);if(this.settings)n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents;return n}setInterpolation(t){let n;switch(t){case 2300:n=this.InterpolantFactoryMethodDiscrete;break;case 2301:n=this.InterpolantFactoryMethodLinear;break;case 2302:n=this.InterpolantFactoryMethodSmooth;break;case 2303:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return nn("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t;if(rr(this.settings))Il(this.settings.inTangents,t),Il(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;if(rr(this.settings))Pl(this.settings.inTangents,t),Pl(this.settings.outTangents,t)}return this}trim(t,n){let i=this.times,a=i.length,o=0,c=a-1;while(o!==a&&i[o]<t)++o;while(c!==-1&&i[c]>n)--c;if(++c,o!==0||c!==a){if(o>=c)c=Math.max(c,1),o=c-1;let m=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*m,c*m)}return this}validate(){let t=!0,n=this.getValueSize();if(n-Math.floor(n)!==0)sn("KeyframeTrack: Invalid value size in track.",this),t=!1;let i=this.times,a=this.values,o=i.length;if(o===0)sn("KeyframeTrack: Track is empty.",this),t=!1;let c=null;for(let m=0;m!==o;m++){let y=i[m];if(typeof y==="number"&&isNaN(y)){sn("KeyframeTrack: Time is not a valid number.",this,m,y),t=!1;break}if(c!==null&&c>y){sn("KeyframeTrack: Out of order keys.",this,m,y,c),t=!1;break}c=y}if(a!==void 0){if(Lh(a))for(let m=0,y=a.length;m!==y;++m){let b=a[m];if(isNaN(b)){sn("KeyframeTrack: Value is not a valid number.",this,m,b),t=!1;break}}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===2302,o=t.length-1,c=1;for(let m=1;m<o;++m){let y=!1,b=t[m],w=t[m+1];if(b!==w&&(m!==1||b!==t[0]))if(!a){let N=m*i,U=N-i,R=N+i;for(let V=0;V!==i;++V){let nt=n[N+V];if(nt!==n[U+V]||nt!==n[R+V]){y=!0;break}}}else y=!0;if(y){if(m!==c){t[c]=t[m];let N=m*i,U=c*i;for(let R=0;R!==i;++R)n[U+R]=n[N+R]}++c}}if(o>0){t[c]=t[o];for(let m=o*i,y=c*i,b=0;b!==i;++b)n[y+b]=n[m+b];++c}if(c!==t.length)this.times=t.slice(0,c),this.values=n.slice(0,c*i);else this.times=t,this.values=n;return this}clone(){let t=this.times.slice(),n=this.values.slice(),a=new this.constructor(this.name,t,n);if(a.createInterpolant=this.createInterpolant,rr(this.settings))a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return a}}function Il(t,n){for(let i=0,a=t.length;i!==a;i+=2)t[i]+=n}function Pl(t,n){for(let i=0,a=t.length;i!==a;i+=2)t[i]*=n}class Bo{constructor(t,n,i){let a=this,o=!1,c=0,m=0,y=void 0,b=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(w){if(m++,o===!1){if(a.onStart!==void 0)a.onStart(w,c,m)}o=!0},this.itemEnd=function(w){if(c++,a.onProgress!==void 0)a.onProgress(w,c,m);if(c===m){if(o=!1,a.onLoad!==void 0)a.onLoad()}},this.itemError=function(w){if(a.onError!==void 0)a.onError(w)},this.resolveURL=function(w){if(w=w.normalize("NFC"),y)return y(w);return w},this.setURLModifier=function(w){return y=w,this},this.addHandler=function(w,N){return b.push(w,N),this},this.removeHandler=function(w){let N=b.indexOf(w);if(N!==-1)b.splice(N,2);return this},this.getHandler=function(w){for(let N=0,U=b.length;N<U;N+=2){let R=b[N],V=b[N+1];if(R.global)R.lastIndex=0;if(R.test(w))return V}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}class zo{constructor(t){if(this.manager=t!==void 0?t:Oc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,o){i.load(t,a,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}class Go{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new s(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new p,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new he,this._frameExtents=new s(1,1),this._viewportCount=1,this._viewports=[new _(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;Ll.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ll),Nl.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Nl),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,a){da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(da,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=a?a.z/o.x:1,m=a?a.w/o.y:1,y=a?a.x/o.x:0,b=a?a.y/o.y:0;if(t.coordinateSystem===2001||t.reversedDepth)n.set(0.5*c,0,0,0.5*c+y,0,0.5*m,0,0.5*m+b,0,0,1,0,0,0,0,1);else n.set(0.5*c,0,0,0.5*c+y,0,0.5*m,0,0.5*m+b,0,0,0.5,0.5,0,0,0,1);n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zc{constructor(t,n,i){let a=i||bn.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];if(a!==void 0)a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class bn{constructor(t,n,i){this.path=n,this.parsedPath=i||bn.parseTrackName(n),this.node=bn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){if(!(t&&t.isAnimationObjectGroup))return new bn(t,n,i);else return new bn.Composite(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nu,"")}static parseTrackName(t){let n=zu.exec(t);if(n===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let o=i.nodeName.substring(a+1);if(Gu.indexOf(o)!==-1)i.nodeName=i.nodeName.substring(0,a),i.objectName=o}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let m=o[c];if(m.name===n||m.uuid===n)return m;let y=i(m.children);if(y)return y}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,{objectName:i,propertyName:a,propertyIndex:o}=n;if(!t)t=bn.findNode(this.rootNode,n.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){nn("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let b=n.objectIndex;switch(i){case"materials":if(!t.material){sn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){sn("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){sn("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let w=0;w<t.length;w++)if(t[w].name===b){b=w;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){sn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){sn("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){sn("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(b!==void 0){if(t[b]===void 0){sn("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[b]}}let c=t[a];if(c===void 0){let b=n.nodeName;sn("PropertyBinding: Trying to update property for track: "+b+"."+a+" but it wasn't found.",t);return}let m=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)m=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)m=this.Versioning.MatrixWorldNeedsUpdate;let y=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){sn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){sn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[o]!==void 0)o=t.morphTargetDictionary[o]}y=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else if(c.fromArray!==void 0&&c.toArray!==void 0)y=this.BindingType.HasFromToArray,this.resolvedProperty=c;else if(Array.isArray(c))y=this.BindingType.EntireArray,this.resolvedProperty=c;else this.propertyName=a;this.getValue=this.GetterByBindingType[y],this.setValue=this.SetterByBindingTypeAndVersioning[y][m]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}function Vo(t,n,i,a){let o=ku(a);switch(i){case 1021:return t*n;case 1028:return t*n/o.components*o.byteLength;case 1029:return t*n/o.components*o.byteLength;case 1030:return t*n*2/o.components*o.byteLength;case 1031:return t*n*2/o.components*o.byteLength;case 1022:return t*n*3/o.components*o.byteLength;case 1023:return t*n*4/o.components*o.byteLength;case 1033:return t*n*4/o.components*o.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(n,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(n,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((n+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((n+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((n+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((n+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((n+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((n+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((n+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((n+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((n+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((n+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((n+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((n+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((n+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(n/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(n/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(n/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function ku(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var Fl="187",Ol=0,ga=1,Bl=2,Q=1,zl=2,pe=3,me=0,X=1,T=2,Bi=0,Es=1,ve=2,_a=3,xa=4,Te=5,ie=100,Gl=101,kl=102,Hl=103,Wl=104,Ce=200,ke=201,He=202,Vl=203,Xl=204,Xe=205,ql=206,Yl=207,Zl=208,Jl=209,$l=210,Kl=211,Ql=212,jl=213,tc=214,ec=0,nc=1,Ge=2,va=3,ic=4,sc=5,rc=6,ac=7,oc=0,lc=1,cc=2,li=0,ya=1,Sa=2,Ma=3,ba=4,Ta=5,Ea=6,Aa=7,As=301,os=302,cr=303,hr=304,Se=1000,ur=1001,hc=1002,S=1003,uc=1004,ws=1005,k=1006,dr=1007,Ri=1008,x=1009,dc=1010,fc=1011,Rs=1012,wa=1013,oe=1014,ee=1015,ci=1016,Ra=1017,Ca=1018,zi=1020,pc=35902,mc=35899,gc=1021,_c=1022,M=1023,ge=1026,Ci=1027,We=1028,Ia=1029,ce=1030,Pa=1031,La=1033,fr=33776,pr=33777,mr=33778,gr=33779,Na=35840,Da=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,Ga=37488,ka=37489,_r=37490,Ha=37491,Wa=37808,Va=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,Qa=37817,ja=37818,to=37819,eo=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,xr=36285,lo=36286,co=0,xc=1,L="",Ue="srgb",ae="srgb-linear",ho="linear",An="srgb",vc=512,yc=513,Sc=514,Pe=515,Mc=516,bc=517,Le=518,uo=519,C=35048,fo="300 es",po=2000,rl,rs=null,wc,Vn,Hr,lr,s,q,r,Vr,al,an,Xr,ol,ll,gn,Vi,Oh=0,Bh=0,Yr,qn,_,xo,P,vr,Oe,p,Xi,ni,zh,Gh,bi,zs,Jn,cl,hl,Z,kh=0,ul,qi,pi,Gs,us,Hh,Wh,dl,fl,pl,ml,Vh,Yi,Zr,Gn,A,Xh,Cc,Ti,ks,u,Xn,G,ii,mi,$r,gi,Zi,Ji,gl,Kr,Qr,jr,ta,ea,na,_i,si,Hs,$i,Ki,Qi,Ei,Ai,Ni,ds,Ws,Vs,Di,Ln,Xs,qh=0,l,Sr,Mr,f,Yh,fs,sa,Zh=0,Kn,ra,ji,$n,ps,zn,h,aa,Jh,$h,Kh=0,Si,xi,oa,qs,Ys,we,_l,Ui,Zs,xl,Js,$s,Ks,la,Qs,vl,js,d,I,j,ts,yl,er,Sl,jh,ms,gs,W,Fi,tu,nr,Ml,Tr,le,Er,Ar,ye,Ps,yo,bl,Tl,ca,ha,ua,Mo,wr,bo,Rr,To,Cr,Eo,Ir,fa,Ao,z,te,De,Eu,Me,Y,Ee,ze,Uc,Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,F,Ro,$e,v,Fe,Co,Io,Po,Lo,No,Hi,Do,Uo,Fo,Pr,Wi,Oo,Oc,Lr,re,da,Ll,Nl,ar,or,ri,Nr,wi,Dl,Ul,B,K,Bc,ne,ns=-90,is=1,Ls,ko,Ho="\\[\\]\\.:\\/",Nu,Wo,Du,Uu,Fu,Ou,Bu,zu,Gu,Rg,Gc;var Xo=e(()=>{rl={};wc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,lr=180/Math.PI;s=class s{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fn(this.x,t.x,n.x),this.y=fn(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fn(this.x,t,n),this.y=fn(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fn(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*a+t.x,this.y=o*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};q=class q{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,o,c,m){let y=i[a+0],b=i[a+1],w=i[a+2],N=i[a+3],U=o[c+0],R=o[c+1],V=o[c+2],nt=o[c+3];if(N!==nt||y!==U||b!==R||w!==V){let st=y*U+b*R+w*V+N*nt;if(st<0)U=-U,R=-R,V=-V,nt=-nt,st=-st;let H=1-m;if(st<0.9995){let O=Math.acos(st),ot=Math.sin(O);H=Math.sin(H*O)/ot,m=Math.sin(m*O)/ot,y=y*H+U*m,b=b*H+R*m,w=w*H+V*m,N=N*H+nt*m}else{y=y*H+U*m,b=b*H+R*m,w=w*H+V*m,N=N*H+nt*m;let O=1/Math.sqrt(y*y+b*b+w*w+N*N);y*=O,b*=O,w*=O,N*=O}}t[n]=y,t[n+1]=b,t[n+2]=w,t[n+3]=N}static multiplyQuaternionsFlat(t,n,i,a,o,c){let m=i[a],y=i[a+1],b=i[a+2],w=i[a+3],N=o[c],U=o[c+1],R=o[c+2],V=o[c+3];return t[n]=m*V+w*N+y*R-b*U,t[n+1]=y*V+w*U+b*N-m*R,t[n+2]=b*V+w*R+m*U-y*N,t[n+3]=w*V-m*N-y*U-b*R,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let{_x:i,_y:a,_z:o,_order:c}=t,{cos:m,sin:y}=Math,b=m(i/2),w=m(a/2),N=m(o/2),U=y(i/2),R=y(a/2),V=y(o/2);switch(c){case"XYZ":this._x=U*w*N+b*R*V,this._y=b*R*N-U*w*V,this._z=b*w*V+U*R*N,this._w=b*w*N-U*R*V;break;case"YXZ":this._x=U*w*N+b*R*V,this._y=b*R*N-U*w*V,this._z=b*w*V-U*R*N,this._w=b*w*N+U*R*V;break;case"ZXY":this._x=U*w*N-b*R*V,this._y=b*R*N+U*w*V,this._z=b*w*V+U*R*N,this._w=b*w*N-U*R*V;break;case"ZYX":this._x=U*w*N-b*R*V,this._y=b*R*N+U*w*V,this._z=b*w*V-U*R*N,this._w=b*w*N+U*R*V;break;case"YZX":this._x=U*w*N+b*R*V,this._y=b*R*N+U*w*V,this._z=b*w*V-U*R*N,this._w=b*w*N-U*R*V;break;case"XZY":this._x=U*w*N-b*R*V,this._y=b*R*N-U*w*V,this._z=b*w*V+U*R*N,this._w=b*w*N+U*R*V;break;default:nn("Quaternion: .setFromEuler() encountered an unknown order: "+c)}if(n===!0)this._onChangeCallback();return this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],o=n[8],c=n[1],m=n[5],y=n[9],b=n[2],w=n[6],N=n[10],U=i+m+N;if(U>0){let R=0.5/Math.sqrt(U+1);this._w=0.25/R,this._x=(w-y)*R,this._y=(o-b)*R,this._z=(c-a)*R}else if(i>m&&i>N){let R=2*Math.sqrt(1+i-m-N);this._w=(w-y)/R,this._x=0.25*R,this._y=(a+c)/R,this._z=(o+b)/R}else if(m>N){let R=2*Math.sqrt(1+m-i-N);this._w=(o-b)/R,this._x=(a+c)/R,this._y=0.25*R,this._z=(y+w)/R}else{let R=2*Math.sqrt(1+N-i-m);this._w=(c-a)/R,this._x=(o+b)/R,this._y=(y+w)/R,this._z=0.25*R}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;if(i<0.00000001)if(i=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=i;else this._x=0,this._y=-t.z,this._z=t.y,this._w=i;else this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let{_x:i,_y:a,_z:o,_w:c}=t,{_x:m,_y:y,_z:b,_w:w}=n;return this._x=i*w+c*m+a*b-o*y,this._y=a*w+c*y+o*m-i*b,this._z=o*w+c*b+i*y-a*m,this._w=c*w-i*m-a*y-o*b,this._onChangeCallback(),this}slerp(t,n){let{_x:i,_y:a,_z:o,_w:c}=t,m=this.dot(t);if(m<0)i=-i,a=-a,o=-o,c=-c,m=-m;let y=1-n;if(m<0.9995){let b=Math.acos(m),w=Math.sin(b);y=Math.sin(y*b)/w,n=Math.sin(n*b)/w,this._x=this._x*y+i*n,this._y=this._y*y+a*n,this._z=this._z*y+o*n,this._w=this._w*y+c*n,this._onChangeCallback()}else this._x=this._x*y+i*n,this._y=this._y*y+a*n,this._z=this._z*y+o*n,this._w=this._w*y+c*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};r=class r{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){if(i===void 0)i=this.z;return this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(al.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*n+o[3]*i+o[6]*a,this.y=o[1]*n+o[4]*i+o[7]*a,this.z=o[2]*n+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,o=t.elements,c=1/(o[3]*n+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*n+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*n+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,{x:o,y:c,z:m,w:y}=t,b=2*(c*a-m*i),w=2*(m*n-o*a),N=2*(o*i-c*n);return this.x=n+y*b+c*N-m*w,this.y=i+y*w+m*b-o*N,this.z=a+y*N+o*w-c*b,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*a,this.y=o[1]*n+o[5]*i+o[9]*a,this.z=o[2]*n+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fn(this.x,t.x,n.x),this.y=fn(this.y,t.y,n.y),this.z=fn(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fn(this.x,t,n),this.y=fn(this.y,t,n),this.z=fn(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fn(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let{x:i,y:a,z:o}=t,{x:c,y:m,z:y}=n;return this.x=a*y-o*m,this.y=o*c-i*y,this.z=i*m-a*c,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vr.copy(this).projectOnVector(t),this.sub(Vr)}reflect(t){return this.sub(Vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vr=new r,al=new q;an=class an{static{this.prototype.isMatrix3=!0}constructor(t,n,i,a,o,c,m,y,b){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,n,i,a,o,c,m,y,b)}set(t,n,i,a,o,c,m,y,b){let w=this.elements;return w[0]=t,w[1]=a,w[2]=m,w[3]=n,w[4]=o,w[5]=y,w[6]=i,w[7]=c,w[8]=b,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,o=this.elements,c=i[0],m=i[3],y=i[6],b=i[1],w=i[4],N=i[7],U=i[2],R=i[5],V=i[8],nt=a[0],st=a[3],H=a[6],O=a[1],ot=a[4],lt=a[7],it=a[2],ct=a[5],dt=a[8];return o[0]=c*nt+m*O+y*it,o[3]=c*st+m*ot+y*ct,o[6]=c*H+m*lt+y*dt,o[1]=b*nt+w*O+N*it,o[4]=b*st+w*ot+N*ct,o[7]=b*H+w*lt+N*dt,o[2]=U*nt+R*O+V*it,o[5]=U*st+R*ot+V*ct,o[8]=U*H+R*lt+V*dt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],o=t[3],c=t[4],m=t[5],y=t[6],b=t[7],w=t[8];return n*c*w-n*m*b-i*o*w+i*m*y+a*o*b-a*c*y}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],o=t[3],c=t[4],m=t[5],y=t[6],b=t[7],w=t[8],N=w*c-m*b,U=m*y-w*o,R=b*o-c*y,V=n*N+i*U+a*R;if(V===0)return this.set(0,0,0,0,0,0,0,0,0);let nt=1/V;return t[0]=N*nt,t[1]=(a*b-w*i)*nt,t[2]=(m*i-a*c)*nt,t[3]=U*nt,t[4]=(w*n-a*y)*nt,t[5]=(a*o-m*n)*nt,t[6]=R*nt,t[7]=(i*y-b*n)*nt,t[8]=(c*n-i*o)*nt,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,o,c,m){let y=Math.cos(o),b=Math.sin(o);return this.set(i*y,i*b,-i*(y*c+b*m)+c+t,-a*b,a*y,-a*(-b*c+y*m)+m+n,0,0,1),this}scale(t,n){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(t,n)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-t)),this}translate(t,n){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(t,n)),this}makeTranslation(t,n){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,n,0,0,1);return this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xr=new an,ol=new an().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ll=new an().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);gn=Fh();Yr=new r;qn=class qn extends yi{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,i=1001,a=1001,o=1006,c=1008,m=1023,y=1009,b=qn.DEFAULT_ANISOTROPY,w=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=ls(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=b,this.format=m,this.internalFormat=null,this.type=y,this.offset=new s(0,0),this.repeat=new s(1,1),this.center=new s(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new an,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=w,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){nn(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){nn(`Texture.setValues(): property '${n}' does not exist.`);continue}if(a&&i&&(a.isVector2&&i.isVector2))a.copy(i);else if(a&&i&&(a.isVector3&&i.isVector3))a.copy(i);else if(a&&i&&(a.isMatrix3&&i.isMatrix3))a.copy(i);else this[n]=i}}toJSON(t){let n=t===void 0||typeof t==="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!n)t.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=300;qn.DEFAULT_ANISOTROPY=1;_=class _{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*n+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*n+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*n+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*n+c[7]*i+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);if(n<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/n,this.y=t.y/n,this.z=t.z/n;return this}setAxisAngleFromRotationMatrix(t){let n,i,a,o,c=0.01,m=0.1,y=t.elements,b=y[0],w=y[4],N=y[8],U=y[1],R=y[5],V=y[9],nt=y[2],st=y[6],H=y[10];if(Math.abs(w-U)<0.01&&Math.abs(N-nt)<0.01&&Math.abs(V-st)<0.01){if(Math.abs(w+U)<0.1&&Math.abs(N+nt)<0.1&&Math.abs(V+st)<0.1&&Math.abs(b+R+H-3)<0.1)return this.set(1,0,0,0),this;n=Math.PI;let ot=(b+1)/2,lt=(R+1)/2,it=(H+1)/2,ct=(w+U)/4,dt=(N+nt)/4,J=(V+st)/4;if(ot>lt&&ot>it)if(ot<0.01)i=0,a=0.707106781,o=0.707106781;else i=Math.sqrt(ot),a=ct/i,o=dt/i;else if(lt>it)if(lt<0.01)i=0.707106781,a=0,o=0.707106781;else a=Math.sqrt(lt),i=ct/a,o=J/a;else if(it<0.01)i=0.707106781,a=0.707106781,o=0;else o=Math.sqrt(it),i=dt/o,a=J/o;return this.set(i,a,o,n),this}let O=Math.sqrt((st-V)*(st-V)+(N-nt)*(N-nt)+(U-w)*(U-w));if(Math.abs(O)<0.001)O=1;return this.x=(st-V)/O,this.y=(N-nt)/O,this.z=(U-w)/O,this.w=Math.acos((b+R+H-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fn(this.x,t.x,n.x),this.y=fn(this.y,t.y,n.y),this.z=fn(this.z,t.z,n.z),this.w=fn(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fn(this.x,t,n),this.y=fn(this.y,t,n),this.z=fn(this.z,t,n),this.w=fn(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fn(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xo=class xo extends yi{constructor(t=1,n=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new _(0,0,t,n),this.scissorTest=!1,this.viewport=new _(0,0,t,n),this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=new qn({width:t,height:n,depth:i.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)n.mapping=t.mapping;if(t.wrapS!==void 0)n.wrapS=t.wrapS;if(t.wrapT!==void 0)n.wrapT=t.wrapT;if(t.wrapR!==void 0)n.wrapR=t.wrapR;if(t.magFilter!==void 0)n.magFilter=t.magFilter;if(t.minFilter!==void 0)n.minFilter=t.minFilter;if(t.format!==void 0)n.format=t.format;if(t.type!==void 0)n.type=t.type;if(t.anisotropy!==void 0)n.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)n.colorSpace=t.colorSpace;if(t.flipY!==void 0)n.flipY=t.flipY;if(t.generateMipmaps!==void 0)n.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)n.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)n.internalFormat=t.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)if(this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0)this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new Cs(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};P=class P extends xo{constructor(t=1,n=1,i={}){super(t,n,i);this.isWebGLRenderTarget=!0}};vr=class vr extends qn{constructor(t=null,n=1,i=1,a=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};Oe=class Oe extends qn{constructor(t=null,n=1,i=1,a=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};p=class p{static{this.prototype.isMatrix4=!0}constructor(t,n,i,a,o,c,m,y,b,w,N,U,R,V,nt,st){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,n,i,a,o,c,m,y,b,w,N,U,R,V,nt,st)}set(t,n,i,a,o,c,m,y,b,w,N,U,R,V,nt,st){let H=this.elements;return H[0]=t,H[4]=n,H[8]=i,H[12]=a,H[1]=o,H[5]=c,H[9]=m,H[13]=y,H[2]=b,H[6]=w,H[10]=N,H[14]=U,H[3]=R,H[7]=V,H[11]=nt,H[15]=st,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new p().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){if(this.determinantAffine()===0)return t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this;return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/Xi.setFromMatrixColumn(t,0).length(),o=1/Xi.setFromMatrixColumn(t,1).length(),c=1/Xi.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*c,n[9]=i[9]*c,n[10]=i[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,{x:i,y:a,z:o}=t,c=Math.cos(i),m=Math.sin(i),y=Math.cos(a),b=Math.sin(a),w=Math.cos(o),N=Math.sin(o);if(t.order==="XYZ"){let U=c*w,R=c*N,V=m*w,nt=m*N;n[0]=y*w,n[4]=-y*N,n[8]=b,n[1]=R+V*b,n[5]=U-nt*b,n[9]=-m*y,n[2]=nt-U*b,n[6]=V+R*b,n[10]=c*y}else if(t.order==="YXZ"){let U=y*w,R=y*N,V=b*w,nt=b*N;n[0]=U+nt*m,n[4]=V*m-R,n[8]=c*b,n[1]=c*N,n[5]=c*w,n[9]=-m,n[2]=R*m-V,n[6]=nt+U*m,n[10]=c*y}else if(t.order==="ZXY"){let U=y*w,R=y*N,V=b*w,nt=b*N;n[0]=U-nt*m,n[4]=-c*N,n[8]=V+R*m,n[1]=R+V*m,n[5]=c*w,n[9]=nt-U*m,n[2]=-c*b,n[6]=m,n[10]=c*y}else if(t.order==="ZYX"){let U=c*w,R=c*N,V=m*w,nt=m*N;n[0]=y*w,n[4]=V*b-R,n[8]=U*b+nt,n[1]=y*N,n[5]=nt*b+U,n[9]=R*b-V,n[2]=-b,n[6]=m*y,n[10]=c*y}else if(t.order==="YZX"){let U=c*y,R=c*b,V=m*y,nt=m*b;n[0]=y*w,n[4]=nt-U*N,n[8]=V*N+R,n[1]=N,n[5]=c*w,n[9]=-m*w,n[2]=-b*w,n[6]=R*N+V,n[10]=U-nt*N}else if(t.order==="XZY"){let U=c*y,R=c*b,V=m*y,nt=m*b;n[0]=y*w,n[4]=-N,n[8]=b*w,n[1]=U*N+nt,n[5]=c*w,n[9]=R*N-V,n[2]=V*N-R,n[6]=m*w,n[10]=nt*N+U}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Gh)}lookAt(t,n,i){let a=this.elements;if(Jn.subVectors(t,n),Jn.lengthSq()===0)Jn.z=1;if(Jn.normalize(),bi.crossVectors(i,Jn),bi.lengthSq()===0){if(Math.abs(i.z)===1)Jn.x+=0.0001;else Jn.z+=0.0001;Jn.normalize(),bi.crossVectors(i,Jn)}return bi.normalize(),zs.crossVectors(Jn,bi),a[0]=bi.x,a[4]=zs.x,a[8]=Jn.x,a[1]=bi.y,a[5]=zs.y,a[9]=Jn.y,a[2]=bi.z,a[6]=zs.z,a[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,o=this.elements,c=i[0],m=i[4],y=i[8],b=i[12],w=i[1],N=i[5],U=i[9],R=i[13],V=i[2],nt=i[6],st=i[10],H=i[14],O=i[3],ot=i[7],lt=i[11],it=i[15],ct=a[0],dt=a[4],J=a[8],rt=a[12],mt=a[1],St=a[5],gt=a[9],bt=a[13],Ut=a[2],ht=a[6],wt=a[10],Rt=a[14],vt=a[3],Gt=a[7],Et=a[11],Lt=a[15];return o[0]=c*ct+m*mt+y*Ut+b*vt,o[4]=c*dt+m*St+y*ht+b*Gt,o[8]=c*J+m*gt+y*wt+b*Et,o[12]=c*rt+m*bt+y*Rt+b*Lt,o[1]=w*ct+N*mt+U*Ut+R*vt,o[5]=w*dt+N*St+U*ht+R*Gt,o[9]=w*J+N*gt+U*wt+R*Et,o[13]=w*rt+N*bt+U*Rt+R*Lt,o[2]=V*ct+nt*mt+st*Ut+H*vt,o[6]=V*dt+nt*St+st*ht+H*Gt,o[10]=V*J+nt*gt+st*wt+H*Et,o[14]=V*rt+nt*bt+st*Rt+H*Lt,o[3]=O*ct+ot*mt+lt*Ut+it*vt,o[7]=O*dt+ot*St+lt*ht+it*Gt,o[11]=O*J+ot*gt+lt*wt+it*Et,o[15]=O*rt+ot*bt+lt*Rt+it*Lt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],o=t[12],c=t[1],m=t[5],y=t[9],b=t[13],w=t[2],N=t[6],U=t[10],R=t[14],V=t[3],nt=t[7],st=t[11],H=t[15],O=y*R-b*U,ot=m*R-b*N,lt=m*U-y*N,it=c*R-b*w,ct=c*U-y*w,dt=c*N-m*w;return n*(nt*O-st*ot+H*lt)-i*(V*O-st*it+H*ct)+a*(V*ot-nt*it+H*dt)-o*(V*lt-nt*ct+st*dt)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],o=t[1],c=t[5],m=t[9],y=t[2],b=t[6],w=t[10];return n*(c*w-m*b)-i*(o*w-m*y)+a*(o*b-c*y)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;if(t.isVector3)a[12]=t.x,a[13]=t.y,a[14]=t.z;else a[12]=t,a[13]=n,a[14]=i;return this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],o=t[3],c=t[4],m=t[5],y=t[6],b=t[7],w=t[8],N=t[9],U=t[10],R=t[11],V=t[12],nt=t[13],st=t[14],H=t[15],O=n*m-i*c,ot=n*y-a*c,lt=n*b-o*c,it=i*y-a*m,ct=i*b-o*m,dt=a*b-o*y,J=w*nt-N*V,rt=w*st-U*V,mt=w*H-R*V,St=N*st-U*nt,gt=N*H-R*nt,bt=U*H-R*st,Ut=O*bt-ot*gt+lt*St+it*mt-ct*rt+dt*J;if(Ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ht=1/Ut;return t[0]=(m*bt-y*gt+b*St)*ht,t[1]=(a*gt-i*bt-o*St)*ht,t[2]=(nt*dt-st*ct+H*it)*ht,t[3]=(U*ct-N*dt-R*it)*ht,t[4]=(y*mt-c*bt-b*rt)*ht,t[5]=(n*bt-a*mt+o*rt)*ht,t[6]=(st*lt-V*dt-H*ot)*ht,t[7]=(w*dt-U*lt+R*ot)*ht,t[8]=(c*gt-m*mt+b*J)*ht,t[9]=(i*mt-n*gt-o*J)*ht,t[10]=(V*ct-nt*lt+H*O)*ht,t[11]=(N*lt-w*ct-R*O)*ht,t[12]=(m*rt-c*St-y*J)*ht,t[13]=(n*St-i*rt+a*J)*ht,t[14]=(nt*ot-V*it-st*O)*ht,t[15]=(w*it-N*ot+U*O)*ht,this}scale(t){let n=this.elements,{x:i,y:a,z:o}=t;return n[0]*=i,n[4]*=a,n[8]*=o,n[1]*=i,n[5]*=a,n[9]*=o,n[2]*=i,n[6]*=a,n[10]*=o,n[3]*=i,n[7]*=a,n[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1);return this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),o=1-i,{x:c,y:m,z:y}=t,b=o*c,w=o*m;return this.set(b*c+i,b*m-a*y,b*y+a*m,0,b*m+a*y,w*m+i,w*y-a*c,0,b*y-a*m,w*y+a*c,o*y*y+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,o,c){return this.set(1,i,o,0,t,1,c,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,{_x:o,_y:c,_z:m,_w:y}=n,b=o+o,w=c+c,N=m+m,U=o*b,R=o*w,V=o*N,nt=c*w,st=c*N,H=m*N,O=y*b,ot=y*w,lt=y*N,{x:it,y:ct,z:dt}=i;return a[0]=(1-(nt+H))*it,a[1]=(R+lt)*it,a[2]=(V-ot)*it,a[3]=0,a[4]=(R-lt)*ct,a[5]=(1-(U+H))*ct,a[6]=(st+O)*ct,a[7]=0,a[8]=(V+ot)*dt,a[9]=(st-O)*dt,a[10]=(1-(U+nt))*dt,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),n.identity(),this;let c=Xi.set(a[0],a[1],a[2]).length(),m=Xi.set(a[4],a[5],a[6]).length(),y=Xi.set(a[8],a[9],a[10]).length();if(o<0)c=-c;ni.copy(this);let b=1/c,w=1/m,N=1/y;return ni.elements[0]*=b,ni.elements[1]*=b,ni.elements[2]*=b,ni.elements[4]*=w,ni.elements[5]*=w,ni.elements[6]*=w,ni.elements[8]*=N,ni.elements[9]*=N,ni.elements[10]*=N,n.setFromRotationMatrix(ni),i.x=c,i.y=m,i.z=y,this}makePerspective(t,n,i,a,o,c,m=2000,y=!1){let b=this.elements,w=2*o/(n-t),N=2*o/(i-a),U=(n+t)/(n-t),R=(i+a)/(i-a),V,nt;if(y)V=o/(c-o),nt=c*o/(c-o);else if(m===2000)V=-(c+o)/(c-o),nt=-2*c*o/(c-o);else if(m===2001)V=-c/(c-o),nt=-c*o/(c-o);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return b[0]=w,b[4]=0,b[8]=U,b[12]=0,b[1]=0,b[5]=N,b[9]=R,b[13]=0,b[2]=0,b[6]=0,b[10]=V,b[14]=nt,b[3]=0,b[7]=0,b[11]=-1,b[15]=0,this}makeOrthographic(t,n,i,a,o,c,m=2000,y=!1){let b=this.elements,w=2/(n-t),N=2/(i-a),U=-(n+t)/(n-t),R=-(i+a)/(i-a),V,nt;if(y)V=1/(c-o),nt=c/(c-o);else if(m===2000)V=-2/(c-o),nt=-(c+o)/(c-o);else if(m===2001)V=-1/(c-o),nt=-o/(c-o);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return b[0]=w,b[4]=0,b[8]=0,b[12]=U,b[1]=0,b[5]=N,b[9]=0,b[13]=R,b[2]=0,b[6]=0,b[10]=V,b[14]=nt,b[3]=0,b[7]=0,b[11]=0,b[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Xi=new r,ni=new p,zh=new r(0,0,0),Gh=new r(1,1,1),bi=new r,zs=new r,Jn=new r,cl=new p,hl=new q;Z=class Z{constructor(t=0,n=0,i=0,a=Z.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,o=a[0],c=a[4],m=a[8],y=a[1],b=a[5],w=a[9],N=a[2],U=a[6],R=a[10];switch(n){case"XYZ":if(this._y=Math.asin(fn(m,-1,1)),Math.abs(m)<0.9999999)this._x=Math.atan2(-w,R),this._z=Math.atan2(-c,o);else this._x=Math.atan2(U,b),this._z=0;break;case"YXZ":if(this._x=Math.asin(-fn(w,-1,1)),Math.abs(w)<0.9999999)this._y=Math.atan2(m,R),this._z=Math.atan2(y,b);else this._y=Math.atan2(-N,o),this._z=0;break;case"ZXY":if(this._x=Math.asin(fn(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-N,R),this._z=Math.atan2(-c,b);else this._y=0,this._z=Math.atan2(y,o);break;case"ZYX":if(this._y=Math.asin(-fn(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(U,R),this._z=Math.atan2(y,o);else this._x=0,this._z=Math.atan2(-c,b);break;case"YZX":if(this._z=Math.asin(fn(y,-1,1)),Math.abs(y)<0.9999999)this._x=Math.atan2(-w,b),this._y=Math.atan2(-N,o);else this._x=0,this._y=Math.atan2(m,R);break;case"XZY":if(this._z=Math.asin(-fn(c,-1,1)),Math.abs(c)<0.9999999)this._x=Math.atan2(U,b),this._y=Math.atan2(m,o);else this._x=Math.atan2(-w,R),this._y=0;break;default:nn("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}if(this._order=n,i===!0)this._onChangeCallback();return this}setFromQuaternion(t,n,i){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Z.DEFAULT_ORDER="XYZ";ul=new r,qi=new q,pi=new p,Gs=new r,us=new r,Hh=new r,Wh=new q,dl=new r(1,0,0),fl=new r(0,1,0),pl=new r(0,0,1),ml={type:"added"},Vh={type:"removed"},Yi={type:"childadded",child:null},Zr={type:"childremoved",child:null};Gn=class Gn extends yi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();let t=new r,n=new Z,i=new q,a=new r(1,1,1);function o(){i.setFromEuler(n,!1)}function c(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new p},normalMatrix:{value:new an}}),this.matrix=new p,this.matrixWorld=new p,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return qi.setFromAxisAngle(t,n),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,n){return qi.setFromAxisAngle(t,n),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,n){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,n,i){if(t.isVector3)Gs.copy(t);else Gs.set(t,n,i);let a=this.parent;if(this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)pi.lookAt(us,Gs,this.up);else pi.lookAt(Gs,us,this.up);if(this.quaternion.setFromRotationMatrix(pi),a)pi.extractRotation(a.matrixWorld),qi.setFromRotationMatrix(pi),this.quaternion.premultiply(qi.invert())}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}if(t===this)return sn("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null;else sn("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);if(n!==-1)t.parent=null,this.children.splice(n,1),t.dispatchEvent(Vh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld);return t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let c=this.children[i].getObjectByProperty(t,n);if(c!==void 0)return c}return}getObjectsByProperty(t,n,i=[]){if(this[t]===n)i.push(this);let a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;if(n!==null)t(n),n.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:n,y:i,z:a}=t,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*a,o[13]+=i-o[1]*n-o[5]*i-o[9]*a,o[14]+=a-o[2]*n-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null)a.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(n===!0){let o=this.children;for(let c=0,m=o.length;c<m;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t==="string",i={};if(n)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let a={};if(a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)a.userData=this.userData;if(a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null)a.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)a.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)a.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map((m)=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map((m)=>({...m})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)a.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)a.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)a.boundingBox=this.boundingBox.toJSON()}function o(m,y){if(m[y.uuid]===void 0)m[y.uuid]=y.toJSON(t);return y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)a.background=this.background.toJSON();else if(this.background.isTexture)a.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)a.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);let m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){let y=m.shapes;if(Array.isArray(y))for(let b=0,w=y.length;b<w;b++){let N=y[b];o(t.shapes,N)}else o(t.shapes,y)}}if(this.isSkinnedMesh){if(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let m=[];for(let y=0,b=this.material.length;y<b;y++)m.push(o(t.materials,this.material[y]));a.material=m}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let m=0;m<this.children.length;m++)a.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let m=0;m<this.animations.length;m++){let y=this.animations[m];a.animations.push(o(t.animations,y))}}if(n){let m=c(t.geometries),y=c(t.materials),b=c(t.textures),w=c(t.images),N=c(t.shapes),U=c(t.skeletons),R=c(t.animations),V=c(t.nodes);if(m.length>0)i.geometries=m;if(y.length>0)i.materials=y;if(b.length>0)i.textures=b;if(w.length>0)i.images=w;if(N.length>0)i.shapes=N;if(U.length>0)i.skeletons=U;if(R.length>0)i.animations=R;if(V.length>0)i.nodes=V}return i.object=a,i;function c(m){let y=[];for(let b in m){let w=m[b];delete w.metadata,y.push(w)}return y}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gn.DEFAULT_UP=new r(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;A=class A extends Gn{constructor(){super();this.isGroup=!0,this.type="Group"}};Xh={type:"move"};Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ks={h:0,s:0,l:0};u=class u{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;if(a&&a.isColor)this.copy(a);else if(typeof a==="number")this.setHex(a);else if(typeof a==="string")this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=gn.workingColorSpace){return this.r=t,this.g=n,this.b=i,gn.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=gn.workingColorSpace){if(t=Nh(t,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{let o=i<=0.5?i*(1+n):i+n-i*n,c=2*i-o;this.r=Jr(c,o,t+0.3333333333333333),this.g=Jr(c,o,t),this.b=Jr(c,o,t-0.3333333333333333)}return gn.colorSpaceToWorking(this,a),this}setStyle(t,n="srgb"){function i(o){if(o===void 0)return;if(parseFloat(o)<1)nn("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=a[1],m=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return i(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,n);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:nn("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);else if(c===6)return this.setHex(parseInt(o,16),n);else nn("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n="srgb"){let i=Cc[t.toLowerCase()];if(i!==void 0)this.setHex(i,n);else nn("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return gn.workingToColorSpace(Xn.copy(this),t),Math.round(fn(Xn.r*255,0,255))*65536+Math.round(fn(Xn.g*255,0,255))*256+Math.round(fn(Xn.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=gn.workingColorSpace){gn.workingToColorSpace(Xn.copy(this),n);let{r:i,g:a,b:o}=Xn,c=Math.max(i,a,o),m=Math.min(i,a,o),y,b,w=(m+c)/2;if(m===c)y=0,b=0;else{let N=c-m;switch(b=w<=0.5?N/(c+m):N/(2-c-m),c){case i:y=(a-o)/N+(a<o?6:0);break;case a:y=(o-i)/N+2;break;case o:y=(i-a)/N+4;break}y/=6}return t.h=y,t.s=b,t.l=w,t}getRGB(t,n=gn.workingColorSpace){return gn.workingToColorSpace(Xn.copy(this),n),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t="srgb"){gn.workingToColorSpace(Xn.copy(this),t);let{r:n,g:i,b:a}=Xn;if(t!=="srgb")return`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`;return`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+n,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ti),t.getHSL(ks);let i=Wr(Ti.h,ks.h,n),a=Wr(Ti.s,ks.s,n),o=Wr(Ti.l,ks.l,n);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*n+o[3]*i+o[6]*a,this.g=o[1]*n+o[4]*i+o[7]*a,this.b=o[2]*n+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Xn=new u;u.NAMES=Cc;G=class G extends Gn{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Z,this.environmentIntensity=1,this.environmentRotation=new Z,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);if(this.fog!==null)n.object.fog=this.fog.toJSON();return n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}};ii=new r,mi=new r,$r=new r,gi=new r,Zi=new r,Ji=new r,gl=new r,Kr=new r,Qr=new r,jr=new r,ta=new _,ea=new _,na=new _;_i=[new r,new r,new r,new r,new r,new r,new r,new r],si=new r,Hs=new D,$i=new r,Ki=new r,Qi=new r,Ei=new r,Ai=new r,Ni=new r,ds=new r,Ws=new r,Vs=new r,Di=new r;Ln=new r,Xs=new s;l=class l extends yi{constructor(t,n,i=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?go(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xs.fromBufferAttribute(this,n),Xs.applyMatrix3(t),this.setXY(n,Xs.x,Xs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyMatrix3(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyMatrix4(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyNormalMatrix(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.transformDirection(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];if(this.normalized)i=this._denormalize(i);return i}setComponent(t,n,i){if(this.normalized)i=this._normalize(i);return this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];if(this.normalized)n=this._denormalize(n);return n}setX(t,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];if(this.normalized)n=this._denormalize(n);return n}setY(t,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];if(this.normalized)n=this._denormalize(n);return n}setZ(t,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];if(this.normalized)n=this._denormalize(n);return n}setW(t,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){if(t*=this.itemSize,this.normalized)n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){if(t*=this.itemSize,this.normalized)n=this._normalize(n),i=this._normalize(i),a=this._normalize(a);return this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,o){if(t*=this.itemSize,this.normalized)n=this._normalize(n),i=this._normalize(i),a=this._normalize(a),o=this._normalize(o);return this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):Dh(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):Uh(t,this.array)}};Sr=class Sr extends l{constructor(t,n,i){super(new Uint16Array(t),n,i)}};Mr=class Mr extends l{constructor(t,n,i){super(new Uint32Array(t),n,i)}};f=class f extends l{constructor(t,n,i){super(new Float32Array(t),n,i)}};Yh=new D,fs=new r,sa=new r;Kn=new p,ra=new Gn,ji=new r,$n=new D,ps=new D,zn=new r;h=class h extends yi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Ph(t))?Mr:Sr)(t,1);else this.index=t;return this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;if(n!==void 0)n.applyMatrix4(t),n.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let o=new an().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let a=this.attributes.tangent;if(a!==void 0)a.transformDirection(t),a.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,n,i){return Kn.makeTranslation(t,n,i),this.applyMatrix4(Kn),this}scale(t,n,i){return Kn.makeScale(t,n,i),this.applyMatrix4(Kn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,o=t.length;a<o;a++){let c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new f(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let o=t[a];n.setXYZ(a,o.x,o.y,o.z||0)}if(t.length>n.count)nn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");n.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new D;let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new r(-1/0,-1/0,-1/0),new r(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let o=n[i];if($n.setFromBufferAttribute(o),this.morphTargetsRelative)zn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(zn);else this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new se;let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new r,1/0);return}if(t){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let o=0,c=n.length;o<c;o++){let m=n[o];if(ps.setFromBufferAttribute(m),this.morphTargetsRelative)zn.addVectors($n.min,ps.min),$n.expandByPoint(zn),zn.addVectors($n.max,ps.max),$n.expandByPoint(zn);else $n.expandByPoint(ps.min),$n.expandByPoint(ps.max)}$n.getCenter(i);let a=0;for(let o=0,c=t.count;o<c;o++)zn.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(zn));if(n)for(let o=0,c=n.length;o<c;o++){let m=n[o],y=this.morphTargetsRelative;for(let b=0,w=m.count;b<w;b++){if(zn.fromBufferAttribute(m,b),y)ji.fromBufferAttribute(t,b),zn.add(ji);a=Math.max(a,i.distanceToSquared(zn))}}if(this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius))sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:a,uv:o}=n,c=this.getAttribute("tangent");if(c===void 0||c.count!==i.count)c=new l(new Float32Array(4*i.count),4),this.setAttribute("tangent",c);let m=[],y=[],b=new Uint8Array(i.count);for(let rt=0;rt<i.count;rt++)m[rt]=new r,y[rt]=new r;let w=new r,N=new r,U=new r,R=new s,V=new s,nt=new s,st=new r,H=new r;function O(rt,mt,St){b[rt]=b[mt]=b[St]=1,w.fromBufferAttribute(i,rt),N.fromBufferAttribute(i,mt),U.fromBufferAttribute(i,St),R.fromBufferAttribute(o,rt),V.fromBufferAttribute(o,mt),nt.fromBufferAttribute(o,St),N.sub(w),U.sub(w),V.sub(R),nt.sub(R);let gt=1/(V.x*nt.y-nt.x*V.y);if(!isFinite(gt))return;st.copy(N).multiplyScalar(nt.y).addScaledVector(U,-V.y).multiplyScalar(gt),H.copy(U).multiplyScalar(V.x).addScaledVector(N,-nt.x).multiplyScalar(gt),m[rt].add(st),m[mt].add(st),m[St].add(st),y[rt].add(H),y[mt].add(H),y[St].add(H)}let ot=this.groups;if(ot.length===0)ot=[{start:0,count:t.count}];for(let rt=0,mt=ot.length;rt<mt;++rt){let St=ot[rt],{start:gt,count:bt}=St;for(let Ut=gt,ht=gt+bt;Ut<ht;Ut+=3)O(t.getX(Ut+0),t.getX(Ut+1),t.getX(Ut+2))}let lt=new r,it=new r,ct=new r,dt=new r;function J(rt){ct.fromBufferAttribute(a,rt),dt.copy(ct);let mt=m[rt];lt.copy(mt),lt.sub(ct.multiplyScalar(ct.dot(mt))).normalize(),it.crossVectors(dt,mt);let gt=it.dot(y[rt])<0?-1:1;c.setXYZW(rt,lt.x,lt.y,lt.z,gt)}for(let rt=0,mt=i.count;rt<mt;++rt)if(b[rt])J(rt);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new l(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let U=0,R=i.count;U<R;U++)i.setXYZ(U,0,0,0);let a=new r,o=new r,c=new r,m=new r,y=new r,b=new r,w=new r,N=new r;if(t)for(let U=0,R=t.count;U<R;U+=3){let V=t.getX(U+0),nt=t.getX(U+1),st=t.getX(U+2);a.fromBufferAttribute(n,V),o.fromBufferAttribute(n,nt),c.fromBufferAttribute(n,st),w.subVectors(c,o),N.subVectors(a,o),w.cross(N),m.fromBufferAttribute(i,V),y.fromBufferAttribute(i,nt),b.fromBufferAttribute(i,st),m.add(w),y.add(w),b.add(w),i.setXYZ(V,m.x,m.y,m.z),i.setXYZ(nt,y.x,y.y,y.z),i.setXYZ(st,b.x,b.y,b.z)}else for(let U=0,R=n.count;U<R;U+=3)a.fromBufferAttribute(n,U+0),o.fromBufferAttribute(n,U+1),c.fromBufferAttribute(n,U+2),w.subVectors(c,o),N.subVectors(a,o),w.cross(N),i.setXYZ(U+0,w.x,w.y,w.z),i.setXYZ(U+1,w.x,w.y,w.z),i.setXYZ(U+2,w.x,w.y,w.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)zn.fromBufferAttribute(t,n),zn.normalize(),t.setXYZ(n,zn.x,zn.y,zn.z)}toNonIndexed(){function t(m,y){let{array:b,itemSize:w,normalized:N}=m,U=new b.constructor(y.length*w),R=0,V=0;for(let nt=0,st=y.length;nt<st;nt++){if(m.isInterleavedBufferAttribute)R=y[nt]*m.data.stride+m.offset;else R=y[nt]*w;for(let H=0;H<w;H++)U[V++]=b[R++]}return new l(U,w,N)}if(this.index===null)return nn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new h,i=this.index.array,a=this.attributes;for(let m in a){let y=a[m],b=t(y,i);n.setAttribute(m,b)}let o=this.morphAttributes;for(let m in o){let y=[],b=o[m];for(let w=0,N=b.length;w<N;w++){let U=b[w],R=t(U,i);y.push(R)}n.morphAttributes[m]=y}n.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let m=0,y=c.length;m<y;m++){let b=c[m];n.addGroup(b.start,b.count,b.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let y=this.parameters;for(let b in y)if(y[b]!==void 0)t[b]=y[b];return t}t.data={attributes:{}};let n=this.index;if(n!==null)t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)};let i=this.attributes;for(let y in i){let b=i[y];t.data.attributes[y]=b.toJSON(t.data)}let a={},o=!1;for(let y in this.morphAttributes){let b=this.morphAttributes[y],w=[];for(let N=0,U=b.length;N<U;N++){let R=b[N];w.push(R.toJSON(t.data))}if(w.length>0)a[y]=w,o=!0}if(o)t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;if(c.length>0)t.data.groups=JSON.parse(JSON.stringify(c));let m=this.boundingSphere;if(m!==null)t.data.boundingSphere=m.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;if(i!==null)this.setIndex(i.clone());let a=t.attributes;for(let b in a){let w=a[b];this.setAttribute(b,w.clone(n))}let o=t.morphAttributes;for(let b in o){let w=[],N=o[b];for(let U=0,R=N.length;U<R;U++)w.push(N[U].clone(n));this.morphAttributes[b]=w}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let b=0,w=c.length;b<w;b++){let N=c[b];this.addGroup(N.start,N.count,N.materialIndex)}let m=t.boundingBox;if(m!==null)this.boundingBox=m.clone();let y=t.boundingSphere;if(y!==null)this.boundingSphere=y.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};aa=new r,Jh=new r,$h=new an;Si=class Si extends yi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new u(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let n in t){let i=t[n];if(i===void 0){nn(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){nn(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}if(a&&a.isColor)a.set(i);else if(a&&a.isVector2&&(i&&i.isVector2)||a&&a.isEuler&&(i&&i.isEuler)||a&&a.isVector3&&(i&&i.isVector3))a.copy(i);else this[n]=i}}toJSON(t){let n=t===void 0||typeof t==="string";if(n)t={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((o)=>o.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function a(o){let c=[];for(let m in o){let y=o[m];delete y.metadata,c.push(y)}return c}if(n){let o=a(t.textures),c=a(t.images);if(o.length>0)i.textures=o;if(c.length>0)i.images=c}return i}fromJSON(t,n){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new u().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((i)=>new ai().fromJSON(i));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=n[t.map]||null;if(t.matcap!==void 0)this.matcap=n[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=n[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=n[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=n[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let i=t.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new s().fromArray(i)}if(t.displacementMap!==void 0)this.displacementMap=n[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=n[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=n[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=n[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=n[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=n[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=n[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=n[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=n[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=n[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=n[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=n[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new s().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=n[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=n[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=n[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=n[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=n[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=Array(a);for(let o=0;o!==a;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}};xi=new r,oa=new r,qs=new r,Ys=new r;we=class we extends Si{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new u(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Z,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};_l=new p,Ui=new vo,Zs=new se,xl=new r,Js=new r,$s=new r,Ks=new r,la=new r,Qs=new r,vl=new r,js=new r;d=class d extends Gn{constructor(t=new h,n=new we){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){if(super.copy(t,n),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){let m=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=o}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let m=this.morphTargetInfluences;if(o&&m){Qs.set(0,0,0);for(let y=0,b=o.length;y<b;y++){let w=m[y],N=o[y];if(w===0)continue;if(la.fromBufferAttribute(N,t),c)Qs.addScaledVector(la,w);else Qs.addScaledVector(la.sub(n),w)}n.add(Qs)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,o=this.matrixWorld;if(a===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Zs.copy(i.boundingSphere),Zs.applyMatrix4(o),Ui.copy(t.ray).recast(t.near),Zs.containsPoint(Ui.origin)===!1){if(Ui.intersectSphere(Zs,xl)===null)return;if(Ui.origin.distanceToSquared(xl)>(t.far-t.near)**2)return}if(_l.copy(o).invert(),Ui.copy(t.ray).applyMatrix4(_l),i.boundingBox!==null){if(Ui.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(t,n,Ui)}_computeIntersections(t,n,i){let a,o=this.geometry,c=this.material,m=o.index,y=o.attributes.position,b=o.attributes.uv,w=o.attributes.uv1,N=o.attributes.normal,{groups:U,drawRange:R}=o;if(m!==null)if(Array.isArray(c))for(let V=0,nt=U.length;V<nt;V++){let st=U[V],H=c[st.materialIndex],O=Math.max(st.start,R.start),ot=Math.min(m.count,Math.min(st.start+st.count,R.start+R.count));for(let lt=O,it=ot;lt<it;lt+=3){let ct=m.getX(lt),dt=m.getX(lt+1),J=m.getX(lt+2);if(a=tr(this,H,t,i,b,w,N,ct,dt,J),a)a.faceIndex=Math.floor(lt/3),a.face.materialIndex=st.materialIndex,n.push(a)}}else{let V=Math.max(0,R.start),nt=Math.min(m.count,R.start+R.count);for(let st=V,H=nt;st<H;st+=3){let O=m.getX(st),ot=m.getX(st+1),lt=m.getX(st+2);if(a=tr(this,c,t,i,b,w,N,O,ot,lt),a)a.faceIndex=Math.floor(st/3),n.push(a)}}else if(y!==void 0)if(Array.isArray(c))for(let V=0,nt=U.length;V<nt;V++){let st=U[V],H=c[st.materialIndex],O=Math.max(st.start,R.start),ot=Math.min(y.count,Math.min(st.start+st.count,R.start+R.count));for(let lt=O,it=ot;lt<it;lt+=3){let ct=lt,dt=lt+1,J=lt+2;if(a=tr(this,H,t,i,b,w,N,ct,dt,J),a)a.faceIndex=Math.floor(lt/3),a.face.materialIndex=st.materialIndex,n.push(a)}}else{let V=Math.max(0,R.start),nt=Math.min(y.count,R.start+R.count);for(let st=V,H=nt;st<H;st+=3){let O=st,ot=st+1,lt=st+2;if(a=tr(this,c,t,i,b,w,N,O,ot,lt),a)a.faceIndex=Math.floor(st/3),n.push(a)}}}};I=class I extends qn{constructor(t=null,n=1,i=1,a,o,c,m,y,b=1003,w=1003,N,U){super(null,c,m,y,b,w,a,o,N,U);this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};j=class j extends l{constructor(t,n,i,a=1){super(t,n,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};ts=new p,yl=new p,er=[],Sl=new D,jh=new p,ms=new d,gs=new se;W=class W extends d{constructor(t,n,i){super(t,n);this.isInstancedMesh=!0,this.instanceMatrix=new j(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,jh)}computeBoundingBox(){let t=this.geometry,n=this.count;if(this.boundingBox===null)this.boundingBox=new D;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),Sl.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Sl)}computeBoundingSphere(){let t=this.geometry,n=this.count;if(this.boundingSphere===null)this.boundingSphere=new se;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),gs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(gs)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,n){if(this.instanceColor===null)return n.setRGB(1,1,1);else return n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,c=t*o+1;for(let m=0;m<i.length;m++)i[m]=a[c+m]}raycast(t,n){let i=this.matrixWorld,a=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(gs.copy(this.boundingSphere),gs.applyMatrix4(i),t.ray.intersectsSphere(gs)===!1)return;for(let o=0;o<a;o++){this.getMatrixAt(o,ts),yl.multiplyMatrices(i,ts),ms.matrixWorld=yl,ms.raycast(t,er);for(let c=0,m=er.length;c<m;c++){let y=er[c];y.instanceId=o,y.object=this,n.push(y)}er.length=0}}setColorAt(t,n){if(this.instanceColor===null)this.instanceColor=new j(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,a=i.length+1;if(this.morphTexture===null)this.morphTexture=new I(new Float32Array(a*this.count),a,this.count,1028,1015);let o=this.morphTexture.source.data.data,c=0;for(let b=0;b<i.length;b++)c+=i[b];let m=this.geometry.morphTargetsRelative?1:1-c,y=a*t;return o[y]=m,o.set(i,y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}};Fi=new se,tu=new s(0.5,0.5),nr=new r;Ml=new p;Tr=class Tr extends qn{constructor(t=[],n=301,i,a,o,c,m,y,b,w){super(t,n,i,a,o,c,m,y,b,w);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};le=class le extends qn{constructor(t,n,i=1014,a,o,c,m=1003,y=1003,b,w=1026,N=1){if(w!==1026&&w!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:t,height:n,depth:N};super(U,a,o,c,m,y,w,i,b);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}};Er=class Er extends le{constructor(t,n=1014,i=301,a,o,c=1003,m=1003,y,b=1026){let w={width:t,height:t,depth:1},N=[w,w,w,w,w,w];super(t,t,n,i,a,o,c,m,y,b);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}};Ar=class Ar extends qn{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};ye=class ye extends h{constructor(t=1,n=1,i=1,a=1,o=1,c=1){super();this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};let m=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);let y=[],b=[],w=[],N=[],U=0,R=0;V("z","y","x",-1,-1,i,n,t,c,o,0),V("z","y","x",1,-1,i,n,-t,c,o,1),V("x","z","y",1,1,t,i,n,a,c,2),V("x","z","y",1,-1,t,i,-n,a,c,3),V("x","y","z",1,-1,t,n,i,a,o,4),V("x","y","z",-1,-1,t,n,-i,a,o,5),this.setIndex(y),this.setAttribute("position",new f(b,3)),this.setAttribute("normal",new f(w,3)),this.setAttribute("uv",new f(N,2));function V(nt,st,H,O,ot,lt,it,ct,dt,J,rt){let mt=lt/dt,St=it/J,gt=lt/2,bt=it/2,Ut=ct/2,ht=dt+1,wt=J+1,Rt=0,vt=0,Gt=new r;for(let Et=0;Et<wt;Et++){let Lt=Et*St-bt;for(let Ot=0;Ot<ht;Ot++){let _e=Ot*mt-gt;Gt[nt]=_e*O,Gt[st]=Lt*ot,Gt[H]=Ut,b.push(Gt.x,Gt.y,Gt.z),Gt[nt]=0,Gt[st]=0,Gt[H]=ct>0?1:-1,w.push(Gt.x,Gt.y,Gt.z),N.push(Ot/dt),N.push(1-Et/J),Rt+=1}}for(let Et=0;Et<J;Et++)for(let Lt=0;Lt<dt;Lt++){let Ot=U+Lt+ht*Et,_e=U+Lt+ht*(Et+1),It=U+(Lt+1)+ht*(Et+1),Bt=U+(Lt+1)+ht*Et;y.push(Ot,_e,Bt),y.push(_e,It,Bt),vt+=6}m.addGroup(R,vt,rt),R+=vt,U+=Rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Ps=class Ps extends jn{constructor(t=0,n=0,i=1,a=1,o=0,c=Math.PI*2,m=!1,y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=m,this.aRotation=y}getPoint(t,n=new s){let i=n,a=Math.PI*2,o=this.aEndAngle-this.aStartAngle,c=Math.abs(o)<Number.EPSILON;while(o<0)o+=a;while(o>a)o-=a;if(o<Number.EPSILON)if(c)o=0;else o=a;if(this.aClockwise===!0&&!c)if(o===a)o=-a;else o=o-a;let m=this.aStartAngle+t*o,y=this.aX+this.xRadius*Math.cos(m),b=this.aY+this.yRadius*Math.sin(m);if(this.aRotation!==0){let w=Math.cos(this.aRotation),N=Math.sin(this.aRotation),U=y-this.aX,R=b-this.aY;y=U*w-R*N+this.aX,b=U*N+R*w+this.aY}return i.set(y,b)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}};yo=class yo extends Ps{constructor(t,n,i,a,o,c){super(t,n,i,i,a,o,c);this.isArcCurve=!0,this.type="ArcCurve"}};bl=new r,Tl=new r,ca=new So,ha=new So,ua=new So;Mo=class Mo extends jn{constructor(t=[],n=!1,i="centripetal",a=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=a}getPoint(t,n=new r){let i=n,a=this.points,o=a.length,c=(o-(this.closed?0:1))*t,m=Math.floor(c),y=c-m;if(this.closed)m+=m>0?0:(Math.floor(Math.abs(m)/o)+1)*o;else if(y===0&&m===o-1)m=o-2,y=1;let b,w;if(this.closed||m>0)b=a[(m-1)%o];else Tl.subVectors(a[0],a[1]).add(a[0]),b=Tl;let N=a[m%o],U=a[(m+1)%o];if(this.closed||m+2<o)w=a[(m+2)%o];else bl.subVectors(a[o-1],a[o-2]).add(a[o-1]),w=bl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let R=this.curveType==="chordal"?0.5:0.25,V=Math.pow(b.distanceToSquared(N),R),nt=Math.pow(N.distanceToSquared(U),R),st=Math.pow(U.distanceToSquared(w),R);if(nt<0.0001)nt=1;if(V<0.0001)V=nt;if(st<0.0001)st=nt;ca.initNonuniformCatmullRom(b.x,N.x,U.x,w.x,V,nt,st),ha.initNonuniformCatmullRom(b.y,N.y,U.y,w.y,V,nt,st),ua.initNonuniformCatmullRom(b.z,N.z,U.z,w.z,V,nt,st)}else if(this.curveType==="catmullrom")ca.initCatmullRom(b.x,N.x,U.x,w.x,this.tension),ha.initCatmullRom(b.y,N.y,U.y,w.y,this.tension),ua.initCatmullRom(b.z,N.z,U.z,w.z,this.tension);return i.set(ca.calc(y),ha.calc(y),ua.calc(y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new r().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};wr=class wr extends jn{constructor(t=new s,n=new s,i=new s,a=new s){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new s){let i=n,a=this.v0,o=this.v1,c=this.v2,m=this.v3;return i.set(ys(t,a.x,o.x,c.x,m.x),ys(t,a.y,o.y,c.y,m.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};bo=class bo extends jn{constructor(t=new r,n=new r,i=new r,a=new r){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new r){let i=n,a=this.v0,o=this.v1,c=this.v2,m=this.v3;return i.set(ys(t,a.x,o.x,c.x,m.x),ys(t,a.y,o.y,c.y,m.y),ys(t,a.z,o.z,c.z,m.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};Rr=class Rr extends jn{constructor(t=new s,n=new s){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new s){let i=n;if(t===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1);return i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new s){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};To=class To extends jn{constructor(t=new r,n=new r){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new r){let i=n;if(t===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1);return i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new r){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};Cr=class Cr extends jn{constructor(t=new s,n=new s,i=new s){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new s){let i=n,a=this.v0,o=this.v1,c=this.v2;return i.set(vs(t,a.x,o.x,c.x),vs(t,a.y,o.y,c.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};Eo=class Eo extends jn{constructor(t=new r,n=new r,i=new r){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new r){let i=n,a=this.v0,o=this.v1,c=this.v2;return i.set(vs(t,a.x,o.x,c.x),vs(t,a.y,o.y,c.y),vs(t,a.z,o.z,c.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};Ir=class Ir extends jn{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new s){let i=n,a=this.points,o=(a.length-1)*t,c=Math.floor(o),m=o-c,y=a[c===0?c:c-1],b=a[c],w=a[c>a.length-2?a.length-1:c+1],N=a[c>a.length-3?a.length-1:c+2];return i.set(El(m,y.x,b.x,w.x,N.x),El(m,y.y,b.y,w.y,N.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new s().fromArray(a))}return this}};fa=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Mo,CubicBezierCurve:wr,CubicBezierCurve3:bo,EllipseCurve:Ps,LineCurve:Rr,LineCurve3:To,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Eo,SplineCurve:Ir});Ao=class Ao extends jn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),a=this.getCurveLengths(),o=0;while(o<a.length){if(a[o]>=i){let c=a[o]-i,m=this.curves[o],y=m.getLength(),b=y===0?0:1-c/y;return m.getPointAt(b,n)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,a=this.curves.length;i<a;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));if(this.autoClose)n.push(n[0]);return n}getPoints(t=12){let n=[],i;for(let a=0,o=this.curves;a<o.length;a++){let c=o[a],m=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,y=c.getPoints(m);for(let b=0;b<y.length;b++){let w=y[b];if(i&&i.equals(w))continue;n.push(w),i=w}}if(this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0]))n.push(n[0]);return n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let a=this.curves[n];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(new fa[a.type]().fromJSON(a))}return this.cacheLengths=null,this}};z=class z extends Ao{constructor(t){super();if(this.type="Path",this.currentPoint=new s,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Rr(this.currentPoint.clone(),new s(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,a){let o=new Cr(this.currentPoint.clone(),new s(t,n),new s(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}bezierCurveTo(t,n,i,a,o,c){let m=new wr(this.currentPoint.clone(),new s(t,n),new s(i,a),new s(o,c));return this.curves.push(m),this.currentPoint.set(o,c),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Ir(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,a,o,c){let m=this.currentPoint.x,y=this.currentPoint.y;return this.absarc(t+m,n+y,i,a,o,c),this}absarc(t,n,i,a,o,c){return this.absellipse(t,n,i,i,a,o,c),this}ellipse(t,n,i,a,o,c,m,y){let b=this.currentPoint.x,w=this.currentPoint.y;return this.absellipse(t+b,n+w,i,a,o,c,m,y),this}absellipse(t,n,i,a,o,c,m,y){let b=new Ps(t,n,i,a,o,c,m,y);if(this.curves.length>0){let N=b.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(b);let w=b.getPoint(1);return this.currentPoint.copy(w),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};te=class te extends z{constructor(t){super(t);this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,a=this.holes.length;i<a;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let a=this.holes[n];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(new z().fromJSON(a))}return this}};De=class De extends h{constructor(t=new te([new s(0.5,0.5),new s(-0.5,0.5),new s(-0.5,-0.5),new s(0.5,-0.5)]),n={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,a=[],o=[];for(let m=0,y=t.length;m<y;m++){let b=t[m];c(b)}this.setAttribute("position",new f(a,3)),this.setAttribute("uv",new f(o,2)),this.computeVertexNormals();function c(m){let y=[],b=n.curveSegments!==void 0?n.curveSegments:12,w=n.steps!==void 0?n.steps:1,N=n.depth!==void 0?n.depth:1,U=n.bevelEnabled!==void 0?n.bevelEnabled:!0,R=n.bevelThickness!==void 0?n.bevelThickness:0.2,V=n.bevelSize!==void 0?n.bevelSize:R-0.1,nt=n.bevelOffset!==void 0?n.bevelOffset:0,st=n.bevelSegments!==void 0?n.bevelSegments:3,H=n.extrudePath,O=n.UVGenerator!==void 0?n.UVGenerator:Eu,ot,lt=!1,it,ct,dt,J;if(H){ot=H.getSpacedPoints(w),lt=!0,U=!1;let Nt=H.isCatmullRomCurve3?H.closed:!1;it=H.computeFrenetFrames(w,Nt),ct=new r,dt=new r,J=new r}if(!U)st=0,R=0,V=0,nt=0;let rt=m.extractPoints(b),{shape:mt,holes:St}=rt;if(!oi.isClockWise(mt)){mt=mt.reverse();for(let Nt=0,kt=St.length;Nt<kt;Nt++){let Vt=St[Nt];if(oi.isClockWise(Vt))St[Nt]=Vt.reverse()}}function bt(Nt){let xe=Nt[0];for(let fe=1;fe<=Nt.length;fe++){let je=fe%Nt.length,Ye=Nt[je],un=Ye.x-xe.x,dn=Ye.y-xe.y,yn=un*un+dn*dn,pt=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(xe.x),Math.abs(xe.y)),Nn=0.000000000000000000010000000000000001*pt*pt;if(yn<=Nn){Nt.splice(je,1),fe--;continue}xe=Ye}}bt(mt),St.forEach(bt);let Ut=St.length,ht=mt;for(let Nt=0;Nt<Ut;Nt++){let kt=St[Nt];mt=mt.concat(kt)}function wt(Nt,kt,Vt){if(!kt)sn("ExtrudeGeometry: vec does not exist");return Nt.clone().addScaledVector(kt,Vt)}let Rt=mt.length;function vt(Nt,kt,Vt){let xe,fe,je,Ye=Nt.x-kt.x,un=Nt.y-kt.y,dn=Vt.x-Nt.x,yn=Vt.y-Nt.y,pt=Ye*Ye+un*un,Nn=Ye*yn-un*dn;if(Math.abs(Nn)>Number.EPSILON){let ln=Math.sqrt(pt),In=Math.sqrt(dn*dn+yn*yn),$t=kt.x-un/ln,Mn=kt.y+Ye/ln,tn=Vt.x-yn/In,rn=Vt.y+dn/In,Dn=((tn-$t)*yn-(rn-Mn)*dn)/(Ye*yn-un*dn);xe=$t+Ye*Dn-Nt.x,fe=Mn+un*Dn-Nt.y;let at=xe*xe+fe*fe;if(at<=2)return new s(xe,fe);else je=Math.sqrt(at/2)}else{let ln=!1;if(Ye>Number.EPSILON){if(dn>Number.EPSILON)ln=!0}else if(Ye<-Number.EPSILON){if(dn<-Number.EPSILON)ln=!0}else if(Math.sign(un)===Math.sign(yn))ln=!0;if(ln)xe=-un,fe=Ye,je=Math.sqrt(pt);else xe=Ye,fe=un,je=Math.sqrt(pt/2)}return new s(xe/je,fe/je)}let Gt=[];for(let Nt=0,kt=ht.length,Vt=kt-1,xe=Nt+1;Nt<kt;Nt++,Vt++,xe++){if(Vt===kt)Vt=0;if(xe===kt)xe=0;Gt[Nt]=vt(ht[Nt],ht[Vt],ht[xe])}let Et=[],Lt,Ot=Gt.concat();for(let Nt=0,kt=Ut;Nt<kt;Nt++){let Vt=St[Nt];Lt=[];for(let xe=0,fe=Vt.length,je=fe-1,Ye=xe+1;xe<fe;xe++,je++,Ye++){if(je===fe)je=0;if(Ye===fe)Ye=0;Lt[xe]=vt(Vt[xe],Vt[je],Vt[Ye])}Et.push(Lt),Ot=Ot.concat(Lt)}let _e;if(st===0)_e=oi.triangulateShape(ht,St);else{let Nt=[],kt=[];for(let Vt=0;Vt<st;Vt++){let xe=Vt/st,fe=R*Math.cos(xe*Math.PI/2),je=V*Math.sin(xe*Math.PI/2)+nt;for(let Ye=0,un=ht.length;Ye<un;Ye++){let dn=wt(ht[Ye],Gt[Ye],je);if(de(dn.x,dn.y,-fe),xe===0)Nt.push(dn)}for(let Ye=0,un=Ut;Ye<un;Ye++){let dn=St[Ye];Lt=Et[Ye];let yn=[];for(let pt=0,Nn=dn.length;pt<Nn;pt++){let ln=wt(dn[pt],Lt[pt],je);if(de(ln.x,ln.y,-fe),xe===0)yn.push(ln)}if(xe===0)kt.push(yn)}}_e=oi.triangulateShape(Nt,kt)}let It=_e.length,Bt=V+nt;for(let Nt=0;Nt<Rt;Nt++){let kt=U?wt(mt[Nt],Ot[Nt],Bt):mt[Nt];if(!lt)de(kt.x,kt.y,0);else dt.copy(it.normals[0]).multiplyScalar(kt.x),ct.copy(it.binormals[0]).multiplyScalar(kt.y),J.copy(ot[0]).add(dt).add(ct),de(J.x,J.y,J.z)}for(let Nt=1;Nt<=w;Nt++)for(let kt=0;kt<Rt;kt++){let Vt=U?wt(mt[kt],Ot[kt],Bt):mt[kt];if(!lt)de(Vt.x,Vt.y,N/w*Nt);else dt.copy(it.normals[Nt]).multiplyScalar(Vt.x),ct.copy(it.binormals[Nt]).multiplyScalar(Vt.y),J.copy(ot[Nt]).add(dt).add(ct),de(J.x,J.y,J.z)}for(let Nt=st-1;Nt>=0;Nt--){let kt=Nt/st,Vt=R*Math.cos(kt*Math.PI/2),xe=V*Math.sin(kt*Math.PI/2)+nt;for(let fe=0,je=ht.length;fe<je;fe++){let Ye=wt(ht[fe],Gt[fe],xe);de(Ye.x,Ye.y,N+Vt)}for(let fe=0,je=St.length;fe<je;fe++){let Ye=St[fe];Lt=Et[fe];for(let un=0,dn=Ye.length;un<dn;un++){let yn=wt(Ye[un],Lt[un],xe);if(!lt)de(yn.x,yn.y,N+Vt);else de(yn.x,yn.y+ot[w-1].y,ot[w-1].x+Vt)}}}Re(),Je();function Re(){let Nt=a.length/3;if(U){let kt=0,Vt=Rt*kt;for(let xe=0;xe<It;xe++){let fe=_e[xe];xn(fe[2]+Vt,fe[1]+Vt,fe[0]+Vt)}kt=w+st*2,Vt=Rt*kt;for(let xe=0;xe<It;xe++){let fe=_e[xe];xn(fe[0]+Vt,fe[1]+Vt,fe[2]+Vt)}}else{for(let kt=0;kt<It;kt++){let Vt=_e[kt];xn(Vt[2],Vt[1],Vt[0])}for(let kt=0;kt<It;kt++){let Vt=_e[kt];xn(Vt[0]+Rt*w,Vt[1]+Rt*w,Vt[2]+Rt*w)}}i.addGroup(Nt,a.length/3-Nt,0)}function Je(){let Nt=a.length/3,kt=0;Ke(ht,kt),kt+=ht.length;for(let Vt=0,xe=St.length;Vt<xe;Vt++){let fe=St[Vt];Ke(fe,kt),kt+=fe.length}i.addGroup(Nt,a.length/3-Nt,1)}function Ke(Nt,kt){let Vt=Nt.length;while(--Vt>=0){let xe=Vt,fe=Vt-1;if(fe<0)fe=Nt.length-1;for(let je=0,Ye=w+st*2;je<Ye;je++){let un=Rt*je,dn=Rt*(je+1),yn=kt+xe+un,pt=kt+fe+un,Nn=kt+fe+dn,ln=kt+xe+dn;hn(yn,pt,Nn,ln)}}}function de(Nt,kt,Vt){y.push(Nt),y.push(kt),y.push(Vt)}function xn(Nt,kt,Vt){en(Nt),en(kt),en(Vt);let xe=a.length/3,fe=O.generateTopUV(i,a,xe-3,xe-2,xe-1);_n(fe[0]),_n(fe[1]),_n(fe[2])}function hn(Nt,kt,Vt,xe){en(Nt),en(kt),en(xe),en(kt),en(Vt),en(xe);let fe=a.length/3,je=O.generateSideWallUV(i,a,fe-6,fe-3,fe-2,fe-1);_n(je[0]),_n(je[1]),_n(je[3]),_n(je[1]),_n(je[2]),_n(je[3])}function en(Nt){a.push(y[Nt*3+0]),a.push(y[Nt*3+1]),a.push(y[Nt*3+2])}function _n(Nt){o.push(Nt.x),o.push(Nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Au(n,i,t)}static fromJSON(t,n){let i=[];for(let o=0,c=t.shapes.length;o<c;o++){let m=n[t.shapes[o]];i.push(m)}let a=t.options.extrudePath;if(a!==void 0)t.options.extrudePath=new fa[a.type]().fromJSON(a);return new De(i,t.options)}};Eu={generateTopUV:function(t,n,i,a,o){let c=n[i*3],m=n[i*3+1],y=n[a*3],b=n[a*3+1],w=n[o*3],N=n[o*3+1];return[new s(c,m),new s(y,b),new s(w,N)]},generateSideWallUV:function(t,n,i,a,o,c){let m=n[i*3],y=n[i*3+1],b=n[i*3+2],w=n[a*3],N=n[a*3+1],U=n[a*3+2],R=n[o*3],V=n[o*3+1],nt=n[o*3+2],st=n[c*3],H=n[c*3+1],O=n[c*3+2];if(Math.abs(y-N)<Math.abs(m-w))return[new s(m,1-b),new s(w,1-U),new s(R,1-nt),new s(st,1-O)];else return[new s(y,1-b),new s(N,1-U),new s(V,1-nt),new s(H,1-O)]}};Me=class Me extends h{constructor(t=[new s(0,-0.5),new s(0.5,0),new s(0,0.5)],n=12,i=0,a=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:a},n=Math.floor(n),a=fn(a,0,Math.PI*2);let o=[],c=[],m=[],y=[],b=[],w=1/n,N=new r,U=new s,R=new r,V=new r,nt=new r,st=0,H=0;for(let O=0;O<=t.length-1;O++)switch(O){case 0:st=t[O+1].x-t[O].x,H=t[O+1].y-t[O].y,R.x=H*1,R.y=-st,R.z=H*0,nt.copy(R),R.normalize(),y.push(R.x,R.y,R.z);break;case t.length-1:nt.normalize(),y.push(nt.x,nt.y,nt.z);break;default:st=t[O+1].x-t[O].x,H=t[O+1].y-t[O].y,R.x=H*1,R.y=-st,R.z=H*0,V.copy(R),R.x+=nt.x,R.y+=nt.y,R.z+=nt.z,R.normalize(),y.push(R.x,R.y,R.z),nt.copy(V)}for(let O=0;O<=n;O++){let ot=i+O*w*a,lt=Math.sin(ot),it=Math.cos(ot);for(let ct=0;ct<=t.length-1;ct++){N.x=t[ct].x*lt,N.y=t[ct].y,N.z=t[ct].x*it,c.push(N.x,N.y,N.z),U.x=O/n,U.y=ct/(t.length-1),m.push(U.x,U.y);let dt=y[3*ct+0]*lt,J=y[3*ct+1],rt=y[3*ct+0]*it;b.push(dt,J,rt)}}for(let O=0;O<n;O++)for(let ot=0;ot<t.length-1;ot++){let lt=ot+O*t.length,it=lt,ct=lt+t.length,dt=lt+t.length+1,J=lt+1;o.push(it,ct,J),o.push(dt,J,ct)}this.setIndex(o),this.setAttribute("position",new f(c,3)),this.setAttribute("uv",new f(m,2)),this.setAttribute("normal",new f(b,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.points,t.segments,t.phiStart,t.phiLength)}};Y=class Y extends h{constructor(t=1,n=1,i=1,a=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let o=t/2,c=n/2,m=Math.floor(i),y=Math.floor(a),b=m+1,w=y+1,N=t/m,U=n/y,R=[],V=[],nt=[],st=[];for(let H=0;H<w;H++){let O=H*U-c;for(let ot=0;ot<b;ot++){let lt=ot*N-o;V.push(lt,-O,0),nt.push(0,0,1),st.push(ot/m),st.push(1-H/y)}}for(let H=0;H<y;H++)for(let O=0;O<m;O++){let ot=O+b*H,lt=O+b*(H+1),it=O+1+b*(H+1),ct=O+1+b*H;R.push(ot,lt,ct),R.push(lt,it,ct)}this.setIndex(R),this.setAttribute("position",new f(V,3)),this.setAttribute("normal",new f(nt,3)),this.setAttribute("uv",new f(st,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.width,t.height,t.widthSegments,t.heightSegments)}};Ee=class Ee extends h{constructor(t=new te([new s(0,0.5),new s(-0.5,-0.5),new s(0.5,-0.5)]),n=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],a=[],o=[],c=[],m=0,y=0;if(Array.isArray(t)===!1)b(t);else for(let w=0;w<t.length;w++)b(t[w]),this.addGroup(m,y,w),m+=y,y=0;this.setIndex(i),this.setAttribute("position",new f(a,3)),this.setAttribute("normal",new f(o,3)),this.setAttribute("uv",new f(c,2));function b(w){let N=a.length/3,U=w.extractPoints(n),{shape:R,holes:V}=U;if(oi.isClockWise(R)===!1)R=R.reverse();for(let st=0,H=V.length;st<H;st++){let O=V[st];if(oi.isClockWise(O)===!0)V[st]=O.reverse()}let nt=oi.triangulateShape(R,V);for(let st=0,H=V.length;st<H;st++){let O=V[st];R=R.concat(O)}for(let st=0,H=R.length;st<H;st++){let O=R[st];a.push(O.x,O.y,0),o.push(0,0,1),c.push(O.x,O.y)}for(let st=0,H=nt.length;st<H;st++){let O=nt[st],ot=O[0]+N,lt=O[1]+N,it=O[2]+N;i.push(ot,lt,it),y+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return wu(n,t)}static fromJSON(t,n){let i=[];for(let a=0,o=t.shapes.length;a<o;a++){let c=n[t.shapes[a]];i.push(c)}return new Ee(i,t.curveSegments)}};ze=class ze extends Si{constructor(t){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new u(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};Uc={clone:Gi,merge:Yn};F=class F extends Si{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let c=this.uniforms[a].value;if(c&&c.isTexture)n.uniforms[a]={type:"t",value:c.toJSON(t).uuid};else if(c&&c.isColor)n.uniforms[a]={type:"c",value:c.getHex()};else if(c&&c.isVector2)n.uniforms[a]={type:"v2",value:c.toArray()};else if(c&&c.isVector3)n.uniforms[a]={type:"v3",value:c.toArray()};else if(c&&c.isVector4)n.uniforms[a]={type:"v4",value:c.toArray()};else if(c&&c.isMatrix3)n.uniforms[a]={type:"m3",value:c.toArray()};else if(c&&c.isMatrix4)n.uniforms[a]={type:"m4",value:c.toArray()};else n.uniforms[a]={value:c}}if(Object.keys(this.defines).length>0)n.defines=this.defines;n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)if(this.extensions[a]===!0)i[a]=!0;if(Object.keys(i).length>0)n.extensions=i;return n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new u().setHex(a.value);break;case"v2":this.uniforms[i].value=new s().fromArray(a.value);break;case"v3":this.uniforms[i].value=new r().fromArray(a.value);break;case"v4":this.uniforms[i].value=new _().fromArray(a.value);break;case"m3":this.uniforms[i].value=new an().fromArray(a.value);break;case"m4":this.uniforms[i].value=new p().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}};Ro=class Ro extends F{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};$e=class $e extends Si{constructor(t){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new u(16777215),this.specular=new u(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new u(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new s(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Z,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};v=class v extends Si{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new u(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new u(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new s(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Z,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Fe=class Fe extends Si{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}};Co=class Co extends Si{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Io=class Io extends ki{constructor(t,n,i,a){super(t,n,i,a);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,n,i){let a=this.parameterPositions,o=t-2,c=t+1,m=a[o],y=a[c];if(m===void 0)switch(this.getSettings_().endingStart){case 2401:o=t,m=2*n-i;break;case 2402:o=a.length-2,m=n+a[o]-a[o+1];break;default:o=t,m=i}if(y===void 0)switch(this.getSettings_().endingEnd){case 2401:c=t,y=2*i-n;break;case 2402:c=1,y=i+a[1]-a[0];break;default:c=t-1,y=n}let b=(i-n)*0.5,w=this.valueSize;this._weightPrev=b/(n-m),this._weightNext=b/(y-i),this._offsetPrev=o*w,this._offsetNext=c*w}interpolate_(t,n,i,a){let o=this.resultBuffer,c=this.sampleValues,m=this.valueSize,y=t*m,b=y-m,w=this._offsetPrev,N=this._offsetNext,U=this._weightPrev,R=this._weightNext,V=(i-n)/(a-n),nt=V*V,st=nt*V,H=-U*st+2*U*nt-U*V,O=(1+U)*st+(-1.5-2*U)*nt+(-0.5+U)*V+1,ot=(-1-R)*st+(1.5+R)*nt+0.5*V,lt=R*st-R*nt;for(let it=0;it!==m;++it)o[it]=H*c[w+it]+O*c[b+it]+ot*c[y+it]+lt*c[N+it];return o}};Po=class Po extends ki{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let o=this.resultBuffer,c=this.sampleValues,m=this.valueSize,y=t*m,b=y-m,w=(i-n)/(a-n),N=1-w;for(let U=0;U!==m;++U)o[U]=c[b+U]*N+c[y+U]*w;return o}};Lo=class Lo extends ki{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}};No=class No extends ki{interpolate_(t,n,i,a){let o=this.resultBuffer,c=this.sampleValues,m=this.valueSize,y=t*m,b=y-m,w=this.inTangents,N=this.outTangents;if(!w||!N){let V=(i-n)/(a-n),nt=1-V;for(let st=0;st!==m;++st)o[st]=c[b+st]*nt+c[y+st]*V;return o}let U=m*2,R=t-1;for(let V=0;V!==m;++V){let nt=c[b+V],st=c[y+V],H=R*U+V*2,O=N[H],ot=N[H+1],lt=t*U+V*2,it=w[lt],ct=w[lt+1],dt=Lu(i,n,O,it,a);o[V]=Fc(dt,nt,ot,ct,st)}return o}};ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=2301;Hi=class Hi extends ti{constructor(t,n,i){super(t,n,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=2300;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;Do=class Do extends ti{constructor(t,n,i,a){super(t,n,i,a)}};Do.prototype.ValueTypeName="color";Uo=class Uo extends ti{constructor(t,n,i,a){super(t,n,i,a)}};Uo.prototype.ValueTypeName="number";Fo=class Fo extends ki{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let o=this.resultBuffer,c=this.sampleValues,m=this.valueSize,y=(i-n)/(a-n),b=t*m;for(let w=b+m;b!==w;b+=4)q.slerpFlat(o,0,c,b-m,c,b,y);return o}};Pr=class Pr extends ti{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;Wi=class Wi extends ti{constructor(t,n,i){super(t,n,i)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=2300;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Oo=class Oo extends ti{constructor(t,n,i,a){super(t,n,i,a)}};Oo.prototype.ValueTypeName="vector";Oc=new Bo;zo.DEFAULT_MATERIAL_NAME="__DEFAULT";Lr=class Lr extends Gn{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super();this.isLight=!0,this.type="Light",this.color=new u(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};re=class re extends Lr{constructor(t,n,i){super(t,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new u(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}};da=new p,Ll=new r,Nl=new r;ar=new r,or=new q,ri=new r;Nr=class Nr extends Gn{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new p,this.projectionMatrix=new p,this.projectionMatrixInverse=new p,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ar,or,ri),ri.x===1&&ri.y===1&&ri.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ar,or,ri.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){if(super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ar,or,ri),ri.x===1&&ri.y===1&&ri.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ar,or,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};wi=new r,Dl=new s,Ul=new s;B=class B extends Nr{constructor(t=50,n=1,i=0.1,a=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=0.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Hr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){wi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,n){return this.getViewBounds(t,Dl,Ul),n.subVectors(Ul,Dl)}setViewOffset(t,n,i,a,o,c){if(this.aspect=t/n,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Hr*0.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,o=-0.5*a,c=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:y,fullHeight:b}=c;o+=c.offsetX*a/y,n-=c.offsetY*i/b,a*=c.width/y,i*=c.height/b}let m=this.filmOffset;if(m!==0)o+=t*m/this.getFilmWidth();this.projectionMatrix.makePerspective(o,o+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);if(n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null)n.object.view=Object.assign({},this.view);return n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};K=class K extends Nr{constructor(t=-1,n=1,i=1,a=-1,o=0.1,c=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,o,c){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,o=i-t,c=i+t,m=a+n,y=a-n;if(this.view!==null&&this.view.enabled){let b=(this.right-this.left)/this.view.fullWidth/this.zoom,w=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=b*this.view.offsetX,c=o+b*this.view.width,m-=w*this.view.offsetY,y=m-w*this.view.height}this.projectionMatrix.makeOrthographic(o,c,m,y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);if(n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null)n.object.view=Object.assign({},this.view);return n}};Bc=class Bc extends Go{constructor(){super(new K(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}};ne=class ne extends Lr{constructor(t,n){super(t,n);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};Ls=class Ls extends Gn{constructor(t,n,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new B(ns,is,t,n);a.layers=this.layers,this.add(a);let o=new B(ns,is,t,n);o.layers=this.layers,this.add(o);let c=new B(ns,is,t,n);c.layers=this.layers,this.add(c);let m=new B(ns,is,t,n);m.layers=this.layers,this.add(m);let y=new B(ns,is,t,n);y.layers=this.layers,this.add(y);let b=new B(ns,is,t,n);b.layers=this.layers,this.add(b)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,o,c,m,y]=n;for(let b of n)this.remove(b);if(t===2000)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),y.up.set(0,1,0),y.lookAt(0,0,-1);else if(t===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),y.up.set(0,-1,0),y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let b of n)this.add(b),b.updateMatrixWorld()}update(t,n){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[o,c,m,y,b,w]=this.children,N=t.getRenderTarget(),U=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),V=t.xr.enabled;t.xr.enabled=!1;let nt=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let st=!1;if(t.isWebGLRenderer===!0)st=t.state.buffers.depth.getReversed();else st=t.reversedDepthBuffer;if(t.setRenderTarget(i,0,a),st&&t.autoClear===!1)t.clearDepth();if(t.render(n,o),t.setRenderTarget(i,1,a),st&&t.autoClear===!1)t.clearDepth();if(t.render(n,c),t.setRenderTarget(i,2,a),st&&t.autoClear===!1)t.clearDepth();if(t.render(n,m),t.setRenderTarget(i,3,a),st&&t.autoClear===!1)t.clearDepth();if(t.render(n,y),t.setRenderTarget(i,4,a),st&&t.autoClear===!1)t.clearDepth();if(t.render(n,b),i.texture.mipmapsAutoUpdate=nt,t.setRenderTarget(i,5,a),st&&t.autoClear===!1)t.clearDepth();t.render(n,w),t.setRenderTarget(N,U,R),t.xr.enabled=V,i.texture.needsPMREMUpdate=!0}};ko=class ko extends B{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};Nu=new RegExp("["+Ho+"]","g"),Wo="[^"+Ho+"]",Du="[^"+Ho.replace("\\.","")+"]",Uu=/((?:WC+[\/:])*)/.source.replace("WC",Wo),Fu=/(WCOD+)?/.source.replace("WCOD",Du),Ou=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),zu=new RegExp("^"+Uu+Fu+Ou+Bu+"$"),Gu=["material","materials","bones","map"];bn.Composite=zc;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Rg=new Float32Array(1);Gc=class Gc{static{this.prototype.isMatrix2=!0}constructor(t,n,i,a){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let o=this.elements;return o[0]=t,o[2]=n,o[1]=i,o[3]=a,this}};if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)nn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187"});function lh(){let t=null,n=!1,i=null,a=null;function o(c,m){a=t.requestAnimationFrame(o),i(c,m)}return{start:function(){if(n===!0)return;if(i===null)return;if(t===null)return;a=t.requestAnimationFrame(o),n=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(a);n=!1},setAnimationLoop:function(c){i=c},setContext:function(c){t=c}}}function Hu(t){let n=new WeakMap;function i(y,b){let{array:w,usage:N}=y,U=w.byteLength,R=t.createBuffer();t.bindBuffer(b,R),t.bufferData(b,w,N),y.onUploadCallback();let V;if(w instanceof Float32Array)V=t.FLOAT;else if(typeof Float16Array<"u"&&w instanceof Float16Array)V=t.HALF_FLOAT;else if(w instanceof Uint16Array)if(y.isFloat16BufferAttribute)V=t.HALF_FLOAT;else V=t.UNSIGNED_SHORT;else if(w instanceof Int16Array)V=t.SHORT;else if(w instanceof Uint32Array)V=t.UNSIGNED_INT;else if(w instanceof Int32Array)V=t.INT;else if(w instanceof Int8Array)V=t.BYTE;else if(w instanceof Uint8Array)V=t.UNSIGNED_BYTE;else if(w instanceof Uint8ClampedArray)V=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+w);return{buffer:R,type:V,bytesPerElement:w.BYTES_PER_ELEMENT,version:y.version,size:U}}function a(y,b,w){let{array:N,updateRanges:U}=b;if(t.bindBuffer(w,y),U.length===0)t.bufferSubData(w,0,N);else{U.sort((V,nt)=>V.start-nt.start);let R=0;for(let V=1;V<U.length;V++){let nt=U[R],st=U[V];if(st.start<=nt.start+nt.count+1)nt.count=Math.max(nt.count,st.start+st.count-nt.start);else++R,U[R]=st}U.length=R+1;for(let V=0,nt=U.length;V<nt;V++){let st=U[V];t.bufferSubData(w,st.start*N.BYTES_PER_ELEMENT,N,st.start,st.count)}b.clearUpdateRanges()}b.onUploadCallback()}function o(y){if(y.isInterleavedBufferAttribute)y=y.data;return n.get(y)}function c(y){if(y.isInterleavedBufferAttribute)y=y.data;let b=n.get(y);if(b)t.deleteBuffer(b.buffer),n.delete(y)}function m(y,b){if(y.isInterleavedBufferAttribute)y=y.data;if(y.isGLBufferAttribute){let N=n.get(y);if(!N||N.version<y.version)n.set(y,{buffer:y.buffer,type:y.type,bytesPerElement:y.elementSize,version:y.version});return}let w=n.get(y);if(w===void 0)n.set(y,i(y,b));else if(w.version<y.version){if(w.size!==y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(w.buffer,y,b),w.version=y.version}}return{get:o,remove:c,update:m}}function Tp(t,n,i,a,o,c){let m=new u(0),y=o===!0?0:1,b,w,N=null,U=0,R=null;function V(ot){let lt=ot.isScene===!0?ot.background:null;if(lt&&lt.isTexture){let it=ot.backgroundBlurriness>0;lt=n.get(lt,it)}return lt}function nt(ot){let lt=!1,it=V(ot);if(it===null)H(m,y);else if(it&&it.isColor)H(it,1),lt=!0;let ct=t.xr.getEnvironmentBlendMode();if(ct==="additive")i.buffers.color.setClear(0,0,0,1,c);else if(ct==="alpha-blend")i.buffers.color.setClear(0,0,0,0,c);if(t.autoClear||lt)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function st(ot,lt){let it=V(lt);if(it&&it.isCubeTexture){if(w===void 0)w=new d(new ye(1,1,1),new F({name:"BackgroundCubeMaterial",uniforms:Gi(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:X,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),w.geometry.deleteAttribute("normal"),w.geometry.deleteAttribute("uv"),w.onBeforeRender=function(ct,dt,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(w.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(w);if(w.material.uniforms.envMap.value=it,w.material.uniforms.backgroundBlurriness.value=lt.backgroundBlurriness,w.material.uniforms.backgroundIntensity.value=lt.backgroundIntensity,w.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(lt.backgroundRotation)).transpose(),it.isRenderTargetTexture===!1)w.material.uniforms.backgroundRotation.value.premultiply(ch);if(w.material.toneMapped=gn.getTransfer(it.colorSpace)!==An,N!==it||U!==it.version||R!==t.toneMapping)w.material.needsUpdate=!0,N=it,U=it.version,R=t.toneMapping;w.layers.enableAll(),ot.unshift(w,w.geometry,w.material,0,0,null)}else if(it&&it.isTexture){if(b===void 0)b=new d(new Y(2,2),new F({name:"BackgroundMaterial",uniforms:Gi(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),Object.defineProperty(b.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(b);if(b.material.uniforms.t2D.value=it,b.material.uniforms.backgroundIntensity.value=lt.backgroundIntensity,b.material.toneMapped=gn.getTransfer(it.colorSpace)!==An,it.matrixAutoUpdate===!0)it.updateMatrix();if(b.material.uniforms.uvTransform.value.copy(it.matrix),N!==it||U!==it.version||R!==t.toneMapping)b.material.needsUpdate=!0,N=it,U=it.version,R=t.toneMapping;b.layers.enableAll(),ot.unshift(b,b.geometry,b.material,0,0,null)}}function H(ot,lt){ot.getRGB(Dr,wo(t)),i.buffers.color.setClear(Dr.r,Dr.g,Dr.b,lt,c)}function O(){if(w!==void 0)w.geometry.dispose(),w.material.dispose(),w=void 0;if(b!==void 0)b.geometry.dispose(),b.material.dispose(),b=void 0}return{getClearColor:function(){return m},setClearColor:function(ot,lt=1){m.set(ot),y=lt,H(m,y)},getClearAlpha:function(){return y},setClearAlpha:function(ot){y=ot,H(m,y)},render:nt,addToRenderList:st,dispose:O}}function Ep(t,n){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},o=R(null),c=o,m=!1;function y(gt,bt,Ut,ht,wt){let Rt=!1,vt=U(gt,ht,Ut,bt);if(c!==vt)c=vt,w(c.object);if(Rt=V(gt,ht,Ut,wt),Rt)nt(gt,ht,Ut,wt);if(wt!==null)n.update(wt,t.ELEMENT_ARRAY_BUFFER);if(Rt||m){if(m=!1,it(gt,bt,Ut,ht),wt!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(wt).buffer)}}function b(){return t.createVertexArray()}function w(gt){return t.bindVertexArray(gt)}function N(gt){return t.deleteVertexArray(gt)}function U(gt,bt,Ut,ht){let wt=ht.wireframe===!0,Rt=a[bt.id];if(Rt===void 0)Rt={},a[bt.id]=Rt;let vt=gt.isInstancedMesh===!0?gt.id:0,Gt=Rt[vt];if(Gt===void 0)Gt={},Rt[vt]=Gt;let Et=Gt[Ut.id];if(Et===void 0)Et={},Gt[Ut.id]=Et;let Lt=Et[wt];if(Lt===void 0)Lt=R(b()),Et[wt]=Lt;return Lt}function R(gt){let bt=[],Ut=[],ht=[];for(let wt=0;wt<i;wt++)bt[wt]=0,Ut[wt]=0,ht[wt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:bt,enabledAttributes:Ut,attributeDivisors:ht,object:gt,attributes:{},index:null}}function V(gt,bt,Ut,ht){let wt=c.attributes,Rt=bt.attributes,vt=0,Gt=Ut.getAttributes();for(let Et in Gt)if(Gt[Et].location>=0){let Ot=wt[Et],_e=Rt[Et];if(_e===void 0){if(Et==="instanceMatrix"&&gt.instanceMatrix)_e=gt.instanceMatrix;if(Et==="instanceColor"&&gt.instanceColor)_e=gt.instanceColor}if(Ot===void 0)return!0;if(Ot.attribute!==_e)return!0;if(_e&&Ot.data!==_e.data)return!0;vt++}if(c.attributesNum!==vt)return!0;if(c.index!==ht)return!0;return!1}function nt(gt,bt,Ut,ht){let wt={},Rt=bt.attributes,vt=0,Gt=Ut.getAttributes();for(let Et in Gt)if(Gt[Et].location>=0){let Ot=Rt[Et];if(Ot===void 0){if(Et==="instanceMatrix"&&gt.instanceMatrix)Ot=gt.instanceMatrix;if(Et==="instanceColor"&&gt.instanceColor)Ot=gt.instanceColor}let _e={};if(_e.attribute=Ot,Ot&&Ot.data)_e.data=Ot.data;wt[Et]=_e,vt++}c.attributes=wt,c.attributesNum=vt,c.index=ht}function st(){let gt=c.newAttributes;for(let bt=0,Ut=gt.length;bt<Ut;bt++)gt[bt]=0}function H(gt){O(gt,0)}function O(gt,bt){let Ut=c.newAttributes,ht=c.enabledAttributes,wt=c.attributeDivisors;if(Ut[gt]=1,ht[gt]===0)t.enableVertexAttribArray(gt),ht[gt]=1;if(wt[gt]!==bt)t.vertexAttribDivisor(gt,bt),wt[gt]=bt}function ot(){let gt=c.newAttributes,bt=c.enabledAttributes;for(let Ut=0,ht=bt.length;Ut<ht;Ut++)if(bt[Ut]!==gt[Ut])t.disableVertexAttribArray(Ut),bt[Ut]=0}function lt(gt,bt,Ut,ht,wt,Rt,vt){if(vt===!0)t.vertexAttribIPointer(gt,bt,Ut,wt,Rt);else t.vertexAttribPointer(gt,bt,Ut,ht,wt,Rt)}function it(gt,bt,Ut,ht){st();let wt=ht.attributes,Rt=Ut.getAttributes(),vt=bt.defaultAttributeValues;for(let Gt in Rt){let Et=Rt[Gt];if(Et.location>=0){let Lt=wt[Gt];if(Lt===void 0){if(Gt==="instanceMatrix"&&gt.instanceMatrix)Lt=gt.instanceMatrix;if(Gt==="instanceColor"&&gt.instanceColor)Lt=gt.instanceColor}if(Lt!==void 0){let Ot=Lt.normalized,_e=Lt.itemSize,It=n.get(Lt);if(It===void 0)continue;let{buffer:Bt,type:Re,bytesPerElement:Je}=It,Ke=Re===t.INT||Re===t.UNSIGNED_INT||Lt.gpuType===wa;if(Lt.isInterleavedBufferAttribute){let de=Lt.data,xn=de.isInterleavedBuffer===!0?de.stride:de.itemSize,hn=Lt.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let en=0;en<Et.locationSize;en++)O(Et.location+en,de.meshPerAttribute);if(gt.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0)ht._maxInstanceCount=de.meshPerAttribute*de.count}else for(let en=0;en<Et.locationSize;en++)H(Et.location+en);t.bindBuffer(t.ARRAY_BUFFER,Bt);for(let en=0;en<Et.locationSize;en++)lt(Et.location+en,_e/Et.locationSize,Re,Ot,xn*Je,(hn+_e/Et.locationSize*en)*Je,Ke)}else{if(Lt.isInstancedBufferAttribute){for(let de=0;de<Et.locationSize;de++)O(Et.location+de,Lt.meshPerAttribute);if(gt.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0)ht._maxInstanceCount=Lt.meshPerAttribute*Lt.count}else for(let de=0;de<Et.locationSize;de++)H(Et.location+de);t.bindBuffer(t.ARRAY_BUFFER,Bt);for(let de=0;de<Et.locationSize;de++)lt(Et.location+de,_e/Et.locationSize,Re,Ot,_e*Je,_e/Et.locationSize*de*Je,Ke)}}else if(vt!==void 0){let Ot=vt[Gt];if(Ot!==void 0)switch(Ot.length){case 2:t.vertexAttrib2fv(Et.location,Ot);break;case 3:t.vertexAttrib3fv(Et.location,Ot);break;case 4:t.vertexAttrib4fv(Et.location,Ot);break;default:t.vertexAttrib1fv(Et.location,Ot)}}}}ot()}function ct(){mt();for(let gt in a){let bt=a[gt];for(let Ut in bt){let ht=bt[Ut];for(let wt in ht){let Rt=ht[wt];for(let vt in Rt)N(Rt[vt].object),delete Rt[vt];delete ht[wt]}}delete a[gt]}}function dt(gt){if(a[gt.id]===void 0)return;let bt=a[gt.id];for(let Ut in bt){let ht=bt[Ut];for(let wt in ht){let Rt=ht[wt];for(let vt in Rt)N(Rt[vt].object),delete Rt[vt];delete ht[wt]}}delete a[gt.id]}function J(gt){for(let bt in a){let Ut=a[bt];for(let ht in Ut){let wt=Ut[ht];if(wt[gt.id]===void 0)continue;let Rt=wt[gt.id];for(let vt in Rt)N(Rt[vt].object),delete Rt[vt];delete wt[gt.id]}}}function rt(gt){for(let bt in a){let Ut=a[bt],ht=gt.isInstancedMesh===!0?gt.id:0,wt=Ut[ht];if(wt===void 0)continue;for(let Rt in wt){let vt=wt[Rt];for(let Gt in vt)N(vt[Gt].object),delete vt[Gt];delete wt[Rt]}if(delete Ut[ht],Object.keys(Ut).length===0)delete a[bt]}}function mt(){if(St(),m=!0,c===o)return;c=o,w(c.object)}function St(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:y,reset:mt,resetDefaultState:St,dispose:ct,releaseStatesOfGeometry:dt,releaseStatesOfObject:rt,releaseStatesOfProgram:J,initAttributes:st,enableAttribute:H,disableUnusedAttributes:ot}}function Ap(t,n,i){let a;function o(b){a=b}function c(b,w){t.drawArrays(a,b,w),i.update(w,a,1)}function m(b,w,N){if(N===0)return;t.drawArraysInstanced(a,b,w,N),i.update(w,a,N)}function y(b,w,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,b,0,w,0,N);let R=0;for(let V=0;V<N;V++)R+=w[V];i.update(R,a,1)}this.setMode=o,this.render=c,this.renderInstances=m,this.renderMultiDraw=y}function wp(t,n,i,a){let o;function c(){if(o!==void 0)return o;if(n.has("EXT_texture_filter_anisotropic")===!0){let J=n.get("EXT_texture_filter_anisotropic");o=t.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function m(J){if(J!==M&&a.convert(J)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function y(J){let rt=J===ci&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));if(J!==x&&J!==ee&&!rt&&a.convert(J)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function b(J){if(J==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";J="mediump"}if(J==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let w=i.precision!==void 0?i.precision:"highp",N=b(w);if(N!==w)nn("WebGLRenderer:",w,"not supported, using",N,"instead."),w=N;let U=i.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),R=i.logarithmicDepthBuffer===!0&&U===!1;if(i.reversedDepthBuffer===!0&&U===!1)nn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&U===!0)nn("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let V=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),nt=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),st=t.getParameter(t.MAX_TEXTURE_SIZE),H=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),O=t.getParameter(t.MAX_VERTEX_ATTRIBS),ot=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),lt=t.getParameter(t.MAX_VARYING_VECTORS),it=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),ct=t.getParameter(t.MAX_SAMPLES),dt=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:b,textureFormatReadable:m,textureTypeReadable:y,precision:w,logarithmicDepthBuffer:R,reversedDepthBuffer:U,maxTextures:V,maxVertexTextures:nt,maxTextureSize:st,maxCubemapSize:H,maxAttributes:O,maxVertexUniforms:ot,maxVaryings:lt,maxFragmentUniforms:it,maxSamples:ct,samples:dt}}function Rp(t){let n=this,i=null,a=0,o=!1,c=!1,m=new ai,y=new an,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(U,R){let V=U.length!==0||R||a!==0||o;return o=R,a=U.length,V},this.beginShadows=function(){c=!0,N(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(U,R){i=N(U,R,0)},this.setState=function(U,R,V){let{clippingPlanes:nt,clipIntersection:st,clipShadows:H}=U,O=t.get(U);if(!o||nt===null||nt.length===0||c&&!H)if(c)N(null);else w();else{let ot=c?0:a,lt=ot*4,it=O.clippingState||null;b.value=it,it=N(nt,R,lt,V);for(let ct=0;ct!==lt;++ct)it[ct]=i[ct];O.clippingState=it,this.numIntersection=st?this.numPlanes:0,this.numPlanes+=ot}};function w(){if(b.value!==i)b.value=i,b.needsUpdate=a>0;n.numPlanes=a,n.numIntersection=0}function N(U,R,V,nt){let st=U!==null?U.length:0,H=null;if(st!==0){if(H=b.value,nt!==!0||H===null){let O=V+st*4,ot=R.matrixWorldInverse;if(y.getNormalMatrix(ot),H===null||H.length<O)H=new Float32Array(O);for(let lt=0,it=V;lt!==st;++lt,it+=4)m.copy(U[lt]).applyMatrix4(ot,y),m.normal.toArray(H,it),H[it+3]=m.constant}b.value=H,b.needsUpdate=!0}return n.numPlanes=st,n.numIntersection=0,H}}class Fr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ls(1,10,null),this._boxMesh=new d(new ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=0.1,a=100,o={}){let{size:c=256,position:m=Lp}=o,y=this._renderer;this._setSize(c);let b=this._allocateTarget(),w=this._getSourceTarget(!0);if(n>0)w.texture.mipmapsAutoUpdate=!1;let{autoClear:N,autoClearColor:U,autoClearDepth:R,autoClearStencil:V}=y,nt=t.background;if(y.autoClear=!0,y.autoClearColor=!0,y.autoClearDepth=!0,y.autoClearStencil=!0,nt===null)t.background=y.getClearColor(Np);let st=new Ls(i,a,w);if(st.position.copy(m),st.update(y,t),y.autoClear=N,y.autoClearColor=U,y.autoClearDepth=R,y.autoClearStencil=V,t.background=nt,n>0)w.texture.mipmapsAutoUpdate=!0,this._blur(b,n);return this._applyPMREM(b),b}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(kc,Rc(t))}_fromTexture(t,n){if(t.mapping===As||t.mapping===os)this._setSize(t.image.length===0?kc:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=Hc(t,!1,!1),i=Math.log2(t)-Cp;for(let a=0;a<=i;a++)n.texture.mipmaps.push({width:t>>a,height:t>>a});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==n||t&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Hc(n,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let a=this._boxMesh,o=this._cubeCamera;a.material=i,o.renderTarget=t,o.activeMipmapLevel=n;let c=t.width>>n;t.viewport.set(0,0,c,c),o.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;if(t.mapping===As||t.mapping===os){if(this._cubemapMaterial===null)this._cubemapMaterial=Vc();n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Wc();n=this._equirectMaterial}n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=Dp(),this._integrationMaterial=Up();let n=this._cubeSize,i=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(n/uh);for(let c=0;c<=i;c++){let m=Fr.lodToRoughness(c,i);if(c>i-Pp)o.roughness.value=m,this._renderCube(t,c,this._integrationMaterial);else{let y=m>0?Math.log2(n)+0.5*Math.log2(6/(hh*Math.pow(m,4)))+0.5:0;a.roughness.value=m,a.lodBias.value=y,this._renderCube(t,c,this._ggxMaterial)}}}_blur(t,n){if(this._blurMaterial===null)this._blurMaterial=Fp();let i=this._blurMaterial,a=i.uniforms,o=this._sourceTarget;a.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,a.envMap.value=o.texture,this._renderCube(t,0,i),a.envMap.value=t.texture,this._renderCube(o,0,i)}}function Hc(t,n,i){return new Or(t,{minFilter:Ri,generateMipmaps:n,type:ci,colorSpace:ae,depthBuffer:i})}function Fs(t,n,i){return new F({name:t,uniforms:n,vertexShader:g.cube_vert,fragmentShader:i,side:X,blending:Bi,depthTest:!1,depthWrite:!1})}function Dp(){return Fs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Up(){return Fs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fp(){return Fs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ip}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wc(){return Fs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vc(){return Fs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Op(t){let n=new WeakMap,i=new WeakMap,a=null;function o(R,V=!1){if(R===null||R===void 0)return null;if(V)return m(R);return c(R)}function c(R){if(R&&R.isTexture){let V=R.mapping;if(V===cr||V===hr)if(n.has(R)){let nt=n.get(R).texture;return y(nt,R.mapping)}else{let nt=R.image;if(nt&&nt.height>0){let st=new Or(nt.height);return st.fromEquirectangularTexture(t,R),n.set(R,st),R.addEventListener("dispose",w),y(st.texture,R.mapping)}else return null}}return R}function m(R){if(R&&R.isTexture&&R.isPMREMTexture!==!0){let V=R.mapping,nt=V===cr||V===hr,st=V===As||V===os;if(nt||st){let H=i.get(R),O=H!==void 0?H.texture.pmremVersion:0;if(R.isRenderTargetTexture&&R.pmremVersion!==O){if(a===null)a=new Fr(t);return H=nt?a.fromEquirectangular(R,H):a.fromCubemap(R,H),H.texture.pmremVersion=R.pmremVersion,i.set(R,H),H.texture}else if(H!==void 0)return H.texture;else{let ot=R.image;if(nt&&ot&&ot.height>0||st&&ot&&b(ot)){if(a===null)a=new Fr(t);return H=nt?a.fromEquirectangular(R):a.fromCubemap(R),H.texture.pmremVersion=R.pmremVersion,i.set(R,H),R.addEventListener("dispose",N),H.texture}else return null}}}return R}function y(R,V){if(V===cr)R.mapping=As;else if(V===hr)R.mapping=os;return R}function b(R){let V=0,nt=6;for(let st=0;st<nt;st++)if(R[st]!==void 0)V++;return V===nt}function w(R){let V=R.target;V.removeEventListener("dispose",w);let nt=n.get(V);if(nt!==void 0)n.delete(V),nt.dispose()}function N(R){let V=R.target;V.removeEventListener("dispose",N);let nt=i.get(V);if(nt!==void 0)i.delete(V),nt.dispose()}function U(){if(n=new WeakMap,i=new WeakMap,a!==null)a.dispose(),a=null}return{get:o,dispose:U}}function Bp(t){let n={};function i(a){if(n[a]!==void 0)return n[a];let o=t.getExtension(a);return n[a]=o,o}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){let o=i(a);if(o===null)xs("WebGLRenderer: "+a+" extension not supported.");return o}}}function zp(t,n,i,a){let o={},c=new WeakMap,m=new FinalizationRegistry((nt)=>delete o[nt]);function y(nt){b(nt.target)}function b(nt){if(nt.index!==null)n.remove(nt.index);for(let H in nt.attributes)n.remove(nt.attributes[H]);nt.removeEventListener("dispose",y),delete o[nt.id],m.unregister(nt);let st=c.get(nt);if(st)n.remove(st),c.delete(nt);if(a.releaseStatesOfGeometry(nt),nt.isInstancedBufferGeometry===!0)delete nt._maxInstanceCount;i.memory.geometries--}function w(nt,st){if(o[st.id]!==void 0)return st;return st.addEventListener("dispose",y),o[st.id]=new WeakRef(st),m.register(st,st.id,st),i.memory.geometries++,st}function N(nt){let st=nt.attributes;for(let H in st)n.update(st[H],t.ARRAY_BUFFER)}function U(nt){let st=nt.index,H=nt.attributes.position,O=0;if(H===void 0)return;let ot=st!==null?st.array.length:H.array.length/3-1,it=new(H.count>=65535?Mr:Sr)(Math.ceil(ot/3)*6,1),ct=it.array;if(st!==null){let J=st.array;O=st.version;for(let rt=0,mt=0;rt<ot;rt+=3){let St=J[rt+0],gt=J[rt+1],bt=J[rt+2];ct[mt++]=St,ct[mt++]=gt,ct[mt++]=gt,ct[mt++]=bt,ct[mt++]=bt,ct[mt++]=St}}else{O=H.version;for(let J=0,rt=0;J<ot;J+=3){let mt=J+0,St=J+1,gt=J+2;ct[rt++]=mt,ct[rt++]=St,ct[rt++]=St,ct[rt++]=gt,ct[rt++]=gt,ct[rt++]=mt}}it.version=O;let dt=c.get(nt);if(dt)n.remove(dt);c.set(nt,it)}function R(nt){let st=c.get(nt);if(st){let H=nt.index;if(H!==null){if(st.version<H.version)U(nt)}}else U(nt);return c.get(nt)}function V(){for(let nt in o){let st=o[nt].deref();if(st!==void 0)b(st)}}return{get:w,update:N,getWireframeAttribute:R,dispose:V}}function Gp(t,n,i){let a;function o(U){a=U}let c,m;function y(U){c=U.type,m=U.bytesPerElement}function b(U,R){t.drawElements(a,R,c,U*m),i.update(R,a,1)}function w(U,R,V){if(V===0)return;t.drawElementsInstanced(a,R,c,U*m,V),i.update(R,a,V)}function N(U,R,V){if(V===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,R,0,c,U,0,V);let st=0;for(let H=0;H<V;H++)st+=R[H];i.update(st,a,1)}this.setMode=o,this.setIndex=y,this.render=b,this.renderInstances=w,this.renderMultiDraw=N}function kp(t){let n={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,m,y){switch(i.calls++,m){case t.TRIANGLES:i.triangles+=y*(c/3);break;case t.LINES:i.lines+=y*(c/2);break;case t.LINE_STRIP:i.lines+=y*(c-1);break;case t.LINE_LOOP:i.lines+=y*c;break;case t.POINTS:i.points+=y*c;break;default:sn("WebGLInfo: Unknown draw mode:",m);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:n,render:i,programs:null,autoReset:!0,reset:o,update:a}}function Hp(t,n,i){let a=new WeakMap,o=new _;function c(m,y,b){let w=m.morphTargetInfluences,N=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,U=N!==void 0?N.length:0,R=a.get(y);if(R===void 0||R.count!==U){let mt=function(){J.dispose(),a.delete(y),y.removeEventListener("dispose",mt)};if(R!==void 0)R.texture.dispose();let V=y.morphAttributes.position!==void 0,nt=y.morphAttributes.normal!==void 0,st=y.morphAttributes.color!==void 0,H=y.morphAttributes.position||[],O=y.morphAttributes.normal||[],ot=y.morphAttributes.color||[],lt=0;if(V===!0)lt=1;if(nt===!0)lt=2;if(st===!0)lt=3;let it=y.attributes.position.count*lt,ct=1;if(it>n.maxTextureSize)ct=Math.ceil(it/n.maxTextureSize),it=n.maxTextureSize;let dt=new Float32Array(it*ct*4*U),J=new vr(dt,it,ct,U);J.type=ee,J.needsUpdate=!0;let rt=lt*4;for(let St=0;St<U;St++){let gt=H[St],bt=O[St],Ut=ot[St],ht=it*ct*4*St;for(let wt=0;wt<gt.count;wt++){let Rt=wt*rt;if(V===!0)o.fromBufferAttribute(gt,wt),dt[ht+Rt+0]=o.x,dt[ht+Rt+1]=o.y,dt[ht+Rt+2]=o.z,dt[ht+Rt+3]=0;if(nt===!0)o.fromBufferAttribute(bt,wt),dt[ht+Rt+4]=o.x,dt[ht+Rt+5]=o.y,dt[ht+Rt+6]=o.z,dt[ht+Rt+7]=0;if(st===!0)o.fromBufferAttribute(Ut,wt),dt[ht+Rt+8]=o.x,dt[ht+Rt+9]=o.y,dt[ht+Rt+10]=o.z,dt[ht+Rt+11]=Ut.itemSize===4?o.w:1}}R={count:U,texture:J,size:new s(it,ct)},a.set(y,R),y.addEventListener("dispose",mt)}if(m.isInstancedMesh===!0&&m.morphTexture!==null)b.getUniforms().setValue(t,"morphTexture",m.morphTexture,i);else{let V=0;for(let st=0;st<w.length;st++)V+=w[st];let nt=y.morphTargetsRelative?1:1-V;b.getUniforms().setValue(t,"morphTargetBaseInfluence",nt),b.getUniforms().setValue(t,"morphTargetInfluences",w)}b.getUniforms().setValue(t,"morphTargetsTexture",R.texture,i),b.getUniforms().setValue(t,"morphTargetsTextureSize",R.size)}return{update:c}}function Wp(t,n,i,a,o){let c=new WeakMap;function m(w){let N=o.render.frame,U=w.geometry,R=n.get(w,U);if(c.get(R)!==N)n.update(R),c.set(R,N);if(w.isInstancedMesh){if(w.hasEventListener("dispose",b)===!1)w.addEventListener("dispose",b);if(c.get(w)!==N){if(i.update(w.instanceMatrix,t.ARRAY_BUFFER),w.instanceColor!==null)i.update(w.instanceColor,t.ARRAY_BUFFER);c.set(w,N)}}if(w.isSkinnedMesh){let V=w.skeleton;if(c.get(V)!==N)V.update(),c.set(V,N)}return R}function y(){c=new WeakMap}function b(w){let N=w.target;if(N.removeEventListener("dispose",b),a.releaseStatesOfObject(N),i.remove(N.instanceMatrix),N.instanceColor!==null)i.remove(N.instanceColor)}return{update:m,dispose:y}}function Xp(t,n,i,a,o,c){let m=new P(n,i,{type:t,depthBuffer:o,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),y=null,b=null,w=null,N=new h;N.setAttribute("position",new f([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new f([0,2,0,0,2,0],2));let U=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),R=new d(N,U),V=new K(-1,1,1,-1,0,1),nt=null,st=null,H=!1,O,ot=null,lt=[],it=!1;this.setSize=function(ct,dt){if(m.setSize(ct,dt),y!==null)y.setSize(ct,dt);if(b!==null)b.setSize(ct,dt);for(let J=0;J<lt.length;J++){let rt=lt[J];if(rt.setSize)rt.setSize(ct,dt)}},this.setEffects=function(ct){lt=ct,it=lt.length>0&&lt[0].isRenderPass===!0;let{width:dt,height:J}=m;if(lt.length>0&&y===null)y=new P(dt,J,{type:ci,depthBuffer:!1,stencilBuffer:!1}),b=new P(dt,J,{type:ci,depthBuffer:!1,stencilBuffer:!1});let rt=o===!0&&lt.some((mt)=>mt.needsDepthTexture===!0);if(rt!==(m.depthTexture!==null)){if(rt===!0&&w===null){if(w=new le(dt,J),c===!0)w.format=Ci,w.type=zi}m.dispose(),m.depthTexture=rt?w:null,m.resolveDepthBuffer=rt,m.storeMultisampledDepthBuffer=rt}for(let mt=0;mt<lt.length;mt++){let St=lt[mt];if(St.setSize)St.setSize(dt,J);if(rt&&St.needsDepthTexture===!0&&St.setDepthTexture)St.setDepthTexture(w)}},this.begin=function(ct,dt){if(H)return!1;if(ct.toneMapping===li&&lt.length===0)return!1;if(ot=dt,dt!==null){let{width:J,height:rt}=dt;if(m.width!==J||m.height!==rt)this.setSize(J,rt)}if(it===!1)ct.setRenderTarget(m);return O=ct.toneMapping,ct.toneMapping=li,!0},this.hasRenderPass=function(){return it},this.end=function(ct,dt){ct.toneMapping=O,H=!0;let J=m,rt=y;for(let mt=0;mt<lt.length;mt++){let St=lt[mt];if(St.enabled===!1)continue;if(St.render(ct,rt,J,dt),St.needsSwap!==!1)J=rt,rt=rt===y?b:y}if(nt!==ct.outputColorSpace||st!==ct.toneMapping){if(nt=ct.outputColorSpace,st=ct.toneMapping,U.defines={},gn.getTransfer(nt)===An)U.defines.SRGB_TRANSFER="";let mt=Vp[st];if(mt)U.defines[mt]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=J.texture,ct.setRenderTarget(ot),ct.render(R,V),ot=null,H=!1},this.isCompositing=function(){return H},this.dispose=function(){if(m.dispose(),y!==null)y.dispose();if(b!==null)b.dispose();N.dispose(),U.dispose()}}function cs(t,n,i){let a=t[0];if(a<=0||a>0)return t;let o=n*i,c=Xc[o];if(c===void 0)c=new Float32Array(o),Xc[o]=c;if(n!==0){a.toArray(c,0);for(let m=1,y=0;m!==n;++m)y+=i,t[m].toArray(c,y)}return c}function Un(t,n){if(t.length!==n.length)return!1;for(let i=0,a=t.length;i<a;i++)if(t[i]!==n[i])return!1;return!0}function Fn(t,n){for(let i=0,a=n.length;i<a;i++)t[i]=n[i]}function Br(t,n){let i=qc[n];if(i===void 0)i=new Int32Array(n),qc[n]=i;for(let a=0;a!==n;++a)i[a]=t.allocateTextureUnit();return i}function qp(t,n){let i=this.cache;if(i[0]===n)return;t.uniform1f(this.addr,n),i[0]=n}function Yp(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y)t.uniform2f(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y}else{if(Un(i,n))return;t.uniform2fv(this.addr,n),Fn(i,n)}}function Zp(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)t.uniform3f(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z}else if(n.r!==void 0){if(i[0]!==n.r||i[1]!==n.g||i[2]!==n.b)t.uniform3f(this.addr,n.r,n.g,n.b),i[0]=n.r,i[1]=n.g,i[2]=n.b}else{if(Un(i,n))return;t.uniform3fv(this.addr,n),Fn(i,n)}}function Jp(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)t.uniform4f(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w}else{if(Un(i,n))return;t.uniform4fv(this.addr,n),Fn(i,n)}}function $p(t,n){let i=this.cache,a=n.elements;if(a===void 0){if(Un(i,n))return;t.uniformMatrix2fv(this.addr,!1,n),Fn(i,n)}else{if(Un(i,a))return;Jc.set(a),t.uniformMatrix2fv(this.addr,!1,Jc),Fn(i,a)}}function Kp(t,n){let i=this.cache,a=n.elements;if(a===void 0){if(Un(i,n))return;t.uniformMatrix3fv(this.addr,!1,n),Fn(i,n)}else{if(Un(i,a))return;Zc.set(a),t.uniformMatrix3fv(this.addr,!1,Zc),Fn(i,a)}}function Qp(t,n){let i=this.cache,a=n.elements;if(a===void 0){if(Un(i,n))return;t.uniformMatrix4fv(this.addr,!1,n),Fn(i,n)}else{if(Un(i,a))return;Yc.set(a),t.uniformMatrix4fv(this.addr,!1,Yc),Fn(i,a)}}function jp(t,n){let i=this.cache;if(i[0]===n)return;t.uniform1i(this.addr,n),i[0]=n}function tm(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y)t.uniform2i(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y}else{if(Un(i,n))return;t.uniform2iv(this.addr,n),Fn(i,n)}}function em(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)t.uniform3i(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z}else{if(Un(i,n))return;t.uniform3iv(this.addr,n),Fn(i,n)}}function nm(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)t.uniform4i(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w}else{if(Un(i,n))return;t.uniform4iv(this.addr,n),Fn(i,n)}}function im(t,n){let i=this.cache;if(i[0]===n)return;t.uniform1ui(this.addr,n),i[0]=n}function sm(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y)t.uniform2ui(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y}else{if(Un(i,n))return;t.uniform2uiv(this.addr,n),Fn(i,n)}}function rm(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)t.uniform3ui(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z}else{if(Un(i,n))return;t.uniform3uiv(this.addr,n),Fn(i,n)}}function am(t,n){let i=this.cache;if(n.x!==void 0){if(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)t.uniform4ui(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w}else{if(Un(i,n))return;t.uniform4uiv(this.addr,n),Fn(i,n)}}function zr(t){if(t.version===0)t.compareFunction=uo,t.needsUpdate=!0;return t}function om(t,n,i){let a=this.cache,o=i.allocateTextureUnit();if(a[0]!==o)t.uniform1i(this.addr,o),a[0]=o;let c;if(this.type===t.SAMPLER_2D_SHADOW)c=zr(fh);else c=dh;i.setTexture2D(n||c,o)}function lm(t,n,i){let a=this.cache,o=i.allocateTextureUnit();if(a[0]!==o)t.uniform1i(this.addr,o),a[0]=o;i.setTexture3D(n||gh,o)}function cm(t,n,i){let a=this.cache,o=i.allocateTextureUnit();if(a[0]!==o)t.uniform1i(this.addr,o),a[0]=o;let c;if(this.type===t.SAMPLER_CUBE_SHADOW)c=zr(ph);else c=_h;i.setTextureCube(n||c,o)}function hm(t,n,i){let a=this.cache,o=i.allocateTextureUnit();if(a[0]!==o)t.uniform1i(this.addr,o),a[0]=o;i.setTexture2DArray(n||mh,o)}function um(t){switch(t){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return Qp;case 5124:case 35670:return jp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(t,n){t.uniform1fv(this.addr,n)}function fm(t,n){let i=cs(n,this.size,2);t.uniform2fv(this.addr,i)}function pm(t,n){let i=cs(n,this.size,3);t.uniform3fv(this.addr,i)}function mm(t,n){let i=cs(n,this.size,4);t.uniform4fv(this.addr,i)}function gm(t,n){let i=cs(n,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function _m(t,n){let i=cs(n,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function xm(t,n){let i=cs(n,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function vm(t,n){t.uniform1iv(this.addr,n)}function ym(t,n){t.uniform2iv(this.addr,n)}function Sm(t,n){t.uniform3iv(this.addr,n)}function Mm(t,n){t.uniform4iv(this.addr,n)}function bm(t,n){t.uniform1uiv(this.addr,n)}function Tm(t,n){t.uniform2uiv(this.addr,n)}function Em(t,n){t.uniform3uiv(this.addr,n)}function Am(t,n){t.uniform4uiv(this.addr,n)}function wm(t,n,i){let a=this.cache,o=n.length,c=Br(i,o);if(!Un(a,c))t.uniform1iv(this.addr,c),Fn(a,c);let m;if(this.type===t.SAMPLER_2D_SHADOW)m=zr(fh);else m=dh;for(let y=0;y!==o;++y)i.setTexture2D(n[y]||m,c[y])}function Rm(t,n,i){let a=this.cache,o=n.length,c=Br(i,o);if(!Un(a,c))t.uniform1iv(this.addr,c),Fn(a,c);for(let m=0;m!==o;++m)i.setTexture3D(n[m]||gh,c[m])}function Cm(t,n,i){let a=this.cache,o=n.length,c=Br(i,o);if(!Un(a,c))t.uniform1iv(this.addr,c),Fn(a,c);let m;if(this.type===t.SAMPLER_CUBE_SHADOW)m=zr(ph);else m=_h;for(let y=0;y!==o;++y)i.setTextureCube(n[y]||m,c[y])}function Im(t,n,i){let a=this.cache,o=n.length,c=Br(i,o);if(!Un(a,c))t.uniform1iv(this.addr,c),Fn(a,c);for(let m=0;m!==o;++m)i.setTexture2DArray(n[m]||mh,c[m])}function Pm(t){switch(t){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return Tm;case 36295:return Em;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Im}}class xh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=um(n.type)}}class vh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pm(n.type)}}class yh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let o=0,c=a.length;o!==c;++o){let m=a[o];m.setValue(t,n[m.id],i)}}}function $c(t,n){t.seq.push(n),t.map[n.id]=n}function Lm(t,n,i){let a=t.name,o=a.length;qo.lastIndex=0;while(!0){let c=qo.exec(a),m=qo.lastIndex,y=c[1],b=c[2]==="]",w=c[3];if(b)y=y|0;if(w===void 0||w==="["&&m+2===o){$c(i,w===void 0?new xh(y,t,n):new vh(y,t,n));break}else{let U=i.map[y];if(U===void 0)U=new yh(y),$c(i,U);i=U}}}class Us{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let m=t.getActiveUniform(n,c),y=t.getUniformLocation(n,m.name);Lm(m,y,this)}let a=[],o=[];for(let c of this.seq)if(c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW)a.push(c);else o.push(c);if(a.length>0)this.seq=a.concat(o)}setValue(t,n,i,a){let o=this.map[n];if(o!==void 0)o.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];if(a!==void 0)this.setValue(t,i,a)}static upload(t,n,i,a){for(let o=0,c=n.length;o!==c;++o){let m=n[o],y=i[m.id];if(y.needsUpdate!==!1)m.setValue(t,y.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,o=t.length;a!==o;++a){let c=t[a];if(c.id in n)i.push(c)}return i}}function Kc(t,n,i){let a=t.createShader(n);return t.shaderSource(a,i),t.compileShader(a),a}function Um(t,n){let i=t.split(`
`),a=[],o=Math.max(n-6,0),c=Math.min(n+6,i.length);for(let m=o;m<c;m++){let y=m+1;a.push(`${y===n?">":" "} ${y}: ${i[m]}`)}return a.join(`
`)}function Fm(t){gn._getMatrix(Qc,gn.workingColorSpace,t);let n=`mat3( ${Qc.elements.map((i)=>i.toFixed(4))} )`;switch(gn.getTransfer(t)){case ho:return[n,"LinearTransferOETF"];case An:return[n,"sRGBTransferOETF"];default:return nn("WebGLProgram: Unsupported color space: ",t),[n,"LinearTransferOETF"]}}function jc(t,n,i){let a=t.getShaderParameter(n,t.COMPILE_STATUS),c=(t.getShaderInfoLog(n)||"").trim();if(a&&c==="")return"";let m=/ERROR: 0:(\d+)/.exec(c);if(m){let y=parseInt(m[1]);return i.toUpperCase()+`

`+c+`

`+Um(t.getShaderSource(n),y)}else return c}function Om(t,n){let i=Fm(n);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function zm(t,n){let i=Bm[n];if(i===void 0)return nn("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Gm(){gn.getLuminanceCoefficients(Ur);let t=Ur.x.toFixed(4),n=Ur.y.toFixed(4),i=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${n}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function km(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Hm(t){let n=[];for(let i in t){let a=t[i];if(a===!1)continue;n.push("#define "+i+" "+a)}return n.join(`
`)}function Wm(t,n){let i={},a=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){let c=t.getActiveAttrib(n,o),m=c.name,y=1;if(c.type===t.FLOAT_MAT2)y=2;if(c.type===t.FLOAT_MAT3)y=3;if(c.type===t.FLOAT_MAT4)y=4;i[m]={type:c.type,location:t.getAttribLocation(n,m),locationSize:y}}return i}function Ds(t){return t!==""}function th(t,n){let i=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,n.numLightProbeGrids)}function eh(t,n){return t.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}function Zo(t){return t.replace(Vm,Xm)}function Xm(t,n){let i=g[n];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+n+">");return Zo(i)}function nh(t){return t.replace(qm,Ym)}function Ym(t,n,i,a){let o="";for(let c=parseInt(n);c<parseInt(i);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ih(t){let n=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")n+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")n+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")n+=`
#define LOW_PRECISION`;return n}function Jm(t){return Zm[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Km(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return $m[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function jm(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Qm[t.combine]||"ENVMAP_BLENDING_NONE"}function tg(t,n,i,a){let o=t.getContext(),{defines:c,vertexShader:m,fragmentShader:y}=i,b=Jm(i),w=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",N=Km(i),U=jm(i),R=km(i),V=Hm(c),nt=o.createProgram(),st,H,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(st=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,V].filter(Ds).join(`
`),st.length>0)st+=`
`;if(H=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,V].filter(Ds).join(`
`),H.length>0)H+=`
`}else st=[ih(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,V,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+N:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+b:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),H=[ih(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,V,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+w:"",i.envMap?"#define "+N:"",i.envMap?"#define "+U:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+b:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==li?"#define TONE_MAPPING":"",i.toneMapping!==li?g.tonemapping_pars_fragment:"",i.toneMapping!==li?zm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",g.colorspace_pars_fragment,Om("linearToOutputTexel",i.outputColorSpace),Gm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ds).join(`
`);if(m=Zo(m),m=th(m,i),m=eh(m,i),y=Zo(y),y=th(y,i),y=eh(y,i),m=nh(m),y=nh(y),i.isRawShaderMaterial!==!0)O=`#version 300 es
`,st=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+st,H=["#define varying in",i.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+H;let ot=O+st+m,lt=O+H+y,it=Kc(o,o.VERTEX_SHADER,ot),ct=Kc(o,o.FRAGMENT_SHADER,lt);if(o.attachShader(nt,it),o.attachShader(nt,ct),i.index0AttributeName!==void 0)o.bindAttribLocation(nt,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)o.bindAttribLocation(nt,0,"position");o.linkProgram(nt);function dt(St){if(t.debug.checkShaderErrors){let gt=o.getProgramInfoLog(nt)||"",bt=o.getShaderInfoLog(it)||"",Ut=o.getShaderInfoLog(ct)||"",ht=gt.trim(),wt=bt.trim(),Rt=Ut.trim(),vt=!0,Gt=!0;if(o.getProgramParameter(nt,o.LINK_STATUS)===!1)if(vt=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(o,nt,it,ct);else{let Et=jc(o,it,"vertex"),Lt=jc(o,ct,"fragment");sn("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(nt,o.VALIDATE_STATUS)+`

Material Name: `+St.name+`
Material Type: `+St.type+`

Program Info Log: `+ht+`
`+Et+`
`+Lt)}else if(ht!=="")nn("WebGLProgram: Program Info Log:",ht);else if(wt===""||Rt==="")Gt=!1;if(Gt)St.diagnostics={runnable:vt,programLog:ht,vertexShader:{log:wt,prefix:st},fragmentShader:{log:Rt,prefix:H}}}o.deleteShader(it),o.deleteShader(ct),J=new Us(o,nt),rt=Wm(o,nt)}let J;this.getUniforms=function(){if(J===void 0)dt(this);return J};let rt;this.getAttributes=function(){if(rt===void 0)dt(this);return rt};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(mt===!1)mt=o.getProgramParameter(nt,Nm);return mt},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(nt),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Dm++,this.cacheKey=n,this.usedTimes=1,this.program=nt,this.vertexShader=it,this.fragmentShader=ct,this}class Sh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);if(a.has(n)===!1)a.add(n),n.usedTimes++;if(a.has(i)===!1)a.add(i),i.usedTimes++;return this}remove(t){let n=this.materialCache.get(t);for(let i of n)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);if(i===void 0)i=new Set,n.set(t,i);return i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);if(i===void 0)i=new Mh(t),n.set(t,i);return i}}class Mh{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}}function ng(t){return t===ce||t===_r||t===xr}function ig(t,n,i,a,o,c){let m=new yr,y=new Sh,b=new Set,w=[],N=new Map,U=a.logarithmicDepthBuffer,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(J){if(b.add(J),J===0)return"uv";return`uv${J}`}function nt(J,rt,mt,St,gt,bt){let Ut=St.fog,ht=gt.geometry,wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?St.environment:null,Rt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,vt=n.get(J.envMap||wt,Rt),Gt=R[J.type],Et=a.precision;if(J.precision!==null){if(Et=a.getMaxPrecision(J.precision),Et!==J.precision)nn("WebGLProgram.getParameters:",J.precision,"not supported, using",Et,"instead.")}let Lt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,_e=0;if(ht.morphAttributes.position!==void 0)_e=1;if(ht.morphAttributes.normal!==void 0)_e=2;if(ht.morphAttributes.color!==void 0)_e=3;let It,Bt,Re,Je;if(Gt){let jt=ui[Gt];It=jt.vertexShader,Bt=jt.fragmentShader}else{It=J.vertexShader,Bt=J.fragmentShader;let jt=y.getVertexShaderStage(J),Tn=y.getFragmentShaderStage(J);y.update(J,jt,Tn),Re=jt.id,Je=Tn.id}let Ke=t.getRenderTarget(),de=t.state.buffers.depth.getReversed(),xn=gt.isInstancedMesh===!0,hn=gt.isBatchedMesh===!0,en=!!J.map,_n=!!J.matcap,Nt=!!vt,kt=Nt&&vt.isPMREMTexture===!0,Vt=!!J.aoMap,xe=!!J.lightMap,fe=!!J.bumpMap&&J.wireframe===!1,je=!!J.normalMap,Ye=!!J.displacementMap,un=!!J.emissiveMap,dn=!!J.metalnessMap,yn=!!J.roughnessMap,pt=J.anisotropy>0,Nn=J.clearcoat>0,ln=J.diffuseRoughness>0,In=J.dispersion>0,$t=J.retroreflectivity>0,Mn=J.iridescence>0,tn=J.sheen>0,rn=J.transmission>0,Dn=pt&&!!J.anisotropyMap,at=Nn&&!!J.clearcoatMap,tt=Nn&&!!J.clearcoatNormalMap,_t=Nn&&!!J.clearcoatRoughnessMap,Ft=ln&&!!J.diffuseRoughnessMap,Dt=Mn&&!!J.iridescenceMap,Wt=Mn&&!!J.iridescenceThicknessMap,Yt=tn&&!!J.sheenColorMap,Tt=tn&&!!J.sheenRoughnessMap,Pt=!!J.specularMap,Xt=!!J.specularColorMap,ut=!!J.specularIntensityMap,Ct=rn&&!!J.transmissionMap,At=rn&&!!J.thicknessMap,zt=!!J.gradientMap,Ht=!!J.alphaMap,Jt=J.alphaTest>0,Ze=!!J.alphaHash,qe=!!J.extensions,Qt=li;if(J.toneMapped){if(Ke===null||Ke.isXRRenderTarget===!0)Qt=t.toneMapping}let Qe=kt?vt.isCompressedCubeTexture?vt.image[0].mipmaps:vt.mipmaps:null,cn={shaderID:Gt,shaderType:J.type,shaderName:J.name,vertexShader:It,fragmentShader:Bt,defines:J.defines,customVertexShaderID:Re,customFragmentShaderID:Je,isRawShaderMaterial:J.isRawShaderMaterial===!0,glslVersion:J.glslVersion,precision:Et,batching:hn,batchingColor:hn&&gt._colorsTexture!==null,instancing:xn,instancingColor:xn&&gt.instanceColor!==null,instancingMorph:xn&&gt.morphTexture!==null,outputColorSpace:Ke===null?t.outputColorSpace:Ke.isXRRenderTarget===!0?Ke.texture.colorSpace:gn.workingColorSpace,alphaToCoverage:!!J.alphaToCoverage,map:en,matcap:_n,envMap:Nt,envMapMode:Nt&&vt.mapping,envMapPMREM:kt,envMapMaxLod:kt?Qe.length-1:null,envMapSize:kt?Qe[0].width:null,aoMap:Vt,lightMap:xe,bumpMap:fe,normalMap:je,displacementMap:Ye,emissiveMap:un,normalMapObjectSpace:je&&J.normalMapType===xc,normalMapTangentSpace:je&&J.normalMapType===co,packedNormalMap:je&&J.normalMapType===co&&ng(J.normalMap.format),metalnessMap:dn,roughnessMap:yn,anisotropy:pt,anisotropyMap:Dn,clearcoat:Nn,clearcoatMap:at,clearcoatNormalMap:tt,clearcoatRoughnessMap:_t,diffuseRoughness:ln,diffuseRoughnessMap:Ft,dispersion:In,retroreflection:$t,iridescence:Mn,iridescenceMap:Dt,iridescenceThicknessMap:Wt,sheen:tn,sheenColorMap:Yt,sheenRoughnessMap:Tt,specularMap:Pt,specularColorMap:Xt,specularIntensityMap:ut,transmission:rn,transmissionMap:Ct,thicknessMap:At,gradientMap:zt,opaque:J.transparent===!1&&J.blending===Es&&J.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Jt,alphaHash:Ze,combine:J.combine,mapUv:en&&V(J.map.channel),aoMapUv:Vt&&V(J.aoMap.channel),lightMapUv:xe&&V(J.lightMap.channel),bumpMapUv:fe&&V(J.bumpMap.channel),normalMapUv:je&&V(J.normalMap.channel),displacementMapUv:Ye&&V(J.displacementMap.channel),emissiveMapUv:un&&V(J.emissiveMap.channel),metalnessMapUv:dn&&V(J.metalnessMap.channel),roughnessMapUv:yn&&V(J.roughnessMap.channel),anisotropyMapUv:Dn&&V(J.anisotropyMap.channel),clearcoatMapUv:at&&V(J.clearcoatMap.channel),clearcoatNormalMapUv:tt&&V(J.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&V(J.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ft&&V(J.diffuseRoughnessMap.channel),iridescenceMapUv:Dt&&V(J.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&V(J.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&V(J.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&V(J.sheenRoughnessMap.channel),specularMapUv:Pt&&V(J.specularMap.channel),specularColorMapUv:Xt&&V(J.specularColorMap.channel),specularIntensityMapUv:ut&&V(J.specularIntensityMap.channel),transmissionMapUv:Ct&&V(J.transmissionMap.channel),thicknessMapUv:At&&V(J.thicknessMap.channel),alphaMapUv:Ht&&V(J.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(je||pt),vertexNormals:!!ht.attributes.normal,vertexColors:J.vertexColors,vertexAlphas:J.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:gt.isPoints===!0&&!!ht.attributes.uv&&(en||Ht),fog:!!Ut,useFog:J.fog===!0,fogExp2:!!Ut&&Ut.isFogExp2,flatShading:J.wireframe===!1&&(J.flatShading===!0||ht.attributes.normal===void 0&&je===!1&&(J.isMeshLambertMaterial||J.isMeshPhongMaterial||J.isMeshStandardMaterial||J.isMeshPhysicalMaterial)),sizeAttenuation:J.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:de,skinning:gt.isSkinnedMesh===!0,hasPositionAttribute:ht.attributes.position!==void 0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:_e,numSunLights:rt.sun.length,numDirLights:rt.directional.length,numPointLights:rt.point.length,numSpotLights:rt.spot.length,numSpotLightMaps:rt.spotLightMap.length,numRectAreaLights:rt.rectArea.length,numHemiLights:rt.hemi.length,numSunLightShadows:rt.sunShadowMap.length,numDirLightShadows:rt.directionalShadowMap.length,numPointLightShadows:rt.pointShadowMap.length,numSpotLightShadows:rt.spotShadowMap.length,numSpotLightShadowsWithMaps:rt.numSpotLightShadowsWithMaps,numLightProbes:rt.numLightProbes,numLightProbeGrids:bt.filter((jt)=>jt.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:J.dithering,shadowMapEnabled:t.shadowMap.enabled&&mt.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:en&&J.map.isVideoTexture===!0&&gn.getTransfer(J.map.colorSpace)===An,decodeVideoTextureEmissive:un&&J.emissiveMap.isVideoTexture===!0&&gn.getTransfer(J.emissiveMap.colorSpace)===An,premultipliedAlpha:J.premultipliedAlpha,doubleSided:J.side===T,flipSided:J.side===X,useDepthPacking:J.depthPacking>=0,depthPacking:J.depthPacking||0,index0AttributeName:J.index0AttributeName,extensionClipCullDistance:qe&&J.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&J.extensions.multiDraw===!0||hn)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:J.customProgramCacheKey()};return cn.vertexUv1s=b.has(1),cn.vertexUv2s=b.has(2),cn.vertexUv3s=b.has(3),b.clear(),cn}function st(J){let rt=[];if(J.shaderID)rt.push(J.shaderID);else rt.push(J.customVertexShaderID),rt.push(J.customFragmentShaderID);if(J.defines!==void 0)for(let mt in J.defines)rt.push(mt),rt.push(J.defines[mt]);if(J.isRawShaderMaterial===!1)H(rt,J),O(rt,J),rt.push(t.outputColorSpace);return rt.push(J.customProgramCacheKey),rt.join()}function H(J,rt){J.push(rt.precision),J.push(rt.outputColorSpace),J.push(rt.envMapMode),J.push(rt.envMapPMREM),J.push(rt.envMapMaxLod),J.push(rt.envMapSize),J.push(rt.mapUv),J.push(rt.alphaMapUv),J.push(rt.lightMapUv),J.push(rt.aoMapUv),J.push(rt.bumpMapUv),J.push(rt.normalMapUv),J.push(rt.displacementMapUv),J.push(rt.emissiveMapUv),J.push(rt.metalnessMapUv),J.push(rt.roughnessMapUv),J.push(rt.anisotropyMapUv),J.push(rt.clearcoatMapUv),J.push(rt.clearcoatNormalMapUv),J.push(rt.clearcoatRoughnessMapUv),J.push(rt.diffuseRoughnessMapUv),J.push(rt.iridescenceMapUv),J.push(rt.iridescenceThicknessMapUv),J.push(rt.sheenColorMapUv),J.push(rt.sheenRoughnessMapUv),J.push(rt.specularMapUv),J.push(rt.specularColorMapUv),J.push(rt.specularIntensityMapUv),J.push(rt.transmissionMapUv),J.push(rt.thicknessMapUv),J.push(rt.combine),J.push(rt.fogExp2),J.push(rt.sizeAttenuation),J.push(rt.morphTargetsCount),J.push(rt.numSunLights),J.push(rt.numDirLights),J.push(rt.numPointLights),J.push(rt.numSpotLights),J.push(rt.numSpotLightMaps),J.push(rt.numHemiLights),J.push(rt.numRectAreaLights),J.push(rt.numSunLightShadows),J.push(rt.numDirLightShadows),J.push(rt.numPointLightShadows),J.push(rt.numSpotLightShadows),J.push(rt.numSpotLightShadowsWithMaps),J.push(rt.numLightProbes),J.push(rt.numLightProbeGrids),J.push(rt.shadowMapType),J.push(rt.toneMapping),J.push(rt.numClippingPlanes),J.push(rt.numClipIntersection),J.push(rt.depthPacking)}function O(J,rt){if(m.disableAll(),rt.instancing)m.enable(0);if(rt.instancingColor)m.enable(1);if(rt.instancingMorph)m.enable(2);if(rt.matcap)m.enable(3);if(rt.envMap)m.enable(4);if(rt.normalMapObjectSpace)m.enable(5);if(rt.normalMapTangentSpace)m.enable(6);if(rt.clearcoat)m.enable(7);if(rt.iridescence)m.enable(8);if(rt.alphaTest)m.enable(9);if(rt.vertexColors)m.enable(10);if(rt.vertexAlphas)m.enable(11);if(rt.vertexUv1s)m.enable(12);if(rt.vertexUv2s)m.enable(13);if(rt.vertexUv3s)m.enable(14);if(rt.vertexTangents)m.enable(15);if(rt.anisotropy)m.enable(16);if(rt.alphaHash)m.enable(17);if(rt.batching)m.enable(18);if(rt.dispersion)m.enable(19);if(rt.retroreflection)m.enable(24);if(rt.diffuseRoughness)m.enable(25);if(rt.batchingColor)m.enable(20);if(rt.gradientMap)m.enable(21);if(rt.packedNormalMap)m.enable(22);if(rt.vertexNormals)m.enable(23);if(J.push(m.mask),m.disableAll(),rt.fog)m.enable(0);if(rt.useFog)m.enable(1);if(rt.flatShading)m.enable(2);if(rt.logarithmicDepthBuffer)m.enable(3);if(rt.reversedDepthBuffer)m.enable(4);if(rt.skinning)m.enable(5);if(rt.morphTargets)m.enable(6);if(rt.morphNormals)m.enable(7);if(rt.morphColors)m.enable(8);if(rt.premultipliedAlpha)m.enable(9);if(rt.shadowMapEnabled)m.enable(10);if(rt.doubleSided)m.enable(11);if(rt.flipSided)m.enable(12);if(rt.useDepthPacking)m.enable(13);if(rt.dithering)m.enable(14);if(rt.transmission)m.enable(15);if(rt.sheen)m.enable(16);if(rt.opaque)m.enable(17);if(rt.pointsUvs)m.enable(18);if(rt.decodeVideoTexture)m.enable(19);if(rt.decodeVideoTextureEmissive)m.enable(20);if(rt.alphaToCoverage)m.enable(21);if(rt.numLightProbeGrids>0)m.enable(22);if(rt.hasPositionAttribute)m.enable(23);J.push(m.mask)}function ot(J){let rt=R[J.type],mt;if(rt){let St=ui[rt];mt=Uc.clone(St.uniforms)}else mt=J.uniforms;return mt}function lt(J,rt){let mt=N.get(rt);if(mt!==void 0)++mt.usedTimes;else mt=new tg(t,rt,J,o),w.push(mt),N.set(rt,mt);return mt}function it(J){if(--J.usedTimes===0){let rt=w.indexOf(J);w[rt]=w[w.length-1],w.pop(),N.delete(J.cacheKey),J.destroy()}}function ct(J){y.remove(J)}function dt(){y.dispose()}return{getParameters:nt,getProgramCacheKey:st,getUniforms:ot,acquireProgram:lt,releaseProgram:it,releaseShaderCache:ct,programs:w,dispose:dt}}function sg(){let t=new WeakMap;function n(m){return t.has(m)}function i(m){let y=t.get(m);if(y===void 0)y={},t.set(m,y);return y}function a(m){t.delete(m)}function o(m,y,b){t.get(m)[y]=b}function c(){t=new WeakMap}return{has:n,get:i,remove:a,update:o,dispose:c}}function rg(t,n){if(t.groupOrder!==n.groupOrder)return t.groupOrder-n.groupOrder;else if(t.renderOrder!==n.renderOrder)return t.renderOrder-n.renderOrder;else if(t.material.id!==n.material.id)return t.material.id-n.material.id;else if(t.materialVariant!==n.materialVariant)return t.materialVariant-n.materialVariant;else if(t.z!==n.z)return t.z-n.z;else return t.id-n.id}function sh(t,n){if(t.groupOrder!==n.groupOrder)return t.groupOrder-n.groupOrder;else if(t.renderOrder!==n.renderOrder)return t.renderOrder-n.renderOrder;else if(t.z!==n.z)return n.z-t.z;else return t.id-n.id}function rh(){let t=[],n=0,i=[],a=[],o=[];function c(){n=0,i.length=0,a.length=0,o.length=0}function m(R){let V=0;if(R.isInstancedMesh)V+=2;if(R.isSkinnedMesh)V+=1;return V}function y(R,V,nt,st,H,O){let ot=t[n];if(ot===void 0)ot={id:R.id,object:R,geometry:V,material:nt,materialVariant:m(R),groupOrder:st,renderOrder:R.renderOrder,z:H,group:O},t[n]=ot;else ot.id=R.id,ot.object=R,ot.geometry=V,ot.material=nt,ot.materialVariant=m(R),ot.groupOrder=st,ot.renderOrder=R.renderOrder,ot.z=H,ot.group=O;return n++,ot}function b(R,V,nt,st,H,O,ot){if(ot.reversedDepth===!0)H=-H;let lt=y(R,V,nt,st,H,O);if(nt.transmission>0)a.push(lt);else if(nt.transparent===!0)o.push(lt);else i.push(lt)}function w(R,V,nt,st,H,O){let ot=y(R,V,nt,st,H,O);if(nt.transmission>0)a.unshift(ot);else if(nt.transparent===!0)o.unshift(ot);else i.unshift(ot)}function N(R,V){if(i.length>1)i.sort(R||rg);if(a.length>1)a.sort(V||sh);if(o.length>1)o.sort(V||sh)}function U(){for(let R=n,V=t.length;R<V;R++){let nt=t[R];if(nt.id===null)break;nt.id=null,nt.object=null,nt.geometry=null,nt.material=null,nt.group=null}}return{opaque:i,transmissive:a,transparent:o,init:c,push:b,unshift:w,finish:U,sort:N}}function ag(){let t=new WeakMap;function n(a,o){let c=t.get(a),m;if(c===void 0)m=new rh,t.set(a,[m]);else if(o>=c.length)m=new rh,c.push(m);else m=c[o];return m}function i(){t=new WeakMap}return{get:n,dispose:i}}function og(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let i;switch(n.type){case"SunLight":case"DirectionalLight":i={direction:new r,color:new u};break;case"SpotLight":i={position:new r,direction:new r,color:new u,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new r,color:new u,distance:0,decay:0};break;case"HemisphereLight":i={direction:new r,skyColor:new u,groundColor:new u};break;case"RectAreaLight":i={color:new u,position:new r,halfWidth:new r,halfHeight:new r};break}return t[n.id]=i,i}}}function lg(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let i;switch(n.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new s};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new s};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new s,shadowCameraNear:1,shadowCameraFar:1000};break}return t[n.id]=i,i}}}function hg(t,n){return(n.castShadow?2:0)-(t.castShadow?2:0)+(n.map?1:0)-(t.map?1:0)}function ug(t){let n=new og,i=lg(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let w=0;w<9;w++)a.probe.push(new r);let o=new r,c=new p,m=new p;function y(w){let N=0,U=0,R=0;for(let bt=0;bt<9;bt++)a.probe[bt].set(0,0,0);let V=0,nt=0,st=0,H=0,O=0,ot=0,lt=0,it=0,ct=0,dt=0,J=0,rt=0,mt=0,St=0;w.sort(hg);for(let bt=0,Ut=w.length;bt<Ut;bt++){let ht=w[bt],{color:wt,intensity:Rt,distance:vt}=ht,Gt=null;if(ht.shadow&&ht.shadow.map)if(ht.shadow.map.texture.format===ce)Gt=ht.shadow.map.texture;else Gt=ht.shadow.map.depthTexture||ht.shadow.map.texture;if(ht.isAmbientLight)N+=wt.r*Rt,U+=wt.g*Rt,R+=wt.b*Rt;else if(ht.isLightProbe){for(let Et=0;Et<9;Et++)a.probe[Et].addScaledVector(ht.sh.coefficients[Et],Rt);St++}else if(ht.isSunLight){let Et=n.get(ht);if(Et.color.copy(ht.color).multiplyScalar(ht.intensity),ht.castShadow){let Lt=ht.shadow,Ot=i.get(ht);Ot.shadowIntensity=Lt.intensity,Ot.shadowBias=Lt.bias,Ot.shadowNormalBias=Lt.normalBias,Ot.shadowRadius=Lt.radius,Ot.shadowMapSize.copy(Lt.mapSize).multiply(Lt.getFrameExtents()),a.sunShadow[nt]=Ot,a.sunShadowMap[nt]=Gt;let _e=Lt.getViewportCount();for(let It=0;It<_e;It++)a.sunShadowMatrix[st+It]=Lt.getMatrix(It),a.sunShadowCascade[st+It]=Lt._cascadeData[It];st+=_e,nt++}a.sun[V]=Et,V++}else if(ht.isDirectionalLight){let Et=n.get(ht);if(Et.color.copy(ht.color).multiplyScalar(ht.intensity),ht.castShadow){let Lt=ht.shadow,Ot=i.get(ht);Ot.shadowIntensity=Lt.intensity,Ot.shadowBias=Lt.bias,Ot.shadowNormalBias=Lt.normalBias,Ot.shadowRadius=Lt.radius,Ot.shadowMapSize=Lt.mapSize,a.directionalShadow[H]=Ot,a.directionalShadowMap[H]=Gt,a.directionalShadowMatrix[H]=ht.shadow.matrix,ct++}a.directional[H]=Et,H++}else if(ht.isSpotLight){let Et=n.get(ht);Et.position.setFromMatrixPosition(ht.matrixWorld),Et.color.copy(wt).multiplyScalar(Rt),Et.distance=vt,Et.coneCos=Math.cos(ht.angle),Et.penumbraCos=Math.cos(ht.angle*(1-ht.penumbra)),Et.decay=ht.decay,a.spot[ot]=Et;let Lt=ht.shadow;if(ht.map){if(a.spotLightMap[rt]=ht.map,rt++,Lt.updateMatrices(ht),ht.castShadow)mt++}if(a.spotLightMatrix[ot]=Lt.matrix,ht.castShadow){let Ot=i.get(ht);Ot.shadowIntensity=Lt.intensity,Ot.shadowBias=Lt.bias,Ot.shadowNormalBias=Lt.normalBias,Ot.shadowRadius=Lt.radius,Ot.shadowMapSize=Lt.mapSize,a.spotShadow[ot]=Ot,a.spotShadowMap[ot]=Gt,J++}ot++}else if(ht.isRectAreaLight){let Et=n.get(ht);Et.color.copy(wt).multiplyScalar(Rt),Et.halfWidth.set(ht.width*0.5,0,0),Et.halfHeight.set(0,ht.height*0.5,0),a.rectArea[lt]=Et,lt++}else if(ht.isPointLight){let Et=n.get(ht);if(Et.color.copy(ht.color).multiplyScalar(ht.intensity),Et.distance=ht.distance,Et.decay=ht.decay,ht.castShadow){let Lt=ht.shadow,Ot=i.get(ht);Ot.shadowIntensity=Lt.intensity,Ot.shadowBias=Lt.bias,Ot.shadowNormalBias=Lt.normalBias,Ot.shadowRadius=Lt.radius,Ot.shadowMapSize=Lt.mapSize,Ot.shadowCameraNear=Lt.camera.near,Ot.shadowCameraFar=Lt.camera.far,a.pointShadow[O]=Ot,a.pointShadowMap[O]=Gt,a.pointShadowMatrix[O]=ht.shadow.matrix,dt++}a.point[O]=Et,O++}else if(ht.isHemisphereLight){let Et=n.get(ht);Et.skyColor.copy(ht.color).multiplyScalar(Rt),Et.groundColor.copy(ht.groundColor).multiplyScalar(Rt),a.hemi[it]=Et,it++}}if(lt>0)if(t.has("OES_texture_float_linear")===!0)a.rectAreaLTC1=Kt.LTC_FLOAT_1,a.rectAreaLTC2=Kt.LTC_FLOAT_2;else a.rectAreaLTC1=Kt.LTC_HALF_1,a.rectAreaLTC2=Kt.LTC_HALF_2;a.ambient[0]=N,a.ambient[1]=U,a.ambient[2]=R;let gt=a.hash;if(gt.sunLength!==V||gt.directionalLength!==H||gt.pointLength!==O||gt.spotLength!==ot||gt.rectAreaLength!==lt||gt.hemiLength!==it||gt.numSunShadows!==nt||gt.numDirectionalShadows!==ct||gt.numPointShadows!==dt||gt.numSpotShadows!==J||gt.numSpotMaps!==rt||gt.numLightProbes!==St)a.sun.length=V,a.directional.length=H,a.spot.length=ot,a.rectArea.length=lt,a.point.length=O,a.hemi.length=it,a.sunShadow.length=nt,a.sunShadowMap.length=nt,a.sunShadowMatrix.length=st,a.sunShadowCascade.length=st,a.directionalShadow.length=ct,a.directionalShadowMap.length=ct,a.directionalShadowMatrix.length=ct,a.pointShadow.length=dt,a.pointShadowMap.length=dt,a.pointShadowMatrix.length=dt,a.spotShadow.length=J,a.spotShadowMap.length=J,a.spotLightMatrix.length=J+rt-mt,a.spotLightMap.length=rt,a.numSpotLightShadowsWithMaps=mt,a.numLightProbes=St,gt.sunLength=V,gt.directionalLength=H,gt.pointLength=O,gt.spotLength=ot,gt.rectAreaLength=lt,gt.hemiLength=it,gt.numSunShadows=nt,gt.numDirectionalShadows=ct,gt.numPointShadows=dt,gt.numSpotShadows=J,gt.numSpotMaps=rt,gt.numLightProbes=St,a.version=cg++}function b(w,N){let U=0,R=0,V=0,nt=0,st=0,H=0,O=N.matrixWorldInverse;for(let ot=0,lt=w.length;ot<lt;ot++){let it=w[ot];if(it.isSunLight){let ct=a.sun[U];ct.direction.setFromMatrixPosition(it.matrixWorld),ct.direction.transformDirection(O),U++}else if(it.isDirectionalLight){let ct=a.directional[R];ct.direction.setFromMatrixPosition(it.matrixWorld),o.setFromMatrixPosition(it.target.matrixWorld),ct.direction.sub(o),ct.direction.transformDirection(O),R++}else if(it.isSpotLight){let ct=a.spot[nt];ct.position.setFromMatrixPosition(it.matrixWorld),ct.position.applyMatrix4(O),ct.direction.setFromMatrixPosition(it.matrixWorld),o.setFromMatrixPosition(it.target.matrixWorld),ct.direction.sub(o),ct.direction.transformDirection(O),nt++}else if(it.isRectAreaLight){let ct=a.rectArea[st];ct.position.setFromMatrixPosition(it.matrixWorld),ct.position.applyMatrix4(O),m.identity(),c.copy(it.matrixWorld),c.premultiply(O),m.extractRotation(c),ct.halfWidth.set(it.width*0.5,0,0),ct.halfHeight.set(0,it.height*0.5,0),ct.halfWidth.applyMatrix4(m),ct.halfHeight.applyMatrix4(m),st++}else if(it.isPointLight){let ct=a.point[V];ct.position.setFromMatrixPosition(it.matrixWorld),ct.position.applyMatrix4(O),V++}else if(it.isHemisphereLight){let ct=a.hemi[H];ct.direction.setFromMatrixPosition(it.matrixWorld),ct.direction.transformDirection(O),H++}}}return{setup:y,setupView:b,state:a}}function ah(t){let n=new ug(t),i=[],a=[],o=[];function c(U){N.camera=U,i.length=0,a.length=0,o.length=0}function m(U){if(U.isLightProbeGrid)o.push(U);else i.push(U)}function y(U){a.push(U)}function b(){n.setup(i),o.sort((U,R)=>U.priority-R.priority||U.id-R.id)}function w(U){n.setupView(i,U)}let N={lightsArray:i,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:N,setupLights:b,setupLightsView:w,pushLight:m,pushShadow:y}}function dg(t){let n=new WeakMap;function i(o,c=0){let m=n.get(o),y;if(m===void 0)y=new ah(t),n.set(o,[y]);else if(c>=m.length)y=new ah(t),m.push(y);else y=m[c];return y}function a(){n=new WeakMap}return{get:i,dispose:a}}function _g(t,n,i){let a=new he,o=new s,c=new s,m=new _,y=new Fe,b=new Co,w={},N=i.maxTextureSize,U={[me]:X,[X]:me,[T]:T},R=new F({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new s},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),V=R.clone();V.defines.HORIZONTAL_PASS=1;let nt=new h;nt.setAttribute("position",new l(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let st=new d(nt,R),H=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q;let O=this.type;this.render=function(dt,J,rt){if(H.enabled===!1)return;if(H.autoUpdate===!1&&H.needsUpdate===!1)return;if(dt.length===0)return;if(this.type===zl)nn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Q;let mt=t.getRenderTarget(),St=t.getActiveCubeFace(),gt=t.getActiveMipmapLevel(),bt=t.state;if(bt.setBlending(Bi),bt.buffers.depth.getReversed()===!0)bt.buffers.color.setClear(0,0,0,0);else bt.buffers.color.setClear(1,1,1,1);bt.buffers.depth.setTest(!0),bt.setScissorTest(!1);let Ut=O!==this.type;if(Ut)J.traverse(function(ht){if(ht.material)if(Array.isArray(ht.material))ht.material.forEach((wt)=>wt.needsUpdate=!0);else ht.material.needsUpdate=!0});for(let ht=0,wt=dt.length;ht<wt;ht++){let Rt=dt[ht],vt=Rt.shadow;if(vt===void 0){nn("WebGLShadowMap:",Rt,"has no shadow.");continue}if(vt.autoUpdate===!1&&vt.needsUpdate===!1)continue;o.copy(vt.mapSize);let Gt=vt.getFrameExtents();if(o.multiply(Gt),c.copy(vt.mapSize),o.x>N||o.y>N){if(o.x>N)c.x=Math.floor(N/Gt.x),o.x=c.x*Gt.x,vt.mapSize.x=c.x;if(o.y>N)c.y=Math.floor(N/Gt.y),o.y=c.y*Gt.y,vt.mapSize.y=c.y}let Et=t.state.buffers.depth.getReversed();if(vt.camera._reversedDepth=Et,vt.map===null||Ut===!0){if(vt.map!==null){if(vt.map.depthTexture!==null)vt.map.depthTexture.dispose(),vt.map.depthTexture=null;vt.map.dispose()}if(this.type===pe){if(Rt.isPointLight){nn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}vt.map=new P(o.x,o.y,{format:ce,type:ci,minFilter:k,magFilter:k,generateMipmaps:!1}),vt.map.texture.name=Rt.name+".shadowMap",vt.map.depthTexture=new le(o.x,o.y,ee),vt.map.depthTexture.name=Rt.name+".shadowMapDepth",vt.map.depthTexture.format=ge,vt.map.depthTexture.compareFunction=null,vt.map.depthTexture.minFilter=S,vt.map.depthTexture.magFilter=S}else{if(Rt.isPointLight)vt.map=new Or(o.x),vt.map.depthTexture=new Er(o.x,oe);else vt.map=new P(o.x,o.y),vt.map.depthTexture=new le(o.x,o.y,oe);if(vt.map.depthTexture.name=Rt.name+".shadowMap",vt.map.depthTexture.format=ge,this.type===Q)vt.map.depthTexture.compareFunction=Et?Le:Pe,vt.map.depthTexture.minFilter=k,vt.map.depthTexture.magFilter=k;else vt.map.depthTexture.compareFunction=null,vt.map.depthTexture.minFilter=S,vt.map.depthTexture.magFilter=S}vt.camera.updateProjectionMatrix()}if(vt.map.isWebGLCubeRenderTarget!==!0&&(vt.map.width!==o.x||vt.map.height!==o.y))vt.map.setSize(o.x,o.y);let Lt=vt.map.isWebGLCubeRenderTarget?6:vt.getViewportCount();if(Rt.isPointLight!==!0)vt.updateMatrices(Rt,rt);let Ot=(vt.camera.layers.mask&4294967294)!==0?vt.camera.layers:rt.layers;for(let _e=0;_e<Lt;_e++){let It=vt.getCamera(_e);if(Rt.isPointLight){let{camera:Bt,matrix:Re}=vt,Je=Rt.distance||Bt.far;if(Je!==Bt.far)Bt.far=Je,Bt.updateProjectionMatrix();Ns.setFromMatrixPosition(Rt.matrixWorld),Bt.position.copy(Ns),Yo.copy(Bt.position),Yo.add(mg[_e]),Bt.up.copy(gg[_e]),Bt.lookAt(Yo),Bt.updateMatrixWorld(),Re.makeTranslation(-Ns.x,-Ns.y,-Ns.z),oh.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),vt._frustum.setFromProjectionMatrix(oh,Bt.coordinateSystem,Bt.reversedDepth)}if(vt.map.isWebGLCubeRenderTarget)t.setRenderTarget(vt.map,_e),t.clear();else{if(_e===0)t.setRenderTarget(vt.map),t.clear();let Bt=vt.getViewport(_e);m.set(c.x*Bt.x,c.y*Bt.y,c.x*Bt.z,c.y*Bt.w),bt.viewport(m)}a=vt.getFrustum(_e),it(J,rt,It,Rt,Ot,this.type)}if(vt.isPointLightShadow!==!0&&this.type===pe)ot(vt,rt);vt.needsUpdate=!1}O=this.type,H.needsUpdate=!1,t.setRenderTarget(mt,St,gt)};function ot(dt,J){let rt=n.update(st);if(R.defines.VSM_SAMPLES!==dt.blurSamples)R.defines.VSM_SAMPLES=dt.blurSamples,V.defines.VSM_SAMPLES=dt.blurSamples,R.needsUpdate=!0,V.needsUpdate=!0;if(dt.mapPass===null)dt.mapPass=new P(o.x,o.y,{format:ce,type:ci});else if(dt.mapPass.width!==dt.map.width||dt.mapPass.height!==dt.map.height)dt.mapPass.setSize(dt.map.width,dt.map.height);R.uniforms.shadow_pass.value=dt.map.depthTexture,R.uniforms.resolution.value.set(dt.map.width,dt.map.height),R.uniforms.radius.value=dt.radius,t.setRenderTarget(dt.mapPass),t.clear(),t.renderBufferDirect(J,null,rt,R,st,null),V.uniforms.shadow_pass.value=dt.mapPass.texture,V.uniforms.resolution.value.set(dt.map.width,dt.map.height),V.uniforms.radius.value=dt.radius,t.setRenderTarget(dt.map),t.clear(),t.renderBufferDirect(J,null,rt,V,st,null)}function lt(dt,J,rt,mt){let St=null,gt=rt.isPointLight===!0?dt.customDistanceMaterial:dt.customDepthMaterial;if(gt!==void 0)St=gt;else if(St=rt.isPointLight===!0?b:y,t.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0||J.alphaToCoverage===!0){let bt=St.uuid,Ut=J.uuid,ht=w[bt];if(ht===void 0)ht={},w[bt]=ht;let wt=ht[Ut];if(wt===void 0)wt=St.clone(),ht[Ut]=wt,J.addEventListener("dispose",ct);St=wt}if(St.visible=J.visible,St.wireframe=J.wireframe,mt===pe)St.side=J.shadowSide!==null?J.shadowSide:J.side;else St.side=J.shadowSide!==null?J.shadowSide:U[J.side];if(St.alphaMap=J.alphaMap,St.alphaTest=J.alphaToCoverage===!0?0.5:J.alphaTest,St.map=J.map,St.clipShadows=J.clipShadows,St.clippingPlanes=J.clippingPlanes,St.clipIntersection=J.clipIntersection,St.displacementMap=J.displacementMap,St.displacementScale=J.displacementScale,St.displacementBias=J.displacementBias,St.wireframeLinewidth=J.wireframeLinewidth,St.linewidth=J.linewidth,rt.isPointLight===!0&&St.isMeshDistanceMaterial===!0){let bt=t.properties.get(St);bt.light=rt}return St}function it(dt,J,rt,mt,St,gt){if(dt.visible===!1)return;if(dt.layers.test(St)&&(dt.isMesh||dt.isLine||dt.isPoints)){if((dt.castShadow||dt.receiveShadow&&gt===pe)&&(!dt.frustumCulled||dt.intersectsFrustum(a))){dt.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,dt.matrixWorld);let ht=n.update(dt),wt=dt.material;if(Array.isArray(wt)){let Rt=ht.groups;for(let vt=0,Gt=Rt.length;vt<Gt;vt++){let Et=Rt[vt],Lt=wt[Et.materialIndex];if(Lt&&Lt.visible){let Ot=lt(dt,Lt,mt,gt);dt.onBeforeShadow(t,dt,J,rt,ht,Ot,Et),t.renderBufferDirect(rt,null,ht,Ot,dt,Et),dt.onAfterShadow(t,dt,J,rt,ht,Ot,Et)}}}else if(wt.visible){let Rt=lt(dt,wt,mt,gt);dt.onBeforeShadow(t,dt,J,rt,ht,Rt,null),t.renderBufferDirect(rt,null,ht,Rt,dt,null),dt.onAfterShadow(t,dt,J,rt,ht,Rt,null)}}}let Ut=dt.children;for(let ht=0,wt=Ut.length;ht<wt;ht++)it(Ut[ht],J,rt,mt,St,gt)}function ct(dt){dt.target.removeEventListener("dispose",ct);for(let rt in w){let mt=w[rt],St=dt.target.uuid;if(St in mt)mt[St].dispose(),delete mt[St]}}}function xg(t,n){function i(){let ut=!1,Ct=new _,At=null,zt=new _(0,0,0,0);return{setMask:function(Ht){if(At!==Ht&&!ut)t.colorMask(Ht,Ht,Ht,Ht),At=Ht},setLocked:function(Ht){ut=Ht},setClear:function(Ht,Jt,Ze,qe,Qt){if(Qt===!0)Ht*=qe,Jt*=qe,Ze*=qe;if(Ct.set(Ht,Jt,Ze,qe),zt.equals(Ct)===!1)t.clearColor(Ht,Jt,Ze,qe),zt.copy(Ct)},reset:function(){ut=!1,At=null,zt.set(-1,0,0,0)}}}function a(){let ut=!1,Ct=!1,At=null,zt=null,Ht=null;return{setReversed:function(Jt){if(Ct!==Jt){let Ze=n.get("EXT_clip_control");if(Jt)Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT);else Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);Ct=Jt;let qe=Ht;Ht=null,this.setClear(qe)}},getReversed:function(){return Ct},setTest:function(Jt){if(Jt)de(t.DEPTH_TEST);else xn(t.DEPTH_TEST)},setMask:function(Jt){if(At!==Jt&&!ut)t.depthMask(Jt),At=Jt},setFunc:function(Jt){if(Ct)Jt=wc[Jt];if(zt!==Jt){switch(Jt){case ec:t.depthFunc(t.NEVER);break;case nc:t.depthFunc(t.ALWAYS);break;case Ge:t.depthFunc(t.LESS);break;case va:t.depthFunc(t.LEQUAL);break;case ic:t.depthFunc(t.EQUAL);break;case sc:t.depthFunc(t.GEQUAL);break;case rc:t.depthFunc(t.GREATER);break;case ac:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}zt=Jt}},setLocked:function(Jt){ut=Jt},setClear:function(Jt){if(Ht!==Jt){if(Ht=Jt,Ct)Jt=1-Jt;t.clearDepth(Jt)}},reset:function(){ut=!1,At=null,zt=null,Ht=null,Ct=!1}}}function o(){let ut=!1,Ct=null,At=null,zt=null,Ht=null,Jt=null,Ze=null,qe=null,Qt=null;return{setTest:function(Qe){if(!ut)if(Qe)de(t.STENCIL_TEST);else xn(t.STENCIL_TEST)},setMask:function(Qe){if(Ct!==Qe&&!ut)t.stencilMask(Qe),Ct=Qe},setFunc:function(Qe,cn,jt){if(At!==Qe||zt!==cn||Ht!==jt)t.stencilFunc(Qe,cn,jt),At=Qe,zt=cn,Ht=jt},setOp:function(Qe,cn,jt){if(Jt!==Qe||Ze!==cn||qe!==jt)t.stencilOp(Qe,cn,jt),Jt=Qe,Ze=cn,qe=jt},setLocked:function(Qe){ut=Qe},setClear:function(Qe){if(Qt!==Qe)t.clearStencil(Qe),Qt=Qe},reset:function(){ut=!1,Ct=null,At=null,zt=null,Ht=null,Jt=null,Ze=null,qe=null,Qt=null}}}let c=new i,m=new a,y=new o,b={},w=new WeakMap,N={},U={},R={},V=new WeakMap,nt=[],st=null,H=!1,O=null,ot=null,lt=null,it=null,ct=null,dt=null,J=null,rt=new u(0,0,0),mt=0,St=!1,gt=null,bt=null,Ut=null,ht=null,wt=null,Rt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),vt=!1,Gt=0,Et=t.getParameter(t.VERSION);if(Et.indexOf("WebGL")!==-1)Gt=parseFloat(/^WebGL (\d)/.exec(Et)[1]),vt=Gt>=1;else if(Et.indexOf("OpenGL ES")!==-1)Gt=parseFloat(/^OpenGL ES (\d)/.exec(Et)[1]),vt=Gt>=2;let Lt=null,Ot={},_e=t.getParameter(t.SCISSOR_BOX),It=t.getParameter(t.VIEWPORT),Bt=new _().fromArray(_e),Re=new _().fromArray(It);function Je(ut,Ct,At,zt){let Ht=new Uint8Array(4),Jt=t.createTexture();t.bindTexture(ut,Jt),t.texParameteri(ut,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(ut,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<At;Ze++)if(ut===t.TEXTURE_3D||ut===t.TEXTURE_2D_ARRAY)t.texImage3D(Ct,0,t.RGBA,1,1,zt,0,t.RGBA,t.UNSIGNED_BYTE,Ht);else t.texImage2D(Ct+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ht);return Jt}let Ke={};Ke[t.TEXTURE_2D]=Je(t.TEXTURE_2D,t.TEXTURE_2D,1),Ke[t.TEXTURE_CUBE_MAP]=Je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ke[t.TEXTURE_2D_ARRAY]=Je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ke[t.TEXTURE_3D]=Je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),c.setClear(0,0,0,1),m.setClear(1),y.setClear(0),de(t.DEPTH_TEST),m.setFunc(va),fe(!1),je(ga),de(t.CULL_FACE),Vt(Bi);function de(ut){if(N[ut]!==!0)t.enable(ut),N[ut]=!0}function xn(ut){if(N[ut]!==!1)t.disable(ut),N[ut]=!1}function hn(ut,Ct){if(R[ut]!==Ct){if(t.bindFramebuffer(ut,Ct),R[ut]=Ct,ut===t.DRAW_FRAMEBUFFER)R[t.FRAMEBUFFER]=Ct;if(ut===t.FRAMEBUFFER)R[t.DRAW_FRAMEBUFFER]=Ct;return!0}return!1}function en(ut,Ct){let At=nt,zt=!1;if(ut){if(At=V.get(Ct),At===void 0)At=[],V.set(Ct,At);let Ht=ut.textures;if(At.length!==Ht.length||At[0]!==t.COLOR_ATTACHMENT0){for(let Jt=0,Ze=Ht.length;Jt<Ze;Jt++)At[Jt]=t.COLOR_ATTACHMENT0+Jt;At.length=Ht.length,zt=!0}}else if(At[0]!==t.BACK)At[0]=t.BACK,zt=!0;if(zt)t.drawBuffers(At)}function _n(ut){if(st!==ut)return t.useProgram(ut),st=ut,!0;return!1}let Nt={[ie]:t.FUNC_ADD,[Gl]:t.FUNC_SUBTRACT,[kl]:t.FUNC_REVERSE_SUBTRACT};Nt[Hl]=t.MIN,Nt[Wl]=t.MAX;let kt={[Ce]:t.ZERO,[ke]:t.ONE,[He]:t.SRC_COLOR,[Xl]:t.SRC_ALPHA,[$l]:t.SRC_ALPHA_SATURATE,[Zl]:t.DST_COLOR,[ql]:t.DST_ALPHA,[Vl]:t.ONE_MINUS_SRC_COLOR,[Xe]:t.ONE_MINUS_SRC_ALPHA,[Jl]:t.ONE_MINUS_DST_COLOR,[Yl]:t.ONE_MINUS_DST_ALPHA,[Kl]:t.CONSTANT_COLOR,[Ql]:t.ONE_MINUS_CONSTANT_COLOR,[jl]:t.CONSTANT_ALPHA,[tc]:t.ONE_MINUS_CONSTANT_ALPHA};function Vt(ut,Ct,At,zt,Ht,Jt,Ze,qe,Qt,Qe){if(ut===Bi){if(H===!0)xn(t.BLEND),H=!1;return}if(H===!1)de(t.BLEND),H=!0;if(ut!==Te){if(ut!==O||Qe!==St){if(ot!==ie||ct!==ie)t.blendEquation(t.FUNC_ADD),ot=ie,ct=ie;if(Qe)switch(ut){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ve:t.blendFunc(t.ONE,t.ONE);break;case _a:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xa:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:sn("WebGLState: Invalid blending: ",ut);break}else switch(ut){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ve:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _a:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xa:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",ut);break}lt=null,it=null,dt=null,J=null,rt.set(0,0,0),mt=0,O=ut,St=Qe}return}if(Ht=Ht||Ct,Jt=Jt||At,Ze=Ze||zt,Ct!==ot||Ht!==ct)t.blendEquationSeparate(Nt[Ct],Nt[Ht]),ot=Ct,ct=Ht;if(At!==lt||zt!==it||Jt!==dt||Ze!==J)t.blendFuncSeparate(kt[At],kt[zt],kt[Jt],kt[Ze]),lt=At,it=zt,dt=Jt,J=Ze;if(qe.equals(rt)===!1||Qt!==mt)t.blendColor(qe.r,qe.g,qe.b,Qt),rt.copy(qe),mt=Qt;O=ut,St=!1}function xe(ut,Ct){ut.side===T?xn(t.CULL_FACE):de(t.CULL_FACE);let At=ut.side===X;if(Ct)At=!At;fe(At),ut.blending===Es&&ut.transparent===!1?Vt(Bi):Vt(ut.blending,ut.blendEquation,ut.blendSrc,ut.blendDst,ut.blendEquationAlpha,ut.blendSrcAlpha,ut.blendDstAlpha,ut.blendColor,ut.blendAlpha,ut.premultipliedAlpha),m.setFunc(ut.depthFunc),m.setTest(ut.depthTest),m.setMask(ut.depthWrite),c.setMask(ut.colorWrite);let zt=ut.stencilWrite;if(y.setTest(zt),zt)y.setMask(ut.stencilWriteMask),y.setFunc(ut.stencilFunc,ut.stencilRef,ut.stencilFuncMask),y.setOp(ut.stencilFail,ut.stencilZFail,ut.stencilZPass);un(ut.polygonOffset,ut.polygonOffsetFactor,ut.polygonOffsetUnits),ut.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):xn(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(ut){if(gt!==ut){if(ut)t.frontFace(t.CW);else t.frontFace(t.CCW);gt=ut}}function je(ut){if(ut!==Ol){if(de(t.CULL_FACE),ut!==bt)if(ut===ga)t.cullFace(t.BACK);else if(ut===Bl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else xn(t.CULL_FACE);bt=ut}function Ye(ut){if(ut!==Ut){if(vt)t.lineWidth(ut);Ut=ut}}function un(ut,Ct,At){if(ut){if(de(t.POLYGON_OFFSET_FILL),ht!==Ct||wt!==At){if(ht=Ct,wt=At,m.getReversed())Ct=-Ct,At=-At;t.polygonOffset(Ct,At)}}else xn(t.POLYGON_OFFSET_FILL)}function dn(ut){if(ut)de(t.SCISSOR_TEST);else xn(t.SCISSOR_TEST)}function yn(ut){if(ut===void 0)ut=t.TEXTURE0+Rt-1;if(Lt!==ut)t.activeTexture(ut),Lt=ut}function pt(ut,Ct,At){if(At===void 0)if(Lt===null)At=t.TEXTURE0+Rt-1;else At=Lt;let zt=Ot[At];if(zt===void 0)zt={type:void 0,texture:void 0},Ot[At]=zt;if(zt.type!==ut||zt.texture!==Ct){if(Lt!==At)t.activeTexture(At),Lt=At;t.bindTexture(ut,Ct||Ke[ut]),zt.type=ut,zt.texture=Ct}}function Nn(){let ut=Ot[Lt];if(ut!==void 0&&ut.type!==void 0)t.bindTexture(ut.type,null),ut.type=void 0,ut.texture=void 0}function ln(){try{t.compressedTexImage2D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function In(){try{t.compressedTexImage3D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function $t(){try{t.texSubImage2D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function Mn(){try{t.texSubImage3D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function tn(){try{t.compressedTexSubImage2D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function rn(){try{t.compressedTexSubImage3D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function Dn(){try{t.texStorage2D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function at(){try{t.texStorage3D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function tt(){try{t.texImage2D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function _t(){try{t.texImage3D(...arguments)}catch(ut){sn("WebGLState:",ut)}}function Ft(ut){if(U[ut]!==void 0)return U[ut];else return t.getParameter(ut)}function Dt(ut,Ct){if(U[ut]!==Ct)t.pixelStorei(ut,Ct),U[ut]=Ct}function Wt(ut){if(Bt.equals(ut)===!1)t.scissor(ut.x,ut.y,ut.z,ut.w),Bt.copy(ut)}function Yt(ut){if(Re.equals(ut)===!1)t.viewport(ut.x,ut.y,ut.z,ut.w),Re.copy(ut)}function Tt(ut,Ct){let At=w.get(Ct);if(At===void 0)At=new WeakMap,w.set(Ct,At);let zt=At.get(ut);if(zt===void 0)zt=t.getUniformBlockIndex(Ct,ut.name),t.uniformBlockBinding(Ct,zt,zt),At.set(ut,zt)}function Pt(ut,Ct,At){let Ht=w.get(Ct).get(ut);if(b[Ht]!==At)t.bindBufferBase(t.UNIFORM_BUFFER,Ht,At),b[Ht]=At}function Xt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),m.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),N={},U={},Lt=null,Ot={},R={},b={},V=new WeakMap,nt=[],st=null,H=!1,O=null,ot=null,lt=null,it=null,ct=null,dt=null,J=null,rt=new u(0,0,0),mt=0,St=!1,gt=null,bt=null,Ut=null,ht=null,wt=null,Bt.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),c.reset(),m.reset(),y.reset()}return{buffers:{color:c,depth:m,stencil:y},enable:de,disable:xn,bindFramebuffer:hn,drawBuffers:en,useProgram:_n,setBlending:Vt,setMaterial:xe,setFlipSided:fe,setCullFace:je,setLineWidth:Ye,setPolygonOffset:un,setScissorTest:dn,activeTexture:yn,bindTexture:pt,unbindTexture:Nn,compressedTexImage2D:ln,compressedTexImage3D:In,texImage2D:tt,texImage3D:_t,pixelStorei:Dt,getParameter:Ft,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:Dn,texStorage3D:at,texSubImage2D:$t,texSubImage3D:Mn,compressedTexSubImage2D:tn,compressedTexSubImage3D:rn,scissor:Wt,viewport:Yt,reset:Xt}}function vg(t,n,i,a,o,c,m){let y=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new s,N=new WeakMap,U=new Set,R,V=new WeakMap,nt=new Set,st=new FinalizationRegistry((at)=>nt.delete(at)),H=!1;try{H=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(at){}function O(at,tt){return H?new OffscreenCanvas(at,tt):Ss("canvas")}function ot(at,tt,_t){let Ft=1,Dt=Dn(at);if(Dt.width>_t||Dt.height>_t)Ft=_t/Math.max(Dt.width,Dt.height);if(Ft<1)if(typeof HTMLImageElement<"u"&&at instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&at instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&at instanceof ImageBitmap||typeof VideoFrame<"u"&&at instanceof VideoFrame){let Wt=Math.floor(Ft*Dt.width),Yt=Math.floor(Ft*Dt.height);if(R===void 0)R=O(Wt,Yt);let Tt=tt?O(Wt,Yt):R;return Tt.width=Wt,Tt.height=Yt,Tt.getContext("2d").drawImage(at,0,0,Wt,Yt),nn("WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+Wt+"x"+Yt+")."),Tt}else{if("data"in at)nn("WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+").");return at}return at}function lt(at){return at.generateMipmaps}function it(at){t.generateMipmap(at)}function ct(at){if(at.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(at.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(at.isWebGLArrayRenderTarget||at.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function dt(at,tt,_t,Ft,Dt,Wt=!1){if(at!==null){if(t[at]!==void 0)return t[at];nn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+at+"'")}let Yt;if(Ft){if(Yt=n.get("EXT_texture_norm16"),!Yt)nn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Tt=tt;if(tt===t.RED){if(_t===t.FLOAT)Tt=t.R32F;if(_t===t.HALF_FLOAT)Tt=t.R16F;if(_t===t.UNSIGNED_BYTE)Tt=t.R8;if(_t===t.UNSIGNED_SHORT&&Yt)Tt=Yt.R16_EXT;if(_t===t.SHORT&&Yt)Tt=Yt.R16_SNORM_EXT}if(tt===t.RED_INTEGER){if(_t===t.UNSIGNED_BYTE)Tt=t.R8UI;if(_t===t.UNSIGNED_SHORT)Tt=t.R16UI;if(_t===t.UNSIGNED_INT)Tt=t.R32UI;if(_t===t.BYTE)Tt=t.R8I;if(_t===t.SHORT)Tt=t.R16I;if(_t===t.INT)Tt=t.R32I}if(tt===t.RG){if(_t===t.FLOAT)Tt=t.RG32F;if(_t===t.HALF_FLOAT)Tt=t.RG16F;if(_t===t.UNSIGNED_BYTE)Tt=t.RG8;if(_t===t.UNSIGNED_SHORT&&Yt)Tt=Yt.RG16_EXT;if(_t===t.SHORT&&Yt)Tt=Yt.RG16_SNORM_EXT}if(tt===t.RG_INTEGER){if(_t===t.UNSIGNED_BYTE)Tt=t.RG8UI;if(_t===t.UNSIGNED_SHORT)Tt=t.RG16UI;if(_t===t.UNSIGNED_INT)Tt=t.RG32UI;if(_t===t.BYTE)Tt=t.RG8I;if(_t===t.SHORT)Tt=t.RG16I;if(_t===t.INT)Tt=t.RG32I}if(tt===t.RGB_INTEGER){if(_t===t.UNSIGNED_BYTE)Tt=t.RGB8UI;if(_t===t.UNSIGNED_SHORT)Tt=t.RGB16UI;if(_t===t.UNSIGNED_INT)Tt=t.RGB32UI;if(_t===t.BYTE)Tt=t.RGB8I;if(_t===t.SHORT)Tt=t.RGB16I;if(_t===t.INT)Tt=t.RGB32I}if(tt===t.RGBA_INTEGER){if(_t===t.UNSIGNED_BYTE)Tt=t.RGBA8UI;if(_t===t.UNSIGNED_SHORT)Tt=t.RGBA16UI;if(_t===t.UNSIGNED_INT)Tt=t.RGBA32UI;if(_t===t.BYTE)Tt=t.RGBA8I;if(_t===t.SHORT)Tt=t.RGBA16I;if(_t===t.INT)Tt=t.RGBA32I}if(tt===t.RGB){if(_t===t.UNSIGNED_SHORT&&Yt)Tt=Yt.RGB16_EXT;if(_t===t.SHORT&&Yt)Tt=Yt.RGB16_SNORM_EXT;if(_t===t.UNSIGNED_INT_5_9_9_9_REV)Tt=t.RGB9_E5;if(_t===t.UNSIGNED_INT_10F_11F_11F_REV)Tt=t.R11F_G11F_B10F}if(tt===t.RGBA){let Pt=Wt?ho:gn.getTransfer(Dt);if(_t===t.FLOAT)Tt=t.RGBA32F;if(_t===t.HALF_FLOAT)Tt=t.RGBA16F;if(_t===t.UNSIGNED_BYTE)Tt=Pt===An?t.SRGB8_ALPHA8:t.RGBA8;if(_t===t.UNSIGNED_SHORT&&Yt)Tt=Yt.RGBA16_EXT;if(_t===t.SHORT&&Yt)Tt=Yt.RGBA16_SNORM_EXT;if(_t===t.UNSIGNED_SHORT_4_4_4_4)Tt=t.RGBA4;if(_t===t.UNSIGNED_SHORT_5_5_5_1)Tt=t.RGB5_A1}if(Tt===t.R16F||Tt===t.R32F||Tt===t.RG16F||Tt===t.RG32F||Tt===t.RGBA16F||Tt===t.RGBA32F)n.get("EXT_color_buffer_float");return Tt}function J(at,tt){let _t;if(at){if(tt===null||tt===oe||tt===zi)_t=t.DEPTH24_STENCIL8;else if(tt===ee)_t=t.DEPTH32F_STENCIL8;else if(tt===Rs)_t=t.DEPTH24_STENCIL8,nn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(tt===null||tt===oe||tt===zi)_t=t.DEPTH_COMPONENT24;else if(tt===ee)_t=t.DEPTH_COMPONENT32F;else if(tt===Rs)_t=t.DEPTH_COMPONENT16;return _t}function rt(at,tt){if(lt(at)===!0||at.isFramebufferTexture&&at.minFilter!==S&&at.minFilter!==k)return Math.log2(Math.max(tt.width,tt.height))+1;else if(at.mipmaps.length>0)return at.mipmaps.length;else if(at.isCompressedTexture&&Array.isArray(at.image))return tt.mipmaps.length;else return 1}function mt(at){let tt=new WeakRef(at);a.get(at).__ref=tt,nt.add(tt),st.register(at,tt,tt)}function St(at){let tt=a.get(at).__ref;if(tt===void 0)return;nt.delete(tt),st.unregister(tt)}function gt(at){Ut(at.target)}function bt(at){ht(at.target)}function Ut(at){if(at.removeEventListener("dispose",gt),St(at),Rt(at),at.isVideoTexture)N.delete(at);if(at.isHTMLTexture)U.delete(at)}function ht(at){at.removeEventListener("dispose",bt),St(at),Gt(at)}function wt(){for(let at of nt){let tt=at.deref();if(tt===void 0)continue;if(tt.isRenderTarget===!0)ht(tt);else Ut(tt)}nt.clear(),U.clear()}function Rt(at){let tt=a.get(at);if(tt.__webglInit===void 0)return;let _t=at.source,Ft=V.get(_t);if(Ft){let Dt=Ft[tt.__cacheKey];if(Dt.usedTimes--,Dt.usedTimes===0)vt(at);if(Object.keys(Ft).length===0)V.delete(_t)}a.remove(at)}function vt(at){let tt=a.get(at);t.deleteTexture(tt.__webglTexture);let _t=at.source,Ft=V.get(_t);delete Ft[tt.__cacheKey],m.memory.textures--}function Gt(at){let tt=a.get(at);if(tt.__depthDisposeCallback)tt.__depthDisposeCallback();let _t=at.depthTexture;if(_t&&_t.renderTarget===at)Ut(_t);if(at.isWebGLCubeRenderTarget)for(let Dt=0;Dt<6;Dt++){if(Array.isArray(tt.__webglFramebuffer[Dt]))for(let Wt=0;Wt<tt.__webglFramebuffer[Dt].length;Wt++)t.deleteFramebuffer(tt.__webglFramebuffer[Dt][Wt]);else t.deleteFramebuffer(tt.__webglFramebuffer[Dt]);if(tt.__webglDepthbuffer)t.deleteRenderbuffer(tt.__webglDepthbuffer[Dt])}else{if(Array.isArray(tt.__webglFramebuffer))for(let Dt=0;Dt<tt.__webglFramebuffer.length;Dt++)t.deleteFramebuffer(tt.__webglFramebuffer[Dt]);else t.deleteFramebuffer(tt.__webglFramebuffer);if(tt.__webglDepthbuffer)t.deleteRenderbuffer(tt.__webglDepthbuffer);if(tt.__webglMultisampledFramebuffer)t.deleteFramebuffer(tt.__webglMultisampledFramebuffer);if(tt.__webglColorRenderbuffer){for(let Dt=0;Dt<tt.__webglColorRenderbuffer.length;Dt++)if(tt.__webglColorRenderbuffer[Dt])t.deleteRenderbuffer(tt.__webglColorRenderbuffer[Dt])}if(tt.__webglDepthRenderbuffer)t.deleteRenderbuffer(tt.__webglDepthRenderbuffer)}let Ft=at.textures;for(let Dt=0,Wt=Ft.length;Dt<Wt;Dt++){let Yt=a.get(Ft[Dt]);if(Yt.__webglTexture)t.deleteTexture(Yt.__webglTexture),m.memory.textures--;a.remove(Ft[Dt])}a.remove(at)}let Et=0;function Lt(){Et=0}function Ot(){return Et}function _e(at){Et=at}function It(){let at=Et;if(at>=o.maxTextures)nn("WebGLTextures: Trying to use "+(at+1)+" texture units while this GPU supports only "+o.maxTextures);return Et+=1,at}function Bt(at){let tt=[];return tt.push(at.wrapS),tt.push(at.wrapT),tt.push(at.wrapR||0),tt.push(at.magFilter),tt.push(at.minFilter),tt.push(at.anisotropy),tt.push(at.internalFormat),tt.push(at.format),tt.push(at.type),tt.push(at.generateMipmaps),tt.push(at.mipmapsAutoUpdate),tt.push(at.premultiplyAlpha),tt.push(at.flipY),tt.push(at.unpackAlignment),tt.push(at.colorSpace),tt.join()}function Re(at,tt){let _t=a.get(at);if(at.isVideoTexture)tn(at);if(at.isRenderTargetTexture===!1&&at.isExternalTexture!==!0&&at.version>0&&_t.__version!==at.version){let Ft=at.image;if(Ft===null)nn("WebGLRenderer: Texture marked for update but no image data found.");else if(Ft.complete===!1)nn("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(_t,at,tt);return}}else if(at.isExternalTexture)_t.__webglTexture=at.sourceTexture?at.sourceTexture:null;i.bindTexture(t.TEXTURE_2D,_t.__webglTexture,t.TEXTURE0+tt)}function Je(at,tt){let _t=a.get(at);if(at.isRenderTargetTexture===!1&&at.version>0&&_t.__version!==at.version){xe(_t,at,tt);return}else if(at.isExternalTexture)_t.__webglTexture=at.sourceTexture?at.sourceTexture:null;i.bindTexture(t.TEXTURE_2D_ARRAY,_t.__webglTexture,t.TEXTURE0+tt)}function Ke(at,tt){let _t=a.get(at);if(at.isRenderTargetTexture===!1&&at.version>0&&_t.__version!==at.version){xe(_t,at,tt);return}i.bindTexture(t.TEXTURE_3D,_t.__webglTexture,t.TEXTURE0+tt)}function de(at,tt){let _t=a.get(at);if(at.version>0&&_t.__version!==at.version){fe(_t,at,tt);return}i.bindTexture(t.TEXTURE_CUBE_MAP,_t.__webglTexture,t.TEXTURE0+tt)}let xn={[Se]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[hc]:t.MIRRORED_REPEAT},hn={[S]:t.NEAREST,[uc]:t.NEAREST_MIPMAP_NEAREST,[ws]:t.NEAREST_MIPMAP_LINEAR,[k]:t.LINEAR,[dr]:t.LINEAR_MIPMAP_NEAREST,[Ri]:t.LINEAR_MIPMAP_LINEAR},en={[vc]:t.NEVER,[uo]:t.ALWAYS,[yc]:t.LESS,[Pe]:t.LEQUAL,[Sc]:t.EQUAL,[Le]:t.GEQUAL,[Mc]:t.GREATER,[bc]:t.NOTEQUAL};function _n(at,tt){if(tt.type===ee&&n.has("OES_texture_float_linear")===!1&&(tt.magFilter===k||tt.magFilter===dr||tt.magFilter===ws||tt.magFilter===Ri||tt.minFilter===k||tt.minFilter===dr||tt.minFilter===ws||tt.minFilter===Ri))nn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(at,t.TEXTURE_WRAP_S,xn[tt.wrapS]),t.texParameteri(at,t.TEXTURE_WRAP_T,xn[tt.wrapT]),at===t.TEXTURE_3D||at===t.TEXTURE_2D_ARRAY)t.texParameteri(at,t.TEXTURE_WRAP_R,xn[tt.wrapR]);if(t.texParameteri(at,t.TEXTURE_MAG_FILTER,hn[tt.magFilter]),t.texParameteri(at,t.TEXTURE_MIN_FILTER,hn[tt.minFilter]),tt.compareFunction)t.texParameteri(at,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(at,t.TEXTURE_COMPARE_FUNC,en[tt.compareFunction]);if(n.has("EXT_texture_filter_anisotropic")===!0){if(tt.magFilter===S)return;if(tt.minFilter!==ws&&tt.minFilter!==Ri)return;if(tt.type===ee&&n.has("OES_texture_float_linear")===!1)return;if(tt.anisotropy>1||a.get(tt).__currentAnisotropy){let _t=n.get("EXT_texture_filter_anisotropic");t.texParameterf(at,_t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(tt.anisotropy,o.getMaxAnisotropy())),a.get(tt).__currentAnisotropy=tt.anisotropy}}}function Nt(at,tt){let _t=!1;if(at.__webglInit===void 0)at.__webglInit=!0,tt.addEventListener("dispose",gt),mt(tt);let Ft=tt.source,Dt=V.get(Ft);if(Dt===void 0)Dt={},V.set(Ft,Dt);let Wt=Bt(tt);if(Wt!==at.__cacheKey){if(Dt[Wt]===void 0)Dt[Wt]={texture:t.createTexture(),usedTimes:0},m.memory.textures++,_t=!0;Dt[Wt].usedTimes++;let Yt=Dt[at.__cacheKey];if(Yt!==void 0){if(Dt[at.__cacheKey].usedTimes--,Yt.usedTimes===0)vt(tt)}at.__cacheKey=Wt,at.__webglTexture=Dt[Wt].texture}return _t}function kt(at,tt,_t){return Math.floor(Math.floor(at/_t)/tt)}function Vt(at,tt,_t,Ft){let Wt=at.updateRanges;if(Wt.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,tt.width,tt.height,_t,Ft,tt.data);else{Wt.sort((ut,Ct)=>ut.start-Ct.start);let Yt=0;for(let ut=1;ut<Wt.length;ut++){let Ct=Wt[Yt],At=Wt[ut],zt=Ct.start+Ct.count,Ht=kt(At.start,tt.width,4),Jt=kt(Ct.start,tt.width,4);if(At.start<=zt+1&&Ht===Jt&&kt(At.start+At.count-1,tt.width,4)===Ht)Ct.count=Math.max(Ct.count,At.start+At.count-Ct.start);else++Yt,Wt[Yt]=At}Wt.length=Yt+1;let Tt=i.getParameter(t.UNPACK_ROW_LENGTH),Pt=i.getParameter(t.UNPACK_SKIP_PIXELS),Xt=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,tt.width);for(let ut=0,Ct=Wt.length;ut<Ct;ut++){let At=Wt[ut],zt=Math.floor(At.start/4),Ht=Math.ceil(At.count/4),Jt=zt%tt.width,Ze=Math.floor(zt/tt.width),qe=Ht,Qt=1;i.pixelStorei(t.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(t.UNPACK_SKIP_ROWS,Ze),i.texSubImage2D(t.TEXTURE_2D,0,Jt,Ze,qe,1,_t,Ft,tt.data)}at.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,Tt),i.pixelStorei(t.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(t.UNPACK_SKIP_ROWS,Xt)}}function xe(at,tt,_t){let Ft=t.TEXTURE_2D;if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)Ft=t.TEXTURE_2D_ARRAY;if(tt.isData3DTexture)Ft=t.TEXTURE_3D;let Dt=Nt(at,tt),Wt=tt.source;i.bindTexture(Ft,at.__webglTexture,t.TEXTURE0+_t);let Yt=a.get(Wt);if(Wt.version!==Yt.__version||Dt===!0){if(i.activeTexture(t.TEXTURE0+_t),(typeof ImageBitmap<"u"&&tt.image instanceof ImageBitmap)===!1){let Qt=gn.getPrimaries(gn.workingColorSpace),Qe=tt.colorSpace===L?null:gn.getPrimaries(tt.colorSpace),cn=tt.colorSpace===L||Qt===Qe?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,tt.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,cn)}i.pixelStorei(t.UNPACK_ALIGNMENT,tt.unpackAlignment);let Pt=ot(tt.image,!1,o.maxTextureSize);Pt=rn(tt,Pt);let Xt=c.convert(tt.format,tt.colorSpace),ut=c.convert(tt.type),Ct=dt(tt.internalFormat,Xt,ut,tt.normalized,tt.colorSpace,tt.isVideoTexture);_n(Ft,tt);let At,zt=tt.mipmaps,Ht=tt.isVideoTexture!==!0,Jt=Yt.__version===void 0||Dt===!0,Ze=Wt.dataReady,qe=rt(tt,Pt);if(tt.isDepthTexture){if(Ct=J(tt.format===Ci,tt.type),Jt)if(Ht)i.texStorage2D(t.TEXTURE_2D,1,Ct,Pt.width,Pt.height);else i.texImage2D(t.TEXTURE_2D,0,Ct,Pt.width,Pt.height,0,Xt,ut,null)}else if(tt.isDataTexture)if(zt.length>0){if(Ht&&Jt)i.texStorage2D(t.TEXTURE_2D,qe,Ct,zt[0].width,zt[0].height);for(let Qt=0,Qe=zt.length;Qt<Qe;Qt++)if(At=zt[Qt],Ht){if(Ze)i.texSubImage2D(t.TEXTURE_2D,Qt,0,0,At.width,At.height,Xt,ut,At.data)}else i.texImage2D(t.TEXTURE_2D,Qt,Ct,At.width,At.height,0,Xt,ut,At.data);tt.generateMipmaps=!1}else if(Ht){if(Jt)i.texStorage2D(t.TEXTURE_2D,qe,Ct,Pt.width,Pt.height);if(Ze)Vt(tt,Pt,Xt,ut)}else i.texImage2D(t.TEXTURE_2D,0,Ct,Pt.width,Pt.height,0,Xt,ut,Pt.data);else if(tt.isCompressedTexture)if(tt.isCompressedArrayTexture){if(Ht&&Jt)i.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Ct,zt[0].width,zt[0].height,Pt.depth);for(let Qt=0,Qe=zt.length;Qt<Qe;Qt++)if(At=zt[Qt],tt.format!==M)if(Xt!==null)if(Ht){if(Ze)if(tt.layerUpdates.size>0){let cn=Vo(At.width,At.height,tt.format,tt.type);for(let jt of tt.layerUpdates){let Tn=At.data.subarray(jt*cn/At.data.BYTES_PER_ELEMENT,(jt+1)*cn/At.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Qt,0,0,jt,At.width,At.height,1,Xt,Tn)}}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Qt,0,0,0,At.width,At.height,Pt.depth,Xt,At.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Qt,Ct,At.width,At.height,Pt.depth,0,At.data,0,0);else nn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(Ze)i.texSubImage3D(t.TEXTURE_2D_ARRAY,Qt,0,0,0,At.width,At.height,Pt.depth,Xt,ut,At.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,Qt,Ct,At.width,At.height,Pt.depth,0,Xt,ut,At.data);if(tt.layerUpdates.size>0)tt.clearLayerUpdates()}else{if(Ht&&Jt)i.texStorage2D(t.TEXTURE_2D,qe,Ct,zt[0].width,zt[0].height);for(let Qt=0,Qe=zt.length;Qt<Qe;Qt++)if(At=zt[Qt],tt.format!==M)if(Xt!==null)if(Ht){if(Ze)i.compressedTexSubImage2D(t.TEXTURE_2D,Qt,0,0,At.width,At.height,Xt,At.data)}else i.compressedTexImage2D(t.TEXTURE_2D,Qt,Ct,At.width,At.height,0,At.data);else nn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(Ze)i.texSubImage2D(t.TEXTURE_2D,Qt,0,0,At.width,At.height,Xt,ut,At.data)}else i.texImage2D(t.TEXTURE_2D,Qt,Ct,At.width,At.height,0,Xt,ut,At.data)}else if(tt.isDataArrayTexture)if(Ht){if(Jt)i.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Ct,Pt.width,Pt.height,Pt.depth);if(Ze)if(tt.layerUpdates.size>0){let Qt=Vo(Pt.width,Pt.height,tt.format,tt.type);for(let Qe of tt.layerUpdates){let cn=Pt.data.subarray(Qe*Qt/Pt.data.BYTES_PER_ELEMENT,(Qe+1)*Qt/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Qe,Pt.width,Pt.height,1,Xt,ut,cn)}tt.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,Xt,ut,Pt.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ct,Pt.width,Pt.height,Pt.depth,0,Xt,ut,Pt.data);else if(tt.isData3DTexture)if(Ht){if(Jt)i.texStorage3D(t.TEXTURE_3D,qe,Ct,Pt.width,Pt.height,Pt.depth);if(Ze)i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,Xt,ut,Pt.data)}else i.texImage3D(t.TEXTURE_3D,0,Ct,Pt.width,Pt.height,Pt.depth,0,Xt,ut,Pt.data);else if(tt.isFramebufferTexture){if(Jt)if(Ht)i.texStorage2D(t.TEXTURE_2D,qe,Ct,Pt.width,Pt.height);else{let Qt=Pt.width,Qe=Pt.height;for(let cn=0;cn<qe;cn++)i.texImage2D(t.TEXTURE_2D,cn,Ct,Qt,Qe,0,Xt,ut,null),Qt>>=1,Qe>>=1}}else if(tt.isHTMLTexture){if("texElementImage2D"in t){let Qt=t.canvas;if(!Qt.hasAttribute("layoutsubtree"))Qt.setAttribute("layoutsubtree","true");if(Pt.parentNode!==Qt){Qt.appendChild(Pt),U.add(tt),Qt.onpaint=(Qe)=>{let cn=Qe.changedElements;for(let jt of U)if(cn.includes(jt.image))jt.needsUpdate=!0},Qt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Pt);else{let{RGBA:cn,RGBA:jt,UNSIGNED_BYTE:Tn}=t;t.texElementImage2D(t.TEXTURE_2D,0,cn,jt,Tn,Pt)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Ht&&Jt){let Qt=Dn(zt[0]);i.texStorage2D(t.TEXTURE_2D,qe,Ct,Qt.width,Qt.height)}for(let Qt=0,Qe=zt.length;Qt<Qe;Qt++)if(At=zt[Qt],Ht){if(Ze)i.texSubImage2D(t.TEXTURE_2D,Qt,0,0,Xt,ut,At)}else i.texImage2D(t.TEXTURE_2D,Qt,Ct,Xt,ut,At);tt.generateMipmaps=!1}else if(Ht){if(Jt){let Qt=Dn(Pt);i.texStorage2D(t.TEXTURE_2D,qe,Ct,Qt.width,Qt.height)}if(Ze)i.texSubImage2D(t.TEXTURE_2D,0,0,0,Xt,ut,Pt)}else i.texImage2D(t.TEXTURE_2D,0,Ct,Xt,ut,Pt);if(lt(tt)&&tt.mipmapsAutoUpdate===!0)it(Ft);if(Yt.__version=Wt.version,tt.onUpdate)tt.onUpdate(tt)}at.__version=tt.version}function fe(at,tt,_t){if(tt.image.length!==6)return;let Ft=Nt(at,tt),Dt=tt.source;i.bindTexture(t.TEXTURE_CUBE_MAP,at.__webglTexture,t.TEXTURE0+_t);let Wt=a.get(Dt);if(Dt.version!==Wt.__version||Ft===!0){i.activeTexture(t.TEXTURE0+_t);let Yt=gn.getPrimaries(gn.workingColorSpace),Tt=tt.colorSpace===L?null:gn.getPrimaries(tt.colorSpace),Pt=tt.colorSpace===L||Yt===Tt?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,tt.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,tt.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Xt=tt.isCompressedTexture||tt.image[0].isCompressedTexture,ut=tt.image[0]&&tt.image[0].isDataTexture,Ct=[];for(let jt=0;jt<6;jt++){if(!Xt&&!ut)Ct[jt]=ot(tt.image[jt],!0,o.maxCubemapSize);else Ct[jt]=ut?tt.image[jt].image:tt.image[jt];Ct[jt]=rn(tt,Ct[jt])}let At=Ct[0],zt=c.convert(tt.format,tt.colorSpace),Ht=c.convert(tt.type),Jt=dt(tt.internalFormat,zt,Ht,tt.normalized,tt.colorSpace),Ze=tt.isVideoTexture!==!0,qe=Wt.__version===void 0||Ft===!0,Qt=Dt.dataReady,Qe=rt(tt,At);_n(t.TEXTURE_CUBE_MAP,tt);let cn;if(tt.isDepthTexture){if(Jt=J(tt.format===Ci,tt.type),qe)if(Ze)i.texStorage2D(t.TEXTURE_CUBE_MAP,1,Jt,At.width,At.height);else for(let jt=0;jt<6;jt++)i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,0,Jt,At.width,At.height,0,zt,Ht,null)}else if(Xt){if(Ze&&qe)i.texStorage2D(t.TEXTURE_CUBE_MAP,Qe,Jt,At.width,At.height);for(let jt=0;jt<6;jt++){cn=Ct[jt].mipmaps;for(let Tn=0;Tn<cn.length;Tn++){let On=cn[Tn];if(tt.format!==M)if(zt!==null)if(Ze){if(Qt)i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn,0,0,On.width,On.height,zt,On.data)}else i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn,Jt,On.width,On.height,0,On.data);else nn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ze){if(Qt)i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn,0,0,On.width,On.height,zt,Ht,On.data)}else i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn,Jt,On.width,On.height,0,zt,Ht,On.data)}}}else{if(cn=tt.mipmaps,Ze&&qe){if(cn.length>0)Qe++;let jt=Dn(Ct[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,Qe,Jt,jt.width,jt.height)}for(let jt=0;jt<6;jt++)if(ut){if(Ze){if(Qt)i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,0,0,0,Ct[jt].width,Ct[jt].height,zt,Ht,Ct[jt].data)}else i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,0,Jt,Ct[jt].width,Ct[jt].height,0,zt,Ht,Ct[jt].data);for(let Tn=0;Tn<cn.length;Tn++){let di=cn[Tn].image[jt].image;if(Ze){if(Qt)i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn+1,0,0,di.width,di.height,zt,Ht,di.data)}else i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn+1,Jt,di.width,di.height,0,zt,Ht,di.data)}}else{if(Ze){if(Qt)i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,0,0,0,zt,Ht,Ct[jt])}else i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,0,Jt,zt,Ht,Ct[jt]);for(let Tn=0;Tn<cn.length;Tn++){let On=cn[Tn];if(Ze){if(Qt)i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn+1,0,0,zt,Ht,On.image[jt])}else i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+jt,Tn+1,Jt,zt,Ht,On.image[jt])}}}if(lt(tt)&&tt.mipmapsAutoUpdate===!0)it(t.TEXTURE_CUBE_MAP);if(Wt.__version=Dt.version,tt.onUpdate)tt.onUpdate(tt)}at.__version=tt.version}function je(at,tt,_t,Ft,Dt,Wt){let Yt=c.convert(_t.format,_t.colorSpace),Tt=c.convert(_t.type),Pt=dt(_t.internalFormat,Yt,Tt,_t.normalized,_t.colorSpace),Xt=a.get(tt),ut=a.get(_t);if(ut.__renderTarget=tt,!Xt.__hasExternalTextures){let Ct=Math.max(1,tt.width>>Wt),At=Math.max(1,tt.height>>Wt);if(Dt===t.TEXTURE_3D||Dt===t.TEXTURE_2D_ARRAY)i.texImage3D(Dt,Wt,Pt,Ct,At,tt.depth,0,Yt,Tt,null);else i.texImage2D(Dt,Wt,Pt,Ct,At,0,Yt,Tt,null)}if(i.bindFramebuffer(t.FRAMEBUFFER,at),Mn(tt))y.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ft,Dt,ut.__webglTexture,0,$t(tt));else if(Dt===t.TEXTURE_2D||Dt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,Ft,Dt,ut.__webglTexture,Wt);i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(at,tt,_t){if(t.bindRenderbuffer(t.RENDERBUFFER,at),tt.depthBuffer){let Ft=tt.depthTexture,Dt=Ft&&Ft.isDepthTexture?Ft.type:null,Wt=J(tt.stencilBuffer,Dt),Yt=tt.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(Mn(tt))y.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$t(tt),Wt,tt.width,tt.height);else if(_t)t.renderbufferStorageMultisample(t.RENDERBUFFER,$t(tt),Wt,tt.width,tt.height);else t.renderbufferStorage(t.RENDERBUFFER,Wt,tt.width,tt.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,Yt,t.RENDERBUFFER,at)}else{let Ft=tt.textures;for(let Dt=0;Dt<Ft.length;Dt++){let Wt=Ft[Dt],Yt=c.convert(Wt.format,Wt.colorSpace),Tt=c.convert(Wt.type),Pt=dt(Wt.internalFormat,Yt,Tt,Wt.normalized,Wt.colorSpace);if(Mn(tt))y.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$t(tt),Pt,tt.width,tt.height);else if(_t)t.renderbufferStorageMultisample(t.RENDERBUFFER,$t(tt),Pt,tt.width,tt.height);else t.renderbufferStorage(t.RENDERBUFFER,Pt,tt.width,tt.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function un(at,tt,_t){let Ft=tt.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,at),!(tt.depthTexture&&tt.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Dt=a.get(tt.depthTexture);Dt.__renderTarget=tt;let Wt=Ft?tt.depthTexture.image[0]:tt.depthTexture.image;if(!Dt.__webglTexture||Wt.width!==tt.width||Wt.height!==tt.height)Wt.width=tt.width,Wt.height=tt.height,tt.depthTexture.needsUpdate=!0;if(Ft)de(tt.depthTexture,0);else Re(tt.depthTexture,0);let Yt=Dt.__webglTexture,Tt=$t(tt),Pt=Ft?t.TEXTURE_CUBE_MAP_POSITIVE_X+_t:t.TEXTURE_2D,Xt=tt.depthTexture.format===Ci?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(tt.depthTexture.format===ge)if(Mn(tt))y.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Xt,Pt,Yt,0,Tt);else t.framebufferTexture2D(t.FRAMEBUFFER,Xt,Pt,Yt,0);else if(tt.depthTexture.format===Ci)if(Mn(tt))y.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Xt,Pt,Yt,0,Tt);else t.framebufferTexture2D(t.FRAMEBUFFER,Xt,Pt,Yt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dn(at){let tt=a.get(at),_t=at.isWebGLCubeRenderTarget===!0;if(tt.__boundDepthTexture!==at.depthTexture){let Ft=at.depthTexture;if(tt.__depthDisposeCallback)tt.__depthDisposeCallback();if(Ft){let Dt=()=>{delete tt.__boundDepthTexture,delete tt.__depthDisposeCallback,Ft.removeEventListener("dispose",Dt)};Ft.addEventListener("dispose",Dt),tt.__depthDisposeCallback=Dt}tt.__boundDepthTexture=Ft}if(at.depthTexture&&!tt.__autoAllocateDepthBuffer)if(_t)for(let Ft=0;Ft<6;Ft++)un(tt.__webglFramebuffer[Ft],at,Ft);else if(at.texture.mipmaps.length>0)un(tt.__webglFramebuffer[0],at,0);else un(tt.__webglFramebuffer,at,0);else if(_t){tt.__webglDepthbuffer=[];for(let Ft=0;Ft<6;Ft++)if(i.bindFramebuffer(t.FRAMEBUFFER,tt.__webglFramebuffer[Ft]),tt.__webglDepthbuffer[Ft]===void 0)tt.__webglDepthbuffer[Ft]=t.createRenderbuffer(),Ye(tt.__webglDepthbuffer[Ft],at,!1);else{let Dt=at.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Wt=tt.__webglDepthbuffer[Ft];t.bindRenderbuffer(t.RENDERBUFFER,Wt),t.framebufferRenderbuffer(t.FRAMEBUFFER,Dt,t.RENDERBUFFER,Wt)}}else{if(at.texture.mipmaps.length>0)i.bindFramebuffer(t.FRAMEBUFFER,tt.__webglFramebuffer[0]);else i.bindFramebuffer(t.FRAMEBUFFER,tt.__webglFramebuffer);if(tt.__webglDepthbuffer===void 0)tt.__webglDepthbuffer=t.createRenderbuffer(),Ye(tt.__webglDepthbuffer,at,!1);else{let Dt=at.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Wt=tt.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Wt),t.framebufferRenderbuffer(t.FRAMEBUFFER,Dt,t.RENDERBUFFER,Wt)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function yn(at,tt,_t){let Ft=a.get(at);if(tt!==void 0)je(Ft.__webglFramebuffer,at,at.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(_t!==void 0)dn(at)}function pt(at){let tt=at.texture,_t=a.get(at),Ft=a.get(tt);at.addEventListener("dispose",bt),mt(at);let Dt=at.textures,Wt=at.isWebGLCubeRenderTarget===!0,Yt=Dt.length>1;if(!Yt){if(Ft.__webglTexture===void 0)Ft.__webglTexture=t.createTexture();Ft.__version=tt.version,m.memory.textures++}if(Wt){_t.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(tt.mipmaps.length>0){_t.__webglFramebuffer[Tt]=[];for(let Pt=0;Pt<tt.mipmaps.length;Pt++)_t.__webglFramebuffer[Tt][Pt]=t.createFramebuffer()}else _t.__webglFramebuffer[Tt]=t.createFramebuffer()}else{if(tt.mipmaps.length>0){_t.__webglFramebuffer=[];for(let Tt=0;Tt<tt.mipmaps.length;Tt++)_t.__webglFramebuffer[Tt]=t.createFramebuffer()}else _t.__webglFramebuffer=t.createFramebuffer();if(Yt)for(let Tt=0,Pt=Dt.length;Tt<Pt;Tt++){let Xt=a.get(Dt[Tt]);if(Xt.__webglTexture===void 0)Xt.__webglTexture=t.createTexture(),m.memory.textures++}if(at.samples>0&&Mn(at)===!1){_t.__webglMultisampledFramebuffer=t.createFramebuffer(),_t.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,_t.__webglMultisampledFramebuffer);for(let Tt=0;Tt<Dt.length;Tt++){let Pt=Dt[Tt];_t.__webglColorRenderbuffer[Tt]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt]);let Xt=c.convert(Pt.format,Pt.colorSpace),ut=c.convert(Pt.type),Ct=dt(Pt.internalFormat,Xt,ut,Pt.normalized,Pt.colorSpace,at.isXRRenderTarget===!0),At=$t(at);t.renderbufferStorageMultisample(t.RENDERBUFFER,At,Ct,at.width,at.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Tt,t.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),at.depthBuffer)_t.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(_t.__webglDepthRenderbuffer,at,!0);i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Wt){i.bindTexture(t.TEXTURE_CUBE_MAP,Ft.__webglTexture),_n(t.TEXTURE_CUBE_MAP,tt);for(let Tt=0;Tt<6;Tt++)if(tt.mipmaps.length>0)for(let Pt=0;Pt<tt.mipmaps.length;Pt++)je(_t.__webglFramebuffer[Tt][Pt],at,tt,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Pt);else je(_t.__webglFramebuffer[Tt],at,tt,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);if(lt(tt))it(t.TEXTURE_CUBE_MAP);else if(tt.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,tt.mipmaps.length-1);i.unbindTexture()}else if(Yt){for(let Tt=0,Pt=Dt.length;Tt<Pt;Tt++){let Xt=Dt[Tt],ut=a.get(Xt),Ct=t.TEXTURE_2D;if(at.isWebGL3DRenderTarget||at.isWebGLArrayRenderTarget)Ct=at.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(i.bindTexture(Ct,ut.__webglTexture),_n(Ct,Xt),je(_t.__webglFramebuffer,at,Xt,t.COLOR_ATTACHMENT0+Tt,Ct,0),lt(Xt))it(Ct)}i.unbindTexture()}else{let Tt=t.TEXTURE_2D;if(at.isWebGL3DRenderTarget||at.isWebGLArrayRenderTarget)Tt=at.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(i.bindTexture(Tt,Ft.__webglTexture),_n(Tt,tt),tt.mipmaps.length>0)for(let Pt=0;Pt<tt.mipmaps.length;Pt++)je(_t.__webglFramebuffer[Pt],at,tt,t.COLOR_ATTACHMENT0,Tt,Pt);else je(_t.__webglFramebuffer,at,tt,t.COLOR_ATTACHMENT0,Tt,0);if(lt(tt))it(Tt);else if(tt.mipmaps.length>0)t.texParameteri(Tt,t.TEXTURE_MAX_LEVEL,tt.mipmaps.length-1);i.unbindTexture()}if(at.depthBuffer)dn(at)}function Nn(at){let tt=at.textures;for(let _t=0,Ft=tt.length;_t<Ft;_t++){let Dt=tt[_t];if(lt(Dt)&&Dt.mipmapsAutoUpdate===!0){let Wt=ct(at),Yt=a.get(Dt).__webglTexture;i.bindTexture(Wt,Yt),it(Wt),i.unbindTexture()}}}let ln=[];function In(at){if(at.samples>0){if(Mn(at)===!1){let{textures:tt,width:_t,height:Ft}=at,Dt=t.COLOR_BUFFER_BIT,Wt=at.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Yt=a.get(at),Tt=tt.length>1;if(Tt)for(let Xt=0;Xt<tt.length;Xt++)i.bindFramebuffer(t.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xt,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,Yt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xt,t.TEXTURE_2D,null,0);if(i.bindFramebuffer(t.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),at.texture.mipmaps.length>0)i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]);else i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Xt=0;Xt<tt.length;Xt++){if(at.resolveDepthBuffer){if(at.depthBuffer)Dt|=t.DEPTH_BUFFER_BIT;if(at.stencilBuffer&&at.resolveStencilBuffer)Dt|=t.STENCIL_BUFFER_BIT}if(Tt){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Yt.__webglColorRenderbuffer[Xt]);let ut=a.get(tt[Xt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ut,0)}if(t.blitFramebuffer(0,0,_t,Ft,0,0,_t,Ft,Dt,t.NEAREST),b===!0){if(ln.length=0,ln.push(t.COLOR_ATTACHMENT0+Xt),at.depthBuffer&&at.storeMultisampledDepthBuffer===!1)ln.push(Wt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ln)}}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Tt)for(let Xt=0;Xt<tt.length;Xt++){i.bindFramebuffer(t.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xt,t.RENDERBUFFER,Yt.__webglColorRenderbuffer[Xt]);let ut=a.get(tt[Xt]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,Yt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Xt,t.TEXTURE_2D,ut,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(at.depthBuffer&&at.storeMultisampledDepthBuffer===!1&&b){let tt=at.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[tt])}}}function $t(at){return Math.min(o.maxSamples,at.samples)}function Mn(at){let tt=a.get(at);return at.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&tt.__useRenderToTexture!==!1}function tn(at){let tt=m.render.frame;if(N.get(at)!==tt)N.set(at,tt),at.update()}function rn(at,tt){let{colorSpace:_t,format:Ft,type:Dt}=at;if(at.isCompressedTexture===!0||at.isVideoTexture===!0)return tt;if(_t!==ae&&_t!==L)if(gn.getTransfer(_t)===An){if(Ft!==M||Dt!==x)nn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else sn("WebGLTextures: Unsupported texture color space:",_t);return tt}function Dn(at){if(typeof HTMLImageElement<"u"&&at instanceof HTMLImageElement)w.width=at.naturalWidth||at.width,w.height=at.naturalHeight||at.height;else if(typeof VideoFrame<"u"&&at instanceof VideoFrame)w.width=at.displayWidth,w.height=at.displayHeight;else w.width=at.width,w.height=at.height;return w}this.allocateTextureUnit=It,this.resetTextureUnits=Lt,this.getTextureUnits=Ot,this.setTextureUnits=_e,this.setTexture2D=Re,this.setTexture2DArray=Je,this.setTexture3D=Ke,this.setTextureCube=de,this.rebindTextures=yn,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Nn,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Mn,this.dispose=wt}function yg(t,n){function i(a,o=L){let c,m=gn.getTransfer(o);if(a===x)return t.UNSIGNED_BYTE;if(a===Ra)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Ca)return t.UNSIGNED_SHORT_5_5_5_1;if(a===pc)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===mc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===dc)return t.BYTE;if(a===fc)return t.SHORT;if(a===Rs)return t.UNSIGNED_SHORT;if(a===wa)return t.INT;if(a===oe)return t.UNSIGNED_INT;if(a===ee)return t.FLOAT;if(a===ci)return t.HALF_FLOAT;if(a===gc)return t.ALPHA;if(a===_c)return t.RGB;if(a===M)return t.RGBA;if(a===ge)return t.DEPTH_COMPONENT;if(a===Ci)return t.DEPTH_STENCIL;if(a===We)return t.RED;if(a===Ia)return t.RED_INTEGER;if(a===ce)return t.RG;if(a===Pa)return t.RG_INTEGER;if(a===La)return t.RGBA_INTEGER;if(a===fr||a===pr||a===mr||a===gr)if(m===An)if(c=n.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===fr)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=n.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===fr)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pr)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mr)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gr)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Na||a===Da||a===Ua||a===Fa)if(c=n.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Na)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Da)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ua)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fa)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Oa||a===Ba||a===za||a===Ga||a===ka||a===_r||a===Ha)if(c=n.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Oa||a===Ba)return m===An?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===za)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ga)return c.COMPRESSED_R11_EAC;if(a===ka)return c.COMPRESSED_SIGNED_R11_EAC;if(a===_r)return c.COMPRESSED_RG11_EAC;if(a===Ha)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Wa||a===Va||a===Xa||a===qa||a===Ya||a===Za||a===Ja||a===$a||a===Ka||a===Qa||a===ja||a===to||a===eo||a===no)if(c=n.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Wa)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Va)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xa)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qa)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ya)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Za)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ja)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$a)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ka)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qa)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ja)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===to)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===eo)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===no)return m===An?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===io||a===so||a===ro)if(c=n.get("EXT_texture_compression_bptc"),c!==null){if(a===io)return m===An?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===so)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ro)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ao||a===oo||a===xr||a===lo)if(c=n.get("EXT_texture_compression_rgtc"),c!==null){if(a===ao)return c.COMPRESSED_RED_RGTC1_EXT;if(a===oo)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===xr)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lo)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(a===zi)return t.UNSIGNED_INT_24_8;return t[a]!==void 0?t[a]:null}return{convert:i}}class bh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Ar(t.texture);if(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=i}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new F({vertexShader:Sg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new d(new Y(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}function Tg(t,n){function i(H,O){if(H.matrixAutoUpdate===!0)H.updateMatrix();O.value.copy(H.matrix)}function a(H,O){if(O.color.getRGB(H.fogColor.value,wo(t)),O.isFog)H.fogNear.value=O.near,H.fogFar.value=O.far;else if(O.isFogExp2)H.fogDensity.value=O.density}function o(H,O,ot,lt,it){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)c(H,O);else if(O.isMeshLambertMaterial){if(c(H,O),O.envMap)H.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)c(H,O),U(H,O);else if(O.isMeshPhongMaterial){if(c(H,O),N(H,O),O.envMap)H.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(c(H,O),R(H,O),O.isMeshPhysicalMaterial)V(H,O,it)}else if(O.isMeshMatcapMaterial)c(H,O),nt(H,O);else if(O.isMeshDepthMaterial)c(H,O);else if(O.isMeshDistanceMaterial)c(H,O),st(H,O);else if(O.isMeshNormalMaterial)c(H,O);else if(O.isLineBasicMaterial){if(m(H,O),O.isLineDashedMaterial)y(H,O)}else if(O.isPointsMaterial)b(H,O,ot,lt);else if(O.isSpriteMaterial)w(H,O);else if(O.isShadowMaterial)H.color.value.copy(O.color),H.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function c(H,O){if(H.opacity.value=O.opacity,O.color)H.diffuse.value.copy(O.color);if(O.emissive)H.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)H.map.value=O.map,i(O.map,H.mapTransform);if(O.alphaMap)H.alphaMap.value=O.alphaMap,i(O.alphaMap,H.alphaMapTransform);if(O.bumpMap){if(H.bumpMap.value=O.bumpMap,i(O.bumpMap,H.bumpMapTransform),H.bumpScale.value=O.bumpScale,O.side===X)H.bumpScale.value*=-1}if(O.normalMap){if(H.normalMap.value=O.normalMap,i(O.normalMap,H.normalMapTransform),H.normalScale.value.copy(O.normalScale),O.side===X)H.normalScale.value.negate()}if(O.displacementMap)H.displacementMap.value=O.displacementMap,i(O.displacementMap,H.displacementMapTransform),H.displacementScale.value=O.displacementScale,H.displacementBias.value=O.displacementBias;if(O.emissiveMap)H.emissiveMap.value=O.emissiveMap,i(O.emissiveMap,H.emissiveMapTransform);if(O.specularMap)H.specularMap.value=O.specularMap,i(O.specularMap,H.specularMapTransform);if(O.alphaTest>0)H.alphaTest.value=O.alphaTest;let ot=n.get(O),{envMap:lt,envMapRotation:it}=ot;if(lt){if(H.envMap.value=lt,H.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(it)).transpose(),lt.isCubeTexture&&lt.isRenderTargetTexture===!1)H.envMapRotation.value.premultiply(Eh);H.reflectivity.value=O.reflectivity,H.ior.value=O.ior,H.refractionRatio.value=O.refractionRatio}if(O.lightMap)H.lightMap.value=O.lightMap,H.lightMapIntensity.value=O.lightMapIntensity,i(O.lightMap,H.lightMapTransform);if(O.aoMap)H.aoMap.value=O.aoMap,H.aoMapIntensity.value=O.aoMapIntensity,i(O.aoMap,H.aoMapTransform)}function m(H,O){if(H.diffuse.value.copy(O.color),H.opacity.value=O.opacity,O.map)H.map.value=O.map,i(O.map,H.mapTransform)}function y(H,O){H.dashSize.value=O.dashSize,H.totalSize.value=O.dashSize+O.gapSize,H.scale.value=O.scale}function b(H,O,ot,lt){if(H.diffuse.value.copy(O.color),H.opacity.value=O.opacity,H.size.value=O.size*ot,H.scale.value=lt*0.5,O.map)H.map.value=O.map,i(O.map,H.uvTransform);if(O.alphaMap)H.alphaMap.value=O.alphaMap,i(O.alphaMap,H.alphaMapTransform);if(O.alphaTest>0)H.alphaTest.value=O.alphaTest}function w(H,O){if(H.diffuse.value.copy(O.color),H.opacity.value=O.opacity,H.rotation.value=O.rotation,O.map)H.map.value=O.map,i(O.map,H.mapTransform);if(O.alphaMap)H.alphaMap.value=O.alphaMap,i(O.alphaMap,H.alphaMapTransform);if(O.alphaTest>0)H.alphaTest.value=O.alphaTest}function N(H,O){H.specular.value.copy(O.specular),H.shininess.value=Math.max(O.shininess,0.0001)}function U(H,O){if(O.gradientMap)H.gradientMap.value=O.gradientMap}function R(H,O){if(H.metalness.value=O.metalness,O.metalnessMap)H.metalnessMap.value=O.metalnessMap,i(O.metalnessMap,H.metalnessMapTransform);if(H.roughness.value=O.roughness,O.roughnessMap)H.roughnessMap.value=O.roughnessMap,i(O.roughnessMap,H.roughnessMapTransform);if(O.envMap)H.envMapIntensity.value=O.envMapIntensity}function V(H,O,ot){if(H.ior.value=O.ior,O.diffuseRoughness>0){if(H.diffuseRoughness.value=O.diffuseRoughness,O.diffuseRoughnessMap)H.diffuseRoughnessMap.value=O.diffuseRoughnessMap,i(O.diffuseRoughnessMap,H.diffuseRoughnessMapTransform)}if(O.sheen>0){if(H.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),H.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)H.sheenColorMap.value=O.sheenColorMap,i(O.sheenColorMap,H.sheenColorMapTransform);if(O.sheenRoughnessMap)H.sheenRoughnessMap.value=O.sheenRoughnessMap,i(O.sheenRoughnessMap,H.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(H.clearcoat.value=O.clearcoat,H.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)H.clearcoatMap.value=O.clearcoatMap,i(O.clearcoatMap,H.clearcoatMapTransform);if(O.clearcoatRoughnessMap)H.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,i(O.clearcoatRoughnessMap,H.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(H.clearcoatNormalMap.value=O.clearcoatNormalMap,i(O.clearcoatNormalMap,H.clearcoatNormalMapTransform),H.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===X)H.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)H.dispersion.value=O.dispersion;if(O.retroreflectivity>0)H.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(H.iridescence.value=O.iridescence,H.iridescenceIOR.value=O.iridescenceIOR,H.iridescenceThicknessMinimum.value=O.iridescenceThicknessMinimum,H.iridescenceThicknessMaximum.value=O.iridescenceThicknessMaximum,O.iridescenceMap)H.iridescenceMap.value=O.iridescenceMap,i(O.iridescenceMap,H.iridescenceMapTransform);if(O.iridescenceThicknessMap)H.iridescenceThicknessMap.value=O.iridescenceThicknessMap,i(O.iridescenceThicknessMap,H.iridescenceThicknessMapTransform)}if(O.transmission>0){if(H.transmission.value=O.transmission,H.transmissionSamplerMap.value=ot.texture,H.transmissionSamplerSize.value.set(ot.width,ot.height),O.transmissionMap)H.transmissionMap.value=O.transmissionMap,i(O.transmissionMap,H.transmissionMapTransform);if(H.thickness.value=O.thickness,O.thicknessMap)H.thicknessMap.value=O.thicknessMap,i(O.thicknessMap,H.thicknessMapTransform);H.attenuationDistance.value=O.attenuationDistance,H.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(H.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)H.anisotropyMap.value=O.anisotropyMap,i(O.anisotropyMap,H.anisotropyMapTransform)}if(H.specularIntensity.value=O.specularIntensity,H.specularColor.value.copy(O.specularColor),O.specularColorMap)H.specularColorMap.value=O.specularColorMap,i(O.specularColorMap,H.specularColorMapTransform);if(O.specularIntensityMap)H.specularIntensityMap.value=O.specularIntensityMap,i(O.specularIntensityMap,H.specularIntensityMapTransform)}function nt(H,O){if(O.matcap)H.matcap.value=O.matcap}function st(H,O){let ot=n.get(O).light;H.referencePosition.value.setFromMatrixPosition(ot.matrixWorld),H.nearDistance.value=ot.shadow.camera.near,H.farDistance.value=ot.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Eg(t,n,i,a){let o={},c={};function m(ot,lt){let it=lt.program;a.uniformBlockBinding(ot,it,o[ot.id])}function y(ot,lt){let it=o[ot.id];if(it===void 0)nt(ot),it=b(ot),o[ot.id]=it,ot.addEventListener("dispose",H);let ct=lt.program;a.updateUBOMapping(ot,ct);let dt=n.render.frame;if(c[ot.id]!==dt)w(ot),c[ot.id]=dt}function b(ot){let lt=t.createBuffer(),{__size:it,usage:ct}=ot;return t.bindBuffer(t.UNIFORM_BUFFER,lt),t.bufferData(t.UNIFORM_BUFFER,it,ct),t.bindBuffer(t.UNIFORM_BUFFER,null),lt}function w(ot){let lt=o[ot.id],{uniforms:it,__cache:ct}=ot;t.bindBuffer(t.UNIFORM_BUFFER,lt);for(let dt=0,J=it.length;dt<J;dt++){let rt=it[dt];if(Array.isArray(rt))for(let mt=0,St=rt.length;mt<St;mt++)N(rt[mt],dt,mt,ct);else N(rt,dt,0,ct)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function N(ot,lt,it,ct){if(R(ot,lt,it,ct)===!0){let{__offset:dt,value:J}=ot;if(Array.isArray(J)){let rt=0;for(let mt=0;mt<J.length;mt++){let St=J[mt],gt=st(St,!0);U(St,ot.__data,rt),rt+=gt.storage/Float32Array.BYTES_PER_ELEMENT}}else U(J,ot.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,dt,ot.__data)}}function U(ot,lt,it){if(typeof ot==="number"||typeof ot==="boolean")lt[it]=ot;else if(ot.isMatrix3)lt[it]=ot.elements[0],lt[it+1]=ot.elements[1],lt[it+2]=ot.elements[2],lt[it+3]=0,lt[it+4]=ot.elements[3],lt[it+5]=ot.elements[4],lt[it+6]=ot.elements[5],lt[it+7]=0,lt[it+8]=ot.elements[6],lt[it+9]=ot.elements[7],lt[it+10]=ot.elements[8],lt[it+11]=0;else if(ArrayBuffer.isView(ot))lt.set(ot.subarray(0,lt.length-it),it);else ot.toArray(lt,it)}function R(ot,lt,it,ct){let dt=ot.value,J=lt+"_"+it;if(Array.isArray(dt)){if(ct[J]===void 0)ct[J]=[];let rt=ct[J],mt=!1;for(let St=0;St<dt.length;St++)if(V(dt[St],rt,St)===!0)mt=!0;return mt}return V(dt,ct,J)}function V(ot,lt,it){if(lt[it]===void 0){if(typeof ot==="number"||typeof ot==="boolean")lt[it]=ot;else if(ArrayBuffer.isView(ot))lt[it]=ot.slice();else lt[it]=ot.clone();return!0}else{let ct=lt[it];if(typeof ot==="number"||typeof ot==="boolean"){if(ct!==ot)return lt[it]=ot,!0}else if(ArrayBuffer.isView(ot))return!0;else if(ct.equals(ot)===!1)return ct.copy(ot),!0}return!1}function nt(ot){let lt=ot.uniforms,it=0,ct=16;for(let J=0,rt=lt.length;J<rt;J++){let mt=Array.isArray(lt[J])?lt[J]:[lt[J]];for(let St=0,gt=mt.length;St<gt;St++){let bt=mt[St],Ut=Array.isArray(bt.value)?bt.value:[bt.value],ht=Array.isArray(lt[J])||Array.isArray(bt.value),wt=it;for(let vt=0,Gt=Ut.length;vt<Gt;vt++){let Et=Ut[vt],Lt=st(Et,ht),Ot=it%ct,_e=Ot%Lt.boundary,It=Ot+_e;if(it+=_e,It!==0&&ct-It<Lt.storage)it+=ct-It;if(vt===0)wt=it;it+=Lt.storage}let Rt=bt.type==="int"?Int32Array:bt.type==="uint"?Uint32Array:Float32Array;bt.__data=new Rt((it-wt)/Float32Array.BYTES_PER_ELEMENT),bt.__offset=wt}}let dt=it%ct;if(dt>0)it+=ct-dt;return ot.__size=it,ot.__cache={},this}function st(ot,lt){let it={boundary:0,storage:0};if(typeof ot==="number"||typeof ot==="boolean")it.boundary=4,it.storage=4;else if(ot.isVector2)it.boundary=8,it.storage=8;else if(ot.isVector3||ot.isColor)it.boundary=16,it.storage=12;else if(ot.isVector4)it.boundary=16,it.storage=16;else if(ot.isMatrix3)it.boundary=16,it.storage=48;else if(ot.isMatrix4)it.boundary=16,it.storage=64;else if(ot.isTexture)nn("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(ot))it.boundary=16,it.storage=ot.byteLength;else nn("WebGLRenderer: Unsupported uniform value type.",ot);if(lt===!0)it.boundary=16,it.storage=Math.ceil(it.storage/16)*16;return it}function H(ot){let lt=ot.target;lt.removeEventListener("dispose",H),t.deleteBuffer(o[lt.id]),delete o[lt.id],delete c[lt.id]}function O(){for(let ot in o)t.deleteBuffer(o[ot]);o={},c={}}return{bind:m,update:y,dispose:O}}function wg(){if(hi===null)hi=new I(Ag,16,16,ce,ci),hi.name="DFG_LUT",hi.minFilter=k,hi.magFilter=k,hi.wrapS=ur,hi.wrapT=ur,hi.generateMipmaps=!1,hi.needsUpdate=!0;return hi}class Ae{constructor(t={}){let{canvas:n=Tc(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:m=!1,premultipliedAlpha:y=!0,preserveDrawingBuffer:b=!1,powerPreference:w="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:U=!1,outputBufferType:R=x}=t;this.isWebGLRenderer=!0;let V;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");V=i.getContextAttributes().alpha}else V=c;let nt=R,st=new Set([La,Pa,Ia]),H=new Set([x,oe,Rs,zi,Ra,Ca]),O=new Uint32Array(4),ot=new Int32Array(4),lt={textures:[],min:[],max:[],resolution:[]},it=null,ct=null,dt=[],J=[],rt=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let mt=this,St=!1,gt=null,bt=null,Ut=null,ht=null;this._outputColorSpace=Ue;let wt=0,Rt=0,vt=null,Gt=-1,Et=null,Lt=new _,Ot=new _,_e=null,It=new u(0),Bt=0,{width:Re,height:Je}=n,Ke=1,de=null,xn=null,hn=new _(0,0,Re,Je),en=new _(0,0,Re,Je),_n=!1,Nt=new he,kt=new br,Vt=!1,xe=!1,fe=new p,je=new r,Ye=new _,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dn=!1;function yn(){return vt===null?Ke:1}let pt=i;function Nn(et,ft){return n.getContext(et,ft)}let ln,In,$t,Mn,tn,rn,Dn,at,tt,_t,Ft,Dt,Wt,Yt,Tt,Pt,Xt,ut,Ct,At,zt,Ht,Jt;try{let et={alpha:!0,depth:a,stencil:o,antialias:m,premultipliedAlpha:y,preserveDrawingBuffer:b,powerPreference:w,failIfMajorPerformanceCaveat:N};if("setAttribute"in n)n.setAttribute("data-engine",`three.js r${Fl}`);if(n.addEventListener("webglcontextlost",Qt,!1),n.addEventListener("webglcontextrestored",Qe,!1),n.addEventListener("webglcontextcreationerror",cn,!1),pt===null){if(pt=Nn("webgl2",et),pt===null)if(Nn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(et){throw n.removeEventListener("webglcontextlost",Qt,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",cn,!1),sn("WebGLRenderer: "+et.message),et}function Ze(){if(ln=new Bp(pt),ln.init(),zt=new yg(pt,ln),In=new wp(pt,ln,t,zt),$t=new xg(pt,ln),In.reversedDepthBuffer&&U)$t.buffers.depth.setReversed(!0);bt=pt.createFramebuffer(),Ut=pt.createFramebuffer(),ht=pt.createFramebuffer(),Mn=new kp(pt),tn=new sg,rn=new vg(pt,ln,$t,tn,In,zt,Mn),Dn=new Op(mt),at=new Hu(pt),Ht=new Ep(pt,at),tt=new zp(pt,at,Mn,Ht),_t=new Wp(pt,tt,at,Ht,Mn),ut=new Hp(pt,In,rn),Tt=new Rp(tn),Ft=new ig(mt,Dn,ln,In,Ht,Tt),Dt=new Tg(mt,tn),Wt=new ag,Yt=new dg(ln),Xt=new Tp(mt,Dn,$t,_t,V,y),Pt=new _g(mt,_t,In),Jt=new Eg(pt,Mn,In,$t),Ct=new Ap(pt,ln,Mn),At=new Gp(pt,ln,Mn),Mn.programs=Ft.programs,mt.capabilities=In,mt.extensions=ln,mt.properties=tn,mt.renderLists=Wt,mt.shadowMap=Pt,mt.state=$t,mt.info=Mn}if(nt!==x)rt=new Xp(nt,n.width,n.height,m,a,o);let qe=new Th(mt,pt);this.xr=qe,this.getContext=function(){return pt},this.getContextAttributes=function(){return pt.getContextAttributes()},this.forceContextLoss=function(){let et=ln.get("WEBGL_lose_context");if(et)et.loseContext()},this.forceContextRestore=function(){let et=ln.get("WEBGL_lose_context");if(et)et.restoreContext()},this.getPixelRatio=function(){return Ke},this.setPixelRatio=function(et){if(et===void 0)return;Ke=et,this.setSize(Re,Je,!1)},this.getSize=function(et){return et.set(Re,Je)},this.setSize=function(et,ft,Mt=!0){if(qe.isPresenting){nn("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Re=et,Je=ft,n.width=Math.floor(et*Ke),n.height=Math.floor(ft*Ke),Mt===!0)n.style.width=et+"px",n.style.height=ft+"px";if(rt!==null)rt.setSize(n.width,n.height);this.setViewport(0,0,et,ft)},this.getDrawingBufferSize=function(et){return et.set(Re*Ke,Je*Ke).floor()},this.setDrawingBufferSize=function(et,ft,Mt){Re=et,Je=ft,Ke=Mt,n.width=Math.floor(et*Mt),n.height=Math.floor(ft*Mt),this.setViewport(0,0,et,ft)},this.setEffects=function(et){if(nt===x){sn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(et){for(let ft=0;ft<et.length;ft++)if(et[ft].isOutputPass===!0){nn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}rt.setEffects(et||[])},this.getCurrentViewport=function(et){return et.copy(Lt)},this.getViewport=function(et){return et.copy(hn)},this.setViewport=function(et,ft,Mt,xt){if(et.isVector4)hn.set(et.x,et.y,et.z,et.w);else hn.set(et,ft,Mt,xt);$t.viewport(Lt.copy(hn).multiplyScalar(yn()).round())},this.getScissor=function(et){return et.copy(en)},this.setScissor=function(et,ft,Mt,xt){if(et.isVector4)en.set(et.x,et.y,et.z,et.w);else en.set(et,ft,Mt,xt);$t.scissor(Ot.copy(en).multiplyScalar(yn()).round())},this.getScissorTest=function(){return _n},this.setScissorTest=function(et){$t.setScissorTest(_n=et)},this.setOpaqueSort=function(et){de=et},this.setTransparentSort=function(et){xn=et},this.getClearColor=function(et){return et.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(et=!0,ft=!0,Mt=!0){let xt=0;if(et){let yt=!1;if(vt!==null){let Zt=vt.texture.format;yt=st.has(Zt)}if(yt){let Zt=vt.texture.type,Ie=H.has(Zt),qt=Xt.getClearColor(),ue=Xt.getClearAlpha(),{r:Ve,g:on,b:pn}=qt;if(Ie)O[0]=Ve,O[1]=on,O[2]=pn,O[3]=ue,pt.clearBufferuiv(pt.COLOR,0,O);else ot[0]=Ve,ot[1]=on,ot[2]=pn,ot[3]=ue,pt.clearBufferiv(pt.COLOR,0,ot)}else xt|=pt.COLOR_BUFFER_BIT}if(ft)xt|=pt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Mt)xt|=pt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(xt!==0)pt.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(et){et.setRenderer(this),gt=et},this.dispose=function(){n.removeEventListener("webglcontextlost",Qt,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",cn,!1),Xt.dispose(),Wt.dispose(),Yt.dispose(),rn.dispose(),tn.dispose(),Dn.dispose(),_t.dispose(),tt.dispose(),Ht.dispose(),Jt.dispose(),Ft.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Jo),qe.removeEventListener("sessionend",$o),Ii.stop()};function Qt(et){et.preventDefault(),mo("WebGLRenderer: Context Lost."),St=!0}function Qe(){mo("WebGLRenderer: Context Restored."),St=!1;let et=Mn.autoReset,ft=Pt.enabled,Mt=Pt.autoUpdate,xt=Pt.needsUpdate,yt=Pt.type;Ze(),Mn.autoReset=et,Pt.enabled=ft,Pt.autoUpdate=Mt,Pt.needsUpdate=xt,Pt.type=yt}function cn(et){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",et.statusMessage)}function jt(et){let ft=et.target;ft.removeEventListener("dispose",jt),Tn(ft)}function Tn(et){On(et),tn.remove(et)}function On(et){let ft=tn.get(et).programs;if(ft!==void 0){if(ft.forEach(function(Mt){Ft.releaseProgram(Mt)}),et.isShaderMaterial)Ft.releaseShaderCache(et)}}this.renderBufferDirect=function(et,ft,Mt,xt,yt,Zt){if(ft===null)ft=un;let Ie=yt.isMesh&&yt.matrixWorld.determinantAffine()<0,qt=Rh(et,ft,Mt,xt,yt);$t.setMaterial(xt,Ie);let ue=Mt.index,Ve=1;if(xt.wireframe===!0){if(ue=tt.getWireframeAttribute(Mt),ue===void 0)return;Ve=2}let on=Mt.drawRange,pn=Mt.attributes.position,Ne=on.start*Ve,mn=(on.start+on.count)*Ve;if(Zt!==null)Ne=Math.max(Ne,Zt.start*Ve),mn=Math.min(mn,(Zt.start+Zt.count)*Ve);if(ue!==null)Ne=Math.max(Ne,0),mn=Math.min(mn,ue.count);else if(pn!==void 0&&pn!==null)Ne=Math.max(Ne,0),mn=Math.min(mn,pn.count);let Pn=mn-Ne;if(Pn<0||Pn===1/0)return;Ht.setup(yt,xt,qt,Mt,ue);let wn,En=Ct;if(ue!==null)wn=at.get(ue),En=At,En.setIndex(wn);if(yt.isMesh)if(xt.wireframe===!0)$t.setLineWidth(xt.wireframeLinewidth*yn()),En.setMode(pt.LINES);else En.setMode(pt.TRIANGLES);else if(yt.isLine){let Hn=xt.linewidth;if(Hn===void 0)Hn=1;if($t.setLineWidth(Hn*yn()),yt.isLineSegments)En.setMode(pt.LINES);else if(yt.isLineLoop)En.setMode(pt.LINE_LOOP);else En.setMode(pt.LINE_STRIP)}else if(yt.isPoints)En.setMode(pt.POINTS);else if(yt.isSprite)En.setMode(pt.TRIANGLES);if(yt.isBatchedMesh)if(!ln.get("WEBGL_multi_draw")){let{_multiDrawStarts:Hn,_multiDrawCounts:Be,_multiDrawCount:Zn}=yt,Sn=ue?at.get(ue).bytesPerElement:1,Pi=tn.get(xt).currentProgram.getUniforms();for(let Wn=0;Wn<Zn;Wn++)Pi.setValue(pt,"_gl_DrawID",Wn),En.render(Hn[Wn]/Sn,Be[Wn])}else En.renderMultiDraw(yt._multiDrawStarts,yt._multiDrawCounts,yt._multiDrawCount);else if(yt.isInstancedMesh)En.renderInstances(Ne,Pn,yt.count);else if(Mt.isInstancedBufferGeometry){let Hn=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,Be=Math.min(Mt.instanceCount,Hn);En.renderInstances(Ne,Pn,Be)}else En.render(Ne,Pn)};function di(et,ft,Mt,xt){if(gt!==null&&et.isNodeMaterial)gt.setObject(xt,et);if(Vt===!0)Tt.setState(et,Mt,!1);if(et.transparent===!0&&et.side===T&&et.forceSinglePass===!1)et.side=X,et.needsUpdate=!0,hs(et,ft,xt),et.side=me,et.needsUpdate=!0,hs(et,ft,xt),et.side=T;else hs(et,ft,xt)}this.compile=function(et,ft,Mt=null){if(Mt===null)Mt=et;if(gt!==null)gt.renderStart(et,ft,Mt);if(ct=Yt.get(Mt),ct.init(ft),J.push(ct),Mt.traverseVisible(function(yt){if(yt.isLight&&yt.layers.test(ft.layers)){if(ct.pushLight(yt),yt.castShadow)ct.pushShadow(yt)}}),et!==Mt)et.traverseVisible(function(yt){if(yt.isLight&&yt.layers.test(ft.layers)){if(ct.pushLight(yt),yt.castShadow)ct.pushShadow(yt)}});if(ct.setupLights(),gt!==null)gt.updateLights(ct.state.lightsArray);if(xe=this.localClippingEnabled,Vt=Tt.init(this.clippingPlanes,xe),Vt===!0)Tt.setGlobalState(this.clippingPlanes,ft);if(gt!==null)Pt.render(ct.state.shadowsArray,Mt,ft);let xt=new Set;if(et.traverse(function(yt){if(!(yt.isMesh||yt.isPoints||yt.isLine||yt.isSprite))return;let Zt=yt.material;if(Zt)if(Array.isArray(Zt))for(let Ie=0;Ie<Zt.length;Ie++){let qt=Zt[Ie];di(qt,Mt,ft,yt),xt.add(qt)}else di(Zt,Mt,ft,yt),xt.add(Zt)}),ct=J.pop(),gt!==null)gt.renderEnd();return xt},this.compileAsync=function(et,ft,Mt=null){let xt=this.compile(et,ft,Mt);return new Promise((yt)=>{function Zt(){if(xt.forEach(function(Ie){let ue=tn.get(Ie).currentProgram;if(ue===void 0||ue.isReady())xt.delete(Ie)}),xt.size===0){yt(et);return}setTimeout(Zt,10)}if(ln.get("KHR_parallel_shader_compile")!==null)Zt();else setTimeout(Zt,10)})};let Gr=null;function Ah(et){if(Gr)Gr(et)}function Jo(){Ii.stop()}function $o(){Ii.start()}let Ii=new lh;if(Ii.setAnimationLoop(Ah),typeof self<"u")Ii.setContext(self);this.setAnimationLoop=function(et){Gr=et,qe.setAnimationLoop(et),et===null?Ii.stop():Ii.start()},qe.addEventListener("sessionstart",Jo),qe.addEventListener("sessionend",$o),this.render=function(et,ft){if(ft!==void 0&&ft.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(St===!0)return;if(gt!==null)gt.renderStart(et,ft);let Mt=qe.enabled===!0&&qe.isPresenting===!0,xt=rt!==null&&(vt===null||Mt)&&rt.begin(mt,vt);if(et.matrixWorldAutoUpdate===!0)et.updateMatrixWorld();if(ft.parent===null&&ft.matrixWorldAutoUpdate===!0)ft.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0&&(rt===null||rt.isCompositing()===!1)){if(qe.cameraAutoUpdate===!0)qe.updateCamera(ft);ft=qe.getCamera()}if(et.isScene===!0)et.onBeforeRender(mt,et,ft,vt);if(ct=Yt.get(et,J.length),ct.init(ft),ct.state.textureUnits=rn.getTextureUnits(),J.push(ct),fe.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),ft.isArrayCamera)kt.setFromArrayCamera(ft);else Nt.setFromProjectionMatrix(fe,po,ft.reversedDepth);if(xe=this.localClippingEnabled,Vt=Tt.init(this.clippingPlanes,xe),it=Wt.get(et,dt.length),it.init(),dt.push(it),this.info.render.frame++,qe.enabled===!0&&qe.isPresenting===!0){let Ie=mt.xr.getDepthSensingMesh();if(Ie!==null)kr(Ie,ft,-1/0,mt.sortObjects)}if(kr(et,ft,0,mt.sortObjects),it.finish(),gt!==null)gt.updateLights(ct.state.lightsArray);if(mt.sortObjects===!0)it.sort(de,xn);if(dn=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,dn)Xt.addToRenderList(it,et);if(this.info.autoReset===!0)this.info.reset();if(Vt===!0)Tt.beginShadows();let yt=ct.state.shadowsArray;if(Pt.render(yt,et,ft),Vt===!0)Tt.endShadows();if((xt&&rt.hasRenderPass())===!1){let Ie=it.opaque,qt=it.transmissive;if(ct.setupLights(),ft.isArrayCamera){let ue=ft.cameras;if(qt.length>0)for(let Ve=0,on=ue.length;Ve<on;Ve++){let pn=ue[Ve];Qo(Ie,qt,et,pn)}if(dn)Xt.render(et);for(let Ve=0,on=ue.length;Ve<on;Ve++){let pn=ue[Ve];Ko(it,et,pn,pn.viewport)}}else{if(qt.length>0)Qo(Ie,qt,et,ft);if(dn)Xt.render(et);Ko(it,et,ft)}}if(vt!==null&&Rt===0)rn.updateMultisampleRenderTarget(vt),rn.updateRenderTargetMipmap(vt);if(xt)rt.end(mt);if(et.isScene===!0)et.onAfterRender(mt,et,ft);if(Ht.resetDefaultState(),Gt=-1,Et=null,J.pop(),J.length>0){if(ct=J[J.length-1],rn.setTextureUnits(ct.state.textureUnits),Vt===!0)Tt.setGlobalState(mt.clippingPlanes,ct.state.camera)}else ct=null;if(dt.pop(),dt.length>0)it=dt[dt.length-1];else it=null;if(gt!==null)gt.renderEnd()};function kr(et,ft,Mt,xt){if(et.visible===!1)return;if(et.layers.test(ft.layers)){if(et.isGroup)Mt=et.renderOrder;else if(et.isLOD){if(et.autoUpdate===!0)et.update(ft)}else if(et.isLight){if(ct.pushLight(et),et.castShadow)ct.pushShadow(et)}else if(et.isSprite){let Ie=ft.isArrayCamera?kt:Nt;if(!et.frustumCulled||et.intersectsFrustum(Ie)){if(xt)Ye.setFromMatrixPosition(et.matrixWorld).applyMatrix4(fe);let qt=_t.update(et),ue=et.material;if(ue.visible)it.push(et,qt,ue,Mt,Ye.z,null,ft)}}else if(et.isMesh||et.isLine||et.isPoints){let Ie=ft.isArrayCamera?kt:Nt;if(!et.frustumCulled||et.intersectsFrustum(Ie)){let qt=_t.update(et),ue=et.material;if(xt){if(et.boundingSphere!==void 0){if(et.boundingSphere===null)et.computeBoundingSphere();Ye.copy(et.boundingSphere.center)}else{if(qt.boundingSphere===null)qt.computeBoundingSphere();Ye.copy(qt.boundingSphere.center)}Ye.applyMatrix4(et.matrixWorld).applyMatrix4(fe)}if(Array.isArray(ue)){let Ve=qt.groups;for(let on=0,pn=Ve.length;on<pn;on++){let Ne=Ve[on],mn=ue[Ne.materialIndex];if(mn&&mn.visible)it.push(et,qt,mn,Mt,Ye.z,Ne,ft)}}else if(ue.visible)it.push(et,qt,ue,Mt,Ye.z,null,ft)}}}let Zt=et.children;for(let Ie=0,qt=Zt.length;Ie<qt;Ie++)kr(Zt[Ie],ft,Mt,xt)}function Ko(et,ft,Mt,xt){let{opaque:yt,transmissive:Zt,transparent:Ie}=et;if(ct.setupLightsView(Mt),Vt===!0)Tt.setGlobalState(mt.clippingPlanes,Mt);if(xt)$t.viewport(Lt.copy(xt));if(yt.length>0)Os(yt,ft,Mt);if(Zt.length>0)Os(Zt,ft,Mt);if(Ie.length>0)Os(Ie,ft,Mt);$t.buffers.depth.setTest(!0),$t.buffers.depth.setMask(!0),$t.buffers.color.setMask(!0),$t.setPolygonOffset(!1)}function Qo(et,ft,Mt,xt){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;if(ct.state.transmissionRenderTarget[xt.id]===void 0){let Ne=ln.has("EXT_color_buffer_half_float")||ln.has("EXT_color_buffer_float");ct.state.transmissionRenderTarget[xt.id]=new P(1,1,{generateMipmaps:!0,type:Ne?ci:x,minFilter:Ri,samples:Math.max(4,In.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gn.workingColorSpace})}let Zt=ct.state.transmissionRenderTarget[xt.id],Ie=xt.viewport||Lt;Zt.setSize(Ie.z*mt.transmissionResolutionScale,Ie.w*mt.transmissionResolutionScale);let qt=mt.getRenderTarget(),ue=mt.getActiveCubeFace(),Ve=mt.getActiveMipmapLevel();if(mt.setRenderTarget(Zt),mt.getClearColor(It),Bt=mt.getClearAlpha(),Bt<1)mt.setClearColor(16777215,0.5);if(mt.clear(),dn)Xt.render(Mt);let on=mt.toneMapping;mt.toneMapping=li;let pn=xt.viewport;if(xt.viewport!==void 0)xt.viewport=void 0;if(ct.setupLightsView(xt),Vt===!0)Tt.setGlobalState(mt.clippingPlanes,xt);if(Os(et,Mt,xt),rn.updateMultisampleRenderTarget(Zt),rn.updateRenderTargetMipmap(Zt),ln.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let mn=0,Pn=ft.length;mn<Pn;mn++){let wn=ft[mn],{object:En,geometry:Hn,material:Be,group:Zn}=wn;if(Be.side===T&&En.layers.test(xt.layers)){let Sn=Be.side;Be.side=X,Be.needsUpdate=!0,jo(En,Mt,xt,Hn,Be,Zn),Be.side=Sn,Be.needsUpdate=!0,Ne=!0}}if(Ne===!0)rn.updateMultisampleRenderTarget(Zt),rn.updateRenderTargetMipmap(Zt)}if(mt.setRenderTarget(qt,ue,Ve),mt.setClearColor(It,Bt),pn!==void 0)xt.viewport=pn;mt.toneMapping=on}function Os(et,ft,Mt){let xt=ft.isScene===!0?ft.overrideMaterial:null;for(let yt=0,Zt=et.length;yt<Zt;yt++){let Ie=et[yt],{object:qt,geometry:ue,group:Ve}=Ie,on=Ie.material;if(on.allowOverride===!0&&xt!==null)on=xt;if(qt.layers.test(Mt.layers))jo(qt,ft,Mt,ue,on,Ve)}}function jo(et,ft,Mt,xt,yt,Zt){if(gt!==null&&yt.isNodeMaterial)gt.setObject(et,yt);if(et.onBeforeRender(mt,ft,Mt,xt,yt,Zt),et.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,et.matrixWorld),et.normalMatrix.getNormalMatrix(et.modelViewMatrix),yt.onBeforeRender(mt,ft,Mt,xt,et,Zt),yt.transparent===!0&&yt.side===T&&yt.forceSinglePass===!1)yt.side=X,yt.needsUpdate=!0,mt.renderBufferDirect(Mt,ft,xt,yt,et,Zt),yt.side=me,yt.needsUpdate=!0,mt.renderBufferDirect(Mt,ft,xt,yt,et,Zt),yt.side=T;else mt.renderBufferDirect(Mt,ft,xt,yt,et,Zt);et.onAfterRender(mt,ft,Mt,xt,yt,Zt)}function tl(et){let ft=0;for(let Mt of et)if(Mt.texture!==null)ft++;return ft}function hs(et,ft,Mt){if(ft.isScene!==!0)ft=un;let xt=tn.get(et),yt=ct.state.lights,Zt=ct.state.shadowsArray,Ie=yt.state.version,qt=Ft.getParameters(et,yt.state,Zt,ft,Mt,ct.state.lightProbeGridArray),ue=Ft.getProgramCacheKey(qt),Ve=xt.programs;xt.environment=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?ft.environment:null,xt.fog=ft.fog;let on=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap;if(xt.envMap=Dn.get(et.envMap||xt.environment,on),xt.envMapRotation=xt.environment!==null&&et.envMap===null?ft.environmentRotation:et.envMapRotation,Ve===void 0)et.addEventListener("dispose",jt),Ve=new Map,xt.programs=Ve,xt.programVariants=new Map;let pn=Ve.get(ue);if(pn!==void 0){if(xt.currentProgram===pn&&xt.lightsStateVersion===Ie)return nl(et,qt),pn}else{if(qt.uniforms=Ft.getUniforms(et),gt!==null&&et.isNodeMaterial)gt.build(et,Mt,qt);et.onBeforeCompile(qt,mt),pn=Ft.acquireProgram(qt,ue),Ve.set(ue,pn),xt.uniforms=qt.uniforms}let Ne=xt.uniforms;if(!et.isShaderMaterial&&!et.isRawShaderMaterial||et.clipping===!0)Ne.clippingPlanes=Tt.uniform;if(nl(et,qt),xt.needsLights=Ih(et),xt.lightsStateVersion=Ie,xt.needsLights)Ne.ambientLightColor.value=yt.state.ambient,Ne.lightProbe.value=yt.state.probe,Ne.sunLights.value=yt.state.sun,Ne.sunLightShadows.value=yt.state.sunShadow,Ne.directionalLights.value=yt.state.directional,Ne.directionalLightShadows.value=yt.state.directionalShadow,Ne.spotLights.value=yt.state.spot,Ne.spotLightShadows.value=yt.state.spotShadow,Ne.rectAreaLights.value=yt.state.rectArea,Ne.ltc_1.value=yt.state.rectAreaLTC1,Ne.ltc_2.value=yt.state.rectAreaLTC2,Ne.pointLights.value=yt.state.point,Ne.pointLightShadows.value=yt.state.pointShadow,Ne.hemisphereLights.value=yt.state.hemi,Ne.sunShadowMatrix.value=yt.state.sunShadowMatrix,Ne.sunShadowCascade.value=yt.state.sunShadowCascade,Ne.directionalShadowMatrix.value=yt.state.directionalShadowMatrix,Ne.spotLightMatrix.value=yt.state.spotLightMatrix,Ne.spotLightMap.value=yt.state.spotLightMap,Ne.pointShadowMatrix.value=yt.state.pointShadowMatrix;return xt.numLightProbeGrids=tl(ct.state.lightProbeGridArray),xt.currentProgram=pn,xt.uniformsList=null,pn}function wh(et,ft,Mt,xt,yt){let Zt=tn.get(et),Ie=Zt.currentProgram.id+","+xt+","+yt,qt=Zt.programVariants.get(Ie);if(qt===void 0)qt=hs(et,ft,Mt),Zt.programVariants.set(Ie,qt);else Zt.currentProgram=qt,Zt.uniformsList=null,Zt.outputColorSpace=xt,Zt.toneMapping=yt;return qt}function el(et){if(et.uniformsList===null){let ft=et.currentProgram.getUniforms();et.uniformsList=Us.seqWithValue(ft.seq,et.uniforms)}return et.uniformsList}function nl(et,ft){let Mt=tn.get(et);Mt.outputColorSpace=ft.outputColorSpace,Mt.batching=ft.batching,Mt.batchingColor=ft.batchingColor,Mt.instancing=ft.instancing,Mt.instancingColor=ft.instancingColor,Mt.instancingMorph=ft.instancingMorph,Mt.skinning=ft.skinning,Mt.morphTargets=ft.morphTargets,Mt.morphNormals=ft.morphNormals,Mt.morphColors=ft.morphColors,Mt.morphTargetsCount=ft.morphTargetsCount,Mt.numClippingPlanes=ft.numClippingPlanes,Mt.numIntersection=ft.numClipIntersection,Mt.vertexAlphas=ft.vertexAlphas,Mt.vertexTangents=ft.vertexTangents,Mt.toneMapping=ft.toneMapping}function Rh(et,ft,Mt,xt,yt){if(ft.isScene!==!0)ft=un;rn.resetTextureUnits();let Zt=ft.fog,Ie=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?ft.environment:null,qt=vt===null?mt.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:gn.workingColorSpace,ue=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap,Ve=Dn.get(xt.envMap||Ie,ue),on=xt.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pn=!!Mt.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Ne=!!Mt.morphAttributes.position,mn=!!Mt.morphAttributes.normal,Pn=!!Mt.morphAttributes.color,wn=li;if(xt.toneMapped){if(vt===null||vt.isXRRenderTarget===!0)wn=mt.toneMapping}let En=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Hn=En!==void 0?En.length:0,Be=tn.get(xt),Zn=ct.state.lights;if(Vt===!0){if(xe===!0||et!==Et){let Rn=et===Et&&xt.id===Gt;Tt.setState(xt,et,Rn)}}let Sn=!1,Pi=!1;if(xt.version===Be.__version){if(Be.needsLights&&Be.lightsStateVersion!==Zn.state.version)Sn=!0;else if(yt.isBatchedMesh&&Be.batching===!1)Sn=!0;else if(!yt.isBatchedMesh&&Be.batching===!0)Sn=!0;else if(yt.isBatchedMesh&&Be.batchingColor===!0&&yt._colorsTexture===null)Sn=!0;else if(yt.isBatchedMesh&&Be.batchingColor===!1&&yt._colorsTexture!==null)Sn=!0;else if(yt.isInstancedMesh&&Be.instancing===!1)Sn=!0;else if(!yt.isInstancedMesh&&Be.instancing===!0)Sn=!0;else if(yt.isSkinnedMesh&&Be.skinning===!1)Sn=!0;else if(!yt.isSkinnedMesh&&Be.skinning===!0)Sn=!0;else if(yt.isInstancedMesh&&Be.instancingColor===!0&&yt.instanceColor===null)Sn=!0;else if(yt.isInstancedMesh&&Be.instancingColor===!1&&yt.instanceColor!==null)Sn=!0;else if(yt.isInstancedMesh&&Be.instancingMorph===!0&&yt.morphTexture===null)Sn=!0;else if(yt.isInstancedMesh&&Be.instancingMorph===!1&&yt.morphTexture!==null)Sn=!0;else if(Be.envMap!==Ve)Sn=!0;else if(xt.fog===!0&&Be.fog!==Zt)Sn=!0;else if(Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Tt.numPlanes||Be.numIntersection!==Tt.numIntersection))Sn=!0;else if(Be.vertexAlphas!==on)Sn=!0;else if(Be.vertexTangents!==pn)Sn=!0;else if(Be.morphTargets!==Ne)Sn=!0;else if(Be.morphNormals!==mn)Sn=!0;else if(Be.morphColors!==Pn)Sn=!0;else if(Be.morphTargetsCount!==Hn)Sn=!0;else if(Be.numLightProbeGrids!==tl(ct.state.lightProbeGridArray))Sn=!0;else if(Be.outputColorSpace!==qt||Be.toneMapping!==wn)Pi=!0}else Sn=!0,Be.__version=xt.version;let Wn=Be.currentProgram;if(Sn===!0||Pi===!0){if(Wn=Pi===!0?wh(xt,ft,yt,qt,wn):hs(xt,ft,yt),gt&&xt.isNodeMaterial)gt.onUpdateProgram(xt,Wn,Be)}let Bs=!1,Mi=!1,Li=!1,vn=Wn.getUniforms(),kn=Be.uniforms;if($t.useProgram(Wn.program))Bs=!0,Mi=!0,Li=!0;if(xt.id!==Gt)Gt=xt.id,Mi=!0;if(Bs||Et!==et){if($t.buffers.depth.getReversed()&&et.reversedDepth!==!0)et._reversedDepth=!0,et.updateProjectionMatrix();vn.setValue(pt,"projectionMatrix",et.projectionMatrix),vn.setValue(pt,"viewMatrix",et.matrixWorldInverse);let Bn=vn.map.cameraPosition;if(Bn!==void 0)Bn.setValue(pt,je.setFromMatrixPosition(et.matrixWorld));if(In.logarithmicDepthBuffer)vn.setValue(pt,"logDepthBufFC",2/(Math.log(et.far+1)/Math.LN2));if(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)vn.setValue(pt,"isOrthographic",et.isOrthographicCamera===!0);if(Et!==et)Et=et,Mi=!0,Li=!0}if(Be.needsLights){if(Zn.state.sunShadowMap.length>0)vn.setValue(pt,"sunShadowMap",Zn.state.sunShadowMap,rn);if(Zn.state.directionalShadowMap.length>0)vn.setValue(pt,"directionalShadowMap",Zn.state.directionalShadowMap,rn);if(Zn.state.spotShadowMap.length>0)vn.setValue(pt,"spotShadowMap",Zn.state.spotShadowMap,rn);if(Zn.state.pointShadowMap.length>0)vn.setValue(pt,"pointShadowMap",Zn.state.pointShadowMap,rn)}if(yt.isSkinnedMesh){vn.setOptional(pt,yt,"bindMatrix"),vn.setOptional(pt,yt,"bindMatrixInverse");let Rn=yt.skeleton;if(Rn){if(Rn.boneTexture===null)Rn.computeBoneTexture();vn.setValue(pt,"boneTexture",Rn.boneTexture,rn)}}if(yt.isBatchedMesh){if(vn.setOptional(pt,yt,"batchingTexture"),vn.setValue(pt,"batchingTexture",yt._matricesTexture,rn),vn.setOptional(pt,yt,"batchingIdTexture"),vn.setValue(pt,"batchingIdTexture",yt._indirectTexture,rn),vn.setOptional(pt,yt,"batchingColorTexture"),yt._colorsTexture!==null)vn.setValue(pt,"batchingColorTexture",yt._colorsTexture,rn)}let ei=Mt.morphAttributes;if(ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)ut.update(yt,Mt,Wn);if(Mi||Be.receiveShadow!==yt.receiveShadow)Be.receiveShadow=yt.receiveShadow,vn.setValue(pt,"receiveShadow",yt.receiveShadow);if((xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial)&&xt.envMap===null&&ft.environment!==null)kn.envMapIntensity.value=ft.environmentIntensity;if(kn.dfgLUT!==void 0)kn.dfgLUT.value=wg();if(Mi){if(vn.setValue(pt,"toneMappingExposure",mt.toneMappingExposure),Be.needsLights)Ch(kn,Li);if(Zt&&xt.fog===!0)Dt.refreshFogUniforms(kn,Zt);if(Dt.refreshMaterialUniforms(kn,xt,Ke,Je,ct.state.transmissionRenderTarget[et.id]),Be.needsLights&&Be.numLightProbeGrids>0){let Rn=lt,Bn=0;for(let fi of ct.state.lightProbeGridArray){if(fi.texture===null)continue;Rn.textures[Bn]=fi.texture,Rn.min[Bn]=fi.boundingBox.min,Rn.max[Bn]=fi.boundingBox.max,Rn.resolution[Bn]=fi.resolution,Bn++}for(let fi in Rn)Rn[fi].length=Bn;kn.probesSH.value=Rn.textures,kn.probesMin.value=Rn.min,kn.probesMax.value=Rn.max,kn.probesResolution.value=Rn.resolution}Us.upload(pt,el(Be),kn,rn)}if(xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0)Us.upload(pt,el(Be),kn,rn),xt.uniformsNeedUpdate=!1;if(xt.isSpriteMaterial)vn.setValue(pt,"center",yt.center);if(vn.setValue(pt,"modelViewMatrix",yt.modelViewMatrix),vn.setValue(pt,"normalMatrix",yt.normalMatrix),vn.setValue(pt,"modelMatrix",yt.matrixWorld),xt.uniformsGroups!==void 0){let Rn=xt.uniformsGroups;for(let Bn=0,fi=Rn.length;Bn<fi;Bn++){let sl=Rn[Bn];Jt.update(sl,Wn),Jt.bind(sl,Wn)}}return Wn}function Ch(et,ft){et.ambientLightColor.needsUpdate=ft,et.lightProbe.needsUpdate=ft,et.sunLights.needsUpdate=ft,et.sunLightShadows.needsUpdate=ft,et.directionalLights.needsUpdate=ft,et.directionalLightShadows.needsUpdate=ft,et.pointLights.needsUpdate=ft,et.pointLightShadows.needsUpdate=ft,et.spotLights.needsUpdate=ft,et.spotLightShadows.needsUpdate=ft,et.rectAreaLights.needsUpdate=ft,et.hemisphereLights.needsUpdate=ft}function Ih(et){return et.isMeshLambertMaterial||et.isMeshToonMaterial||et.isMeshPhongMaterial||et.isMeshStandardMaterial||et.isShadowMaterial||et.isShaderMaterial&&et.lights===!0}this.getActiveCubeFace=function(){return wt},this.getActiveMipmapLevel=function(){return Rt},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(et,ft,Mt){let xt=tn.get(et);if(xt.__autoAllocateDepthBuffer=et.resolveDepthBuffer===!1,xt.__autoAllocateDepthBuffer===!1)xt.__useRenderToTexture=!1;tn.get(et.texture).__webglTexture=ft,tn.get(et.depthTexture).__webglTexture=xt.__autoAllocateDepthBuffer?void 0:Mt,xt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(et,ft){let Mt=tn.get(et);Mt.__webglFramebuffer=ft,Mt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(et,ft=0,Mt=0){vt=et,wt=ft,Rt=Mt;let xt=null,yt=!1,Zt=!1;if(et){let qt=tn.get(et);if(qt.__useDefaultFramebuffer!==void 0){$t.bindFramebuffer(pt.FRAMEBUFFER,qt.__webglFramebuffer),Lt.copy(et.viewport),Ot.copy(et.scissor),_e=et.scissorTest,$t.viewport(Lt),$t.scissor(Ot),$t.setScissorTest(_e),Gt=-1;return}else if(qt.__webglFramebuffer===void 0)rn.setupRenderTarget(et);else if(qt.__hasExternalTextures)rn.rebindTextures(et,tn.get(et.texture).__webglTexture,tn.get(et.depthTexture).__webglTexture);else if(et.depthBuffer){let on=et.depthTexture;if(qt.__boundDepthTexture!==on){if(on!==null&&tn.has(on)&&(et.width!==on.image.width||et.height!==on.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rn.setupDepthRenderbuffer(et)}}let ue=et.texture;if(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)Zt=!0;let Ve=tn.get(et).__webglFramebuffer;if(et.isWebGLCubeRenderTarget){if(Array.isArray(Ve[ft]))xt=Ve[ft][Mt];else xt=Ve[ft];yt=!0}else if(et.samples>0&&rn.useMultisampledRTT(et)===!1)xt=tn.get(et).__webglMultisampledFramebuffer;else if(Array.isArray(Ve))xt=Ve[Mt];else xt=Ve;Lt.copy(et.viewport),Ot.copy(et.scissor),_e=et.scissorTest}else Lt.copy(hn).multiplyScalar(Ke).floor(),Ot.copy(en).multiplyScalar(Ke).floor(),_e=_n;if(Mt!==0)xt=bt;if($t.bindFramebuffer(pt.FRAMEBUFFER,xt))$t.drawBuffers(et,xt);if($t.viewport(Lt),$t.scissor(Ot),$t.setScissorTest(_e),yt){let qt=tn.get(et.texture);pt.framebufferTexture2D(pt.FRAMEBUFFER,pt.COLOR_ATTACHMENT0,pt.TEXTURE_CUBE_MAP_POSITIVE_X+ft,qt.__webglTexture,Mt)}else if(Zt){let qt=ft;for(let ue=0;ue<et.textures.length;ue++){let Ve=tn.get(et.textures[ue]);pt.framebufferTextureLayer(pt.FRAMEBUFFER,pt.COLOR_ATTACHMENT0+ue,Ve.__webglTexture,Mt,qt)}}else if(et!==null&&Mt!==0){let qt=tn.get(et.texture);pt.framebufferTexture2D(pt.FRAMEBUFFER,pt.COLOR_ATTACHMENT0,pt.TEXTURE_2D,qt.__webglTexture,Mt)}Gt=-1};function il(et){let ft=tn.get(et);if(ft.__readFormat!==et.format||ft.__readType!==et.type)ft.__readFormat=et.format,ft.__readType=et.type,ft.__formatReadable=In.textureFormatReadable(et.format),ft.__typeReadable=In.textureTypeReadable(et.type);return ft}if(this.readRenderTargetPixels=function(et,ft,Mt,xt,yt,Zt,Ie,qt=0){if(!(et&&et.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=tn.get(et).__webglFramebuffer;if(et.isWebGLCubeRenderTarget&&Ie!==void 0){if(ue=ue[Ie],Array.isArray(ue))ue=ue[0]}if(ue){$t.bindFramebuffer(pt.FRAMEBUFFER,ue);try{let Ve=et.textures[qt],{format:on,type:pn}=Ve;if(et.textures.length>1)pt.readBuffer(pt.COLOR_ATTACHMENT0+qt);let Ne=il(Ve);if(Ne.__formatReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(ft>=0&&ft<=et.width-xt&&(Mt>=0&&Mt<=et.height-yt))pt.readPixels(ft,Mt,xt,yt,zt.convert(on),zt.convert(pn),Zt)}finally{let Ve=vt!==null?tn.get(vt).__webglFramebuffer:null;$t.bindFramebuffer(pt.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(et,ft,Mt,xt,yt,Zt,Ie,qt=0){if(!(et&&et.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=tn.get(et).__webglFramebuffer;if(et.isWebGLCubeRenderTarget&&Ie!==void 0){if(ue=ue[Ie],Array.isArray(ue))ue=ue[0]}if(ue)if(ft>=0&&ft<=et.width-xt&&(Mt>=0&&Mt<=et.height-yt)){$t.bindFramebuffer(pt.FRAMEBUFFER,ue);let Ve=et.textures[qt],{format:on,type:pn}=Ve;if(et.textures.length>1)pt.readBuffer(pt.COLOR_ATTACHMENT0+qt);let Ne=il(Ve);if(Ne.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mn=pt.createBuffer();pt.bindBuffer(pt.PIXEL_PACK_BUFFER,mn),pt.bufferData(pt.PIXEL_PACK_BUFFER,Zt.byteLength,pt.STREAM_READ),pt.readPixels(ft,Mt,xt,yt,zt.convert(on),zt.convert(pn),0),pt.bindBuffer(pt.PIXEL_PACK_BUFFER,null);let Pn=vt!==null?tn.get(vt).__webglFramebuffer:null;$t.bindFramebuffer(pt.FRAMEBUFFER,Pn);let wn=pt.fenceSync(pt.SYNC_GPU_COMMANDS_COMPLETE,0);return pt.flush(),await Ac(pt,wn,4),pt.bindBuffer(pt.PIXEL_PACK_BUFFER,mn),pt.getBufferSubData(pt.PIXEL_PACK_BUFFER,0,Zt),pt.bindBuffer(pt.PIXEL_PACK_BUFFER,null),pt.deleteBuffer(mn),pt.deleteSync(wn),Zt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(et,ft=null,Mt=0){let xt=Math.pow(2,-Mt),yt=Math.floor(et.image.width*xt),Zt=Math.floor(et.image.height*xt),Ie=ft!==null?ft.x:0,qt=ft!==null?ft.y:0;rn.setTexture2D(et,0),pt.copyTexSubImage2D(pt.TEXTURE_2D,Mt,0,0,Ie,qt,yt,Zt),$t.unbindTexture()},this.copyTextureToTexture=function(et,ft,Mt=null,xt=null,yt=0,Zt=0){let Ie,qt,ue,Ve,on,pn,Ne,mn,Pn,wn=et.isCompressedTexture?et.mipmaps[Zt]:et.image;if(Mt!==null)Ie=Mt.max.x-Mt.min.x,qt=Mt.max.y-Mt.min.y,ue=Mt.isBox3?Mt.max.z-Mt.min.z:1,Ve=Mt.min.x,on=Mt.min.y,pn=Mt.isBox3?Mt.min.z:0;else{let vn=Math.pow(2,-yt);if(Ie=Math.floor(wn.width*vn),qt=Math.floor(wn.height*vn),et.isDataArrayTexture)ue=wn.depth;else if(et.isData3DTexture)ue=Math.floor(wn.depth*vn);else ue=1;Ve=0,on=0,pn=0}if(xt!==null)Ne=xt.x,mn=xt.y,Pn=xt.z;else Ne=0,mn=0,Pn=0;let En=zt.convert(ft.format),Hn=zt.convert(ft.type),Be;if(ft.isData3DTexture)rn.setTexture3D(ft,0),Be=pt.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)rn.setTexture2DArray(ft,0),Be=pt.TEXTURE_2D_ARRAY;else rn.setTexture2D(ft,0),Be=pt.TEXTURE_2D;$t.activeTexture(pt.TEXTURE0),$t.pixelStorei(pt.UNPACK_FLIP_Y_WEBGL,ft.flipY),$t.pixelStorei(pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),$t.pixelStorei(pt.UNPACK_ALIGNMENT,ft.unpackAlignment);let Zn=$t.getParameter(pt.UNPACK_ROW_LENGTH),Sn=$t.getParameter(pt.UNPACK_IMAGE_HEIGHT),Pi=$t.getParameter(pt.UNPACK_SKIP_PIXELS),Wn=$t.getParameter(pt.UNPACK_SKIP_ROWS),Bs=$t.getParameter(pt.UNPACK_SKIP_IMAGES);$t.pixelStorei(pt.UNPACK_ROW_LENGTH,wn.width),$t.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,wn.height),$t.pixelStorei(pt.UNPACK_SKIP_PIXELS,Ve),$t.pixelStorei(pt.UNPACK_SKIP_ROWS,on),$t.pixelStorei(pt.UNPACK_SKIP_IMAGES,pn);let Mi=et.isDataArrayTexture||et.isData3DTexture,Li=ft.isDataArrayTexture||ft.isData3DTexture;if(et.isDepthTexture){let vn=tn.get(et),kn=tn.get(ft),ei=tn.get(vn.__renderTarget),Rn=tn.get(kn.__renderTarget);$t.bindFramebuffer(pt.READ_FRAMEBUFFER,ei.__webglFramebuffer),$t.bindFramebuffer(pt.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Bn=0;Bn<ue;Bn++){if(Mi)pt.framebufferTextureLayer(pt.READ_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,tn.get(et).__webglTexture,yt,pn+Bn),pt.framebufferTextureLayer(pt.DRAW_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,tn.get(ft).__webglTexture,Zt,Pn+Bn);pt.blitFramebuffer(Ve,on,Ve+Ie,on+qt,Ne,mn,Ne+Ie,mn+qt,pt.DEPTH_BUFFER_BIT,pt.NEAREST)}$t.bindFramebuffer(pt.READ_FRAMEBUFFER,null),$t.bindFramebuffer(pt.DRAW_FRAMEBUFFER,null)}else if(yt!==0||et.isRenderTargetTexture||tn.has(et)){let vn=tn.get(et),kn=tn.get(ft);$t.bindFramebuffer(pt.READ_FRAMEBUFFER,Ut),$t.bindFramebuffer(pt.DRAW_FRAMEBUFFER,ht);for(let ei=0;ei<ue;ei++){if(Mi)pt.framebufferTextureLayer(pt.READ_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,vn.__webglTexture,yt,pn+ei);else pt.framebufferTexture2D(pt.READ_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,pt.TEXTURE_2D,vn.__webglTexture,yt);if(Li)pt.framebufferTextureLayer(pt.DRAW_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,kn.__webglTexture,Zt,Pn+ei);else pt.framebufferTexture2D(pt.DRAW_FRAMEBUFFER,pt.COLOR_ATTACHMENT0,pt.TEXTURE_2D,kn.__webglTexture,Zt);if(yt!==0)pt.blitFramebuffer(Ve,on,Ve+Ie,on+qt,Ne,mn,Ne+Ie,mn+qt,pt.COLOR_BUFFER_BIT,pt.NEAREST);else if(Li)pt.copyTexSubImage3D(Be,Zt,Ne,mn,Pn+ei,Ve,on,Ie,qt);else pt.copyTexSubImage2D(Be,Zt,Ne,mn,Ve,on,Ie,qt)}$t.bindFramebuffer(pt.READ_FRAMEBUFFER,null),$t.bindFramebuffer(pt.DRAW_FRAMEBUFFER,null)}else if(Li)if(et.isDataTexture||et.isData3DTexture)pt.texSubImage3D(Be,Zt,Ne,mn,Pn,Ie,qt,ue,En,Hn,wn.data);else if(ft.isCompressedArrayTexture)pt.compressedTexSubImage3D(Be,Zt,Ne,mn,Pn,Ie,qt,ue,En,wn.data);else pt.texSubImage3D(Be,Zt,Ne,mn,Pn,Ie,qt,ue,En,Hn,wn);else if(et.isDataTexture)pt.texSubImage2D(pt.TEXTURE_2D,Zt,Ne,mn,Ie,qt,En,Hn,wn.data);else if(et.isCompressedTexture)pt.compressedTexSubImage2D(pt.TEXTURE_2D,Zt,Ne,mn,wn.width,wn.height,En,wn.data);else pt.texSubImage2D(pt.TEXTURE_2D,Zt,Ne,mn,Ie,qt,En,Hn,wn);if($t.pixelStorei(pt.UNPACK_ROW_LENGTH,Zn),$t.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,Sn),$t.pixelStorei(pt.UNPACK_SKIP_PIXELS,Pi),$t.pixelStorei(pt.UNPACK_SKIP_ROWS,Wn),$t.pixelStorei(pt.UNPACK_SKIP_IMAGES,Bs),Zt===0&&ft.generateMipmaps===!0&&ft.mipmapsAutoUpdate===!0)pt.generateMipmap(Be);$t.unbindTexture()},this.initRenderTarget=function(et){if(tn.get(et).__webglFramebuffer===void 0)rn.setupRenderTarget(et)},this.initTexture=function(et){if(et.isCubeTexture)rn.setTextureCube(et,0);else if(et.isData3DTexture)rn.setTexture3D(et,0);else if(et.isDataArrayTexture||et.isCompressedArrayTexture)rn.setTexture2DArray(et,0);else rn.setTexture2D(et,0);$t.unbindTexture()},this.resetState=function(){wt=0,Rt=0,vt=null,$t.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return po}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=gn._getDrawingBufferColorSpace(t),n.unpackColorSpace=gn._getUnpackColorSpace()}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g,Kt,ui,Dr,bp,ch,Or,kc=256,Cp=3,Ip=20,hh=256,uh=16,Pp=3,Lp,Np,Vp,dh,fh,ph,mh,gh,_h,Xc,qc,Yc,Zc,Jc,qo,Nm=37297,Dm=0,Qc,Bm,Ur,Vm,qm,Zm,$m,Qm,eg=0,cg=0,fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mg,gg,oh,Ns,Yo,Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Th,bg,Eh,Ag,hi=null;var E=e(()=>{Xo();Xo();g={alphahash_fragment:Wu,alphahash_pars_fragment:Vu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:Yu,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:$u,batching_pars_vertex:Ku,batching_vertex:Qu,begin_vertex:ju,beginnormal_vertex:td,bsdfs:ed,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:hd,color_vertex:ud,common:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:_d,colorspace_fragment:xd,colorspace_pars_fragment:vd,envmap_fragment:yd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Md,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Dd,envmap_vertex:Td,fog_vertex:Ed,fog_pars_vertex:Ad,fog_fragment:wd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Cd,lightmap_pars_fragment:Id,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Nd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:Bd,lights_physical_fragment:zd,lights_physical_pars_fragment:Gd,lights_fragment_begin:kd,lights_fragment_maps:Hd,lights_fragment_end:Wd,lightprobes_pars_fragment:Vd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:Zd,map_fragment:Jd,map_pars_fragment:$d,map_particle_fragment:Kd,map_particle_pars_fragment:Qd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:tf,morphinstance_vertex:ef,morphcolor_vertex:nf,morphnormal_vertex:sf,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:of,normal_fragment_maps:lf,normal_pars_fragment:cf,normal_pars_vertex:hf,normal_vertex:uf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:_f,packing:xf,premultiplied_alpha_fragment:vf,project_vertex:yf,dithering_fragment:Sf,dithering_pars_fragment:Mf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:Af,shadowmap_vertex:wf,shadowmask_pars_fragment:Rf,skinbase_vertex:Cf,skinning_pars_vertex:If,skinning_vertex:Pf,skinnormal_vertex:Lf,specularmap_fragment:Nf,specularmap_pars_fragment:Df,tonemapping_fragment:Uf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:Bf,uv_pars_fragment:zf,uv_pars_vertex:Gf,uv_vertex:kf,worldpos_vertex:Hf,background_vert:Wf,background_frag:Vf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:Zf,depth_vert:Jf,depth_frag:$f,distance_vert:Kf,distance_frag:Qf,equirect_vert:jf,equirect_frag:tp,linedashed_vert:ep,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:hp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:_p,points_frag:xp,shadow_vert:vp,shadow_frag:yp,sprite_vert:Sp,sprite_frag:Mp},Kt={common:{diffuse:{value:new u(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new an},alphaMap:{value:null},alphaMapTransform:{value:new an},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new an}},envmap:{envMap:{value:null},envMapRotation:{value:new an},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new an}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new an}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new an},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new an},normalScale:{value:new s(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new an},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new an}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new an}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new an}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new u(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new u(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new an},alphaTest:{value:0},uvTransform:{value:new an}},sprite:{diffuse:{value:new u(16777215)},opacity:{value:1},center:{value:new s(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new an},alphaMap:{value:null},alphaMapTransform:{value:new an},alphaTest:{value:0}}},ui={basic:{uniforms:Yn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:g.meshbasic_vert,fragmentShader:g.meshbasic_frag},lambert:{uniforms:Yn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new u(0)},envMapIntensity:{value:1}}]),vertexShader:g.meshlambert_vert,fragmentShader:g.meshlambert_frag},phong:{uniforms:Yn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new u(0)},specular:{value:new u(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g.meshphong_vert,fragmentShader:g.meshphong_frag},standard:{uniforms:Yn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new u(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g.meshphysical_vert,fragmentShader:g.meshphysical_frag},toon:{uniforms:Yn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new u(0)}}]),vertexShader:g.meshtoon_vert,fragmentShader:g.meshtoon_frag},matcap:{uniforms:Yn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:g.meshmatcap_vert,fragmentShader:g.meshmatcap_frag},points:{uniforms:Yn([Kt.points,Kt.fog]),vertexShader:g.points_vert,fragmentShader:g.points_frag},dashed:{uniforms:Yn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g.linedashed_vert,fragmentShader:g.linedashed_frag},depth:{uniforms:Yn([Kt.common,Kt.displacementmap]),vertexShader:g.depth_vert,fragmentShader:g.depth_frag},normal:{uniforms:Yn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:g.meshnormal_vert,fragmentShader:g.meshnormal_frag},sprite:{uniforms:Yn([Kt.sprite,Kt.fog]),vertexShader:g.sprite_vert,fragmentShader:g.sprite_frag},background:{uniforms:{uvTransform:{value:new an},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g.background_vert,fragmentShader:g.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new an}},vertexShader:g.backgroundCube_vert,fragmentShader:g.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g.cube_vert,fragmentShader:g.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g.equirect_vert,fragmentShader:g.equirect_frag},distance:{uniforms:Yn([Kt.common,Kt.displacementmap,{referencePosition:{value:new r},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g.distance_vert,fragmentShader:g.distance_frag},shadow:{uniforms:Yn([Kt.lights,Kt.fog,{color:{value:new u(0)},opacity:{value:1}}]),vertexShader:g.shadow_vert,fragmentShader:g.shadow_frag}};ui.physical={uniforms:Yn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new an},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new an},clearcoatNormalScale:{value:new s(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new an},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new an},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new an},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new an},sheen:{value:0},sheenColor:{value:new u(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new an},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new an},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new an},transmissionSamplerSize:{value:new s},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new an},attenuationDistance:{value:0},attenuationColor:{value:new u(0)},specularColor:{value:new u(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new an},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new an},anisotropyVector:{value:new s},anisotropyMap:{value:null},anisotropyMapTransform:{value:new an}}]),vertexShader:g.meshphysical_vert,fragmentShader:g.meshphysical_frag};Dr={r:0,b:0,g:0},bp=new p,ch=new an;ch.set(-1,0,0,0,1,0,0,0,1);Or=class Or extends P{constructor(t=1,n={}){super(t,t,n);this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Tr(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ye(5,5,5),o=new F({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:X,blending:Bi});o.uniforms.tEquirect.value=n;let c=new d(a,o),m=n.minFilter;if(n.minFilter===Ri)n.minFilter=k;return new Ls(1,10,this).update(t,c),n.minFilter=m,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,i,a);t.setRenderTarget(o)}};Lp=new r,Np=new u;Vp={[ya]:"LINEAR_TONE_MAPPING",[Sa]:"REINHARD_TONE_MAPPING",[Ma]:"CINEON_TONE_MAPPING",[ba]:"ACES_FILMIC_TONE_MAPPING",[Ea]:"AGX_TONE_MAPPING",[Aa]:"NEUTRAL_TONE_MAPPING",[Ta]:"CUSTOM_TONE_MAPPING"};dh=new qn,fh=new le(1,1),ph=new Er(1),mh=new vr,gh=new Oe,_h=new Tr,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);qo=/(\w+)(\])?(\[|\.)?/g;Qc=new an;Bm={[ya]:"Linear",[Sa]:"Reinhard",[Ma]:"Cineon",[ba]:"ACESFilmic",[Ea]:"AgX",[Aa]:"Neutral",[Ta]:"Custom"};Ur=new r;Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Zm={[Q]:"SHADOWMAP_TYPE_PCF",[pe]:"SHADOWMAP_TYPE_VSM"};$m={[os]:"ENVMAP_MODE_REFRACTION"};Qm={[oc]:"ENVMAP_BLENDING_MULTIPLY",[lc]:"ENVMAP_BLENDING_MIX",[cc]:"ENVMAP_BLENDING_ADD"};mg=[new r(1,0,0),new r(-1,0,0),new r(0,1,0),new r(0,-1,0),new r(0,0,1),new r(0,0,-1)],gg=[new r(0,-1,0),new r(0,-1,0),new r(0,0,1),new r(0,0,-1),new r(0,-1,0),new r(0,-1,0)],oh=new p,Ns=new r,Yo=new r;Th=class Th extends yi{constructor(t,n){super();let i=this,a=null,o=1,c=null,m="local-floor",y=1,b=null,w=null,N=null,U=null,R=null,V=null,nt=typeof XRWebGLBinding<"u",st=new bh,H={},O=n.getContextAttributes(),ot=null,lt=null,it=[],ct=[],dt=new s,J=null,rt=null,mt=new B;mt.viewport=new _;let St=new B;St.viewport=new _;let gt=[mt,St],bt=new ko,Ut=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(It){let Bt=it[It];if(Bt===void 0)Bt=new Is,it[It]=Bt;return Bt.getTargetRaySpace()},this.getControllerGrip=function(It){let Bt=it[It];if(Bt===void 0)Bt=new Is,it[It]=Bt;return Bt.getGripSpace()},this.getHand=function(It){let Bt=it[It];if(Bt===void 0)Bt=new Is,it[It]=Bt;return Bt.getHandSpace()};function wt(It){let Bt=ct.indexOf(It.inputSource);if(Bt===-1)return;let Re=it[Bt];if(Re!==void 0)Re.update(It.inputSource,It.frame,b||c),Re.dispatchEvent({type:It.type,data:It.inputSource})}function Rt(){a.removeEventListener("select",wt),a.removeEventListener("selectstart",wt),a.removeEventListener("selectend",wt),a.removeEventListener("squeeze",wt),a.removeEventListener("squeezestart",wt),a.removeEventListener("squeezeend",wt),a.removeEventListener("end",Rt),a.removeEventListener("inputsourceschange",vt);for(let It=0;It<it.length;It++){let Bt=ct[It];if(Bt===null)continue;ct[It]=null,it[It].disconnect(Bt)}Ut=null,ht=null,st.reset();for(let It in H)delete H[It];if(t.setRenderTarget(ot),R=null,U=null,N=null,a=null,lt=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(J),t.setSize(dt.width,dt.height,!1),rt!==null){let It=rt.camera;It.fov=rt.fov,It.zoom=rt.zoom,It.updateProjectionMatrix(),rt=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(It){if(o=It,i.isPresenting===!0)nn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(It){if(m=It,i.isPresenting===!0)nn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return b||c},this.setReferenceSpace=function(It){b=It},this.getBaseLayer=function(){return U!==null?U:R},this.getBinding=function(){if(N===null&&nt)N=new XRWebGLBinding(a,n);return N},this.getFrame=function(){return V},this.getSession=function(){return a},this.setSession=async function(It){if(a=It,a!==null){if(ot=t.getRenderTarget(),a.addEventListener("select",wt),a.addEventListener("selectstart",wt),a.addEventListener("selectend",wt),a.addEventListener("squeeze",wt),a.addEventListener("squeezestart",wt),a.addEventListener("squeezeend",wt),a.addEventListener("end",Rt),a.addEventListener("inputsourceschange",vt),O.xrCompatible!==!0)await n.makeXRCompatible();if(J=t.getPixelRatio(),t.getSize(dt),!(nt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Re={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:o};R=new XRWebGLLayer(a,n,Re),a.updateRenderState({baseLayer:R}),t.setPixelRatio(1),t.setSize(R.framebufferWidth,R.framebufferHeight,!1),lt=new P(R.framebufferWidth,R.framebufferHeight,{format:M,type:x,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:R.ignoreDepthValues===!1,resolveStencilBuffer:R.ignoreDepthValues===!1,storeMultisampledDepthBuffer:R.ignoreDepthValues===!1,storeMultisampledStencilBuffer:R.ignoreDepthValues===!1})}else{let Re=null,Je=null,Ke=null;if(O.depth)Ke=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=O.stencil?Ci:ge,Je=O.stencil?zi:oe;let de={colorFormat:n.RGBA8,depthFormat:Ke,scaleFactor:o};N=this.getBinding(),U=N.createProjectionLayer(de),a.updateRenderState({layers:[U]}),t.setPixelRatio(1),t.setSize(U.textureWidth,U.textureHeight,!1),lt=new P(U.textureWidth,U.textureHeight,{format:M,type:x,depthTexture:new le(U.textureWidth,U.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}lt.isXRRenderTarget=!0,this.setFoveation(y),b=null,c=await a.requestReferenceSpace(m),_e.setContext(a),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return st.getDepthTexture()};function vt(It){for(let Bt=0;Bt<It.removed.length;Bt++){let Re=It.removed[Bt],Je=ct.indexOf(Re);if(Je>=0)ct[Je]=null,it[Je].disconnect(Re)}for(let Bt=0;Bt<It.added.length;Bt++){let Re=It.added[Bt],Je=ct.indexOf(Re);if(Je===-1){for(let de=0;de<it.length;de++)if(de>=ct.length){ct.push(Re),Je=de;break}else if(ct[de]===null){ct[de]=Re,Je=de;break}if(Je===-1)break}let Ke=it[Je];if(Ke)Ke.connect(Re)}}function Gt(It,Bt){if(Bt===null)It.matrixWorld.copy(It.matrix);else It.matrixWorld.multiplyMatrices(Bt.matrixWorld,It.matrix);It.matrixWorldInverse.copy(It.matrixWorld).invert()}this.updateCamera=function(It){if(a===null)return;let{near:Bt,far:Re}=It;if(st.texture!==null){if(st.depthNear>0)Bt=st.depthNear;if(st.depthFar>0)Re=st.depthFar}if(bt.near=St.near=mt.near=Bt,bt.far=St.far=mt.far=Re,Ut!==bt.near||ht!==bt.far)a.updateRenderState({depthNear:bt.near,depthFar:bt.far}),Ut=bt.near,ht=bt.far;bt.layers.mask=It.layers.mask|6,mt.layers.mask=bt.layers.mask&-5,St.layers.mask=bt.layers.mask&-3;let Je=It.parent,Ke=bt.cameras;Gt(bt,Je);for(let de=0;de<Ke.length;de++)Gt(Ke[de],Je);if(bt.projectionMatrix.copy(mt.projectionMatrix),bt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),rt===null&&It.isPerspectiveCamera)rt={camera:It,fov:It.fov,zoom:It.zoom};Et(It,bt,Je)};function Et(It,Bt,Re){if(Re===null)It.matrix.copy(Bt.matrixWorld);else It.matrix.copy(Re.matrixWorld),It.matrix.invert(),It.matrix.multiply(Bt.matrixWorld);if(It.matrix.decompose(It.position,It.quaternion,It.scale),It.updateMatrixWorld(!0),It.projectionMatrix.copy(Bt.projectionMatrix),It.projectionMatrixInverse.copy(Bt.projectionMatrixInverse),It.isPerspectiveCamera)It.fov=lr*2*Math.atan(1/It.projectionMatrix.elements[5]),It.zoom=1}this.getCamera=function(){return bt},this.getFoveation=function(){if(U===null&&R===null)return;return y},this.setFoveation=function(It){if(y=It,U!==null)U.fixedFoveation=It;if(R!==null&&R.fixedFoveation!==void 0)R.fixedFoveation=It},this.hasDepthSensing=function(){return st.texture!==null},this.getDepthSensingMesh=function(){return st.getMesh(bt)},this.getCameraTexture=function(It){return H[It]};let Lt=null;function Ot(It,Bt){if(w=Bt.getViewerPose(b||c),V=Bt,w!==null){let Re=w.views;if(R!==null)t.setRenderTargetFramebuffer(lt,R.framebuffer),t.setRenderTarget(lt);let Je=!1;if(Re.length!==bt.cameras.length)bt.cameras.length=0,Je=!0;for(let hn=0;hn<Re.length;hn++){let en=Re[hn],_n=null;if(R!==null)_n=R.getViewport(en);else{let kt=N.getViewSubImage(U,en);if(_n=kt.viewport,hn===0)t.setRenderTargetTextures(lt,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(lt)}let Nt=gt[hn];if(Nt===void 0)Nt=new B,Nt.layers.enable(hn),Nt.viewport=new _,gt[hn]=Nt;if(Nt.matrix.fromArray(en.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(en.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(_n.x,_n.y,_n.width,_n.height),hn===0)bt.matrix.copy(Nt.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale);if(Je===!0)bt.cameras.push(Nt)}let Ke=a.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&nt){N=i.getBinding();let hn=N.getDepthInformation(Re[0]);if(hn&&hn.isValid&&hn.texture)st.init(hn,a.renderState)}if(Ke&&Ke.includes("camera-access")&&nt){t.state.unbindTexture(),N=i.getBinding();for(let hn=0;hn<Re.length;hn++){let en=Re[hn].camera;if(en){let _n=H[en];if(!_n)_n=new Ar,H[en]=_n;let Nt=N.getCameraImage(en);_n.sourceTexture=Nt}}}}for(let Re=0;Re<it.length;Re++){let Je=ct[Re],Ke=it[Re];if(Je!==null&&Ke!==void 0)Ke.update(Je,Bt,b||c)}if(Lt)Lt(It,Bt);if(Bt.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:Bt});V=null}let _e=new lh;_e.setAnimationLoop(Ot),this.setAnimationLoop=function(It){Lt=It},this.dispose=function(){}}};bg=new p,Eh=new an;Eh.set(-1,0,0,0,1,0,0,0,1);Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183])});
export{Q,pe,me,X,T,ve,Te,ie,Ce,ke,He,Xe,Ge,Se,S,k,x,oe,ee,M,ge,We,ce,L,Ue,ae,Pe,Le,C,s,q,r,_,P,Oe,p,Z,A,u,be,G,D,l,f,se,h,we,d,I,j,W,he,le,ye,z,te,De,Me,Y,Ee,ze,F,$e,v,Fe,re,B,K,ne,g,Ae,E};

//# debugId=BB594401CA32EE7264756E2164756E21
//# sourceMappingURL=index-s5j0re6x.js.map
