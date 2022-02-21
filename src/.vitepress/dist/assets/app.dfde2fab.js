function Sn(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Ai =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Li = Sn(Ai);
function Os(e) {
  return !!e || e === '';
}
function In(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ue(s) ? Mi(s) : In(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else {
    if (ue(e)) return e;
    if (oe(e)) return e;
  }
}
const Si = /;(?![^(]*\))/g,
  Ii = /:(.+)/;
function Mi(e) {
  const t = {};
  return (
    e.split(Si).forEach((n) => {
      if (n) {
        const s = n.split(Ii);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }),
    t
  );
}
function Qe(e) {
  let t = '';
  if (ue(e)) t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Qe(e[n]);
      s && (t += s + ' ');
    }
  else if (oe(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Oe = (e) =>
    e == null
      ? ''
      : R(e) || (oe(e) && (e.toString === Hs || !F(e.toString)))
      ? JSON.stringify(e, Rs, 2)
      : String(e),
  Rs = (e, t) =>
    t && t.__v_isRef
      ? Rs(e, t.value)
      : mt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Ns(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : oe(t) && !R(t) && !Bs(t)
      ? String(t)
      : t,
  Z = {},
  pt = [],
  Ae = () => {},
  Oi = () => !1,
  Ri = /^on[^a-z]/,
  At = (e) => Ri.test(e),
  Mn = (e) => e.startsWith('onUpdate:'),
  _e = Object.assign,
  On = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ni = Object.prototype.hasOwnProperty,
  V = (e, t) => Ni.call(e, t),
  R = Array.isArray,
  mt = (e) => Xt(e) === '[object Map]',
  Ns = (e) => Xt(e) === '[object Set]',
  F = (e) => typeof e == 'function',
  ue = (e) => typeof e == 'string',
  Rn = (e) => typeof e == 'symbol',
  oe = (e) => e !== null && typeof e == 'object',
  Fs = (e) => oe(e) && F(e.then) && F(e.catch),
  Hs = Object.prototype.toString,
  Xt = (e) => Hs.call(e),
  Fi = (e) => Xt(e).slice(8, -1),
  Bs = (e) => Xt(e) === '[object Object]',
  Nn = (e) =>
    ue(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Lt = Sn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Zt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Hi = /-(\w)/g,
  Re = Zt((e) => e.replace(Hi, (t, n) => (n ? n.toUpperCase() : ''))),
  Bi = /\B([A-Z])/g,
  _t = Zt((e) => e.replace(Bi, '-$1').toLowerCase()),
  Qt = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Fn = Zt((e) => (e ? `on${Qt(e)}` : '')),
  St = (e, t) => !Object.is(e, t),
  Hn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Gt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  ji = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let js;
const Ui = () =>
  js ||
  (js =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {});
let Ge;
const en = [];
class Di {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ge &&
        ((this.parent = Ge),
        (this.index = (Ge.scopes || (Ge.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active)
      try {
        return this.on(), t();
      } finally {
        this.off();
      }
  }
  on() {
    this.active && (en.push(this), (Ge = this));
  }
  off() {
    this.active && (en.pop(), (Ge = en[en.length - 1]));
  }
  stop(t) {
    if (this.active) {
      if (
        (this.effects.forEach((n) => n.stop()),
        this.cleanups.forEach((n) => n()),
        this.scopes && this.scopes.forEach((n) => n.stop(!0)),
        this.parent && !t)
      ) {
        const n = this.parent.scopes.pop();
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index));
      }
      this.active = !1;
    }
  }
}
function qi(e, t) {
  (t = t || Ge), t && t.active && t.effects.push(e);
}
const Bn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Us = (e) => (e.w & Ke) > 0,
  Ds = (e) => (e.n & Ke) > 0,
  Vi = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ke;
  },
  Ki = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Us(r) && !Ds(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Ke),
          (r.n &= ~Ke);
      }
      t.length = n;
    }
  },
  jn = new WeakMap();
let It = 0,
  Ke = 1;
const Un = 30,
  gt = [];
let et;
const tt = Symbol(''),
  Dn = Symbol('');
class qn {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      qi(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    if (!gt.length || !gt.includes(this))
      try {
        return (
          gt.push((et = this)),
          Wi(),
          (Ke = 1 << ++It),
          It <= Un ? Vi(this) : qs(this),
          this.fn()
        );
      } finally {
        It <= Un && Ki(this), (Ke = 1 << --It), nt(), gt.pop();
        const t = gt.length;
        et = t > 0 ? gt[t - 1] : void 0;
      }
  }
  stop() {
    this.active && (qs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function qs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let vt = !0;
const Vn = [];
function xt() {
  Vn.push(vt), (vt = !1);
}
function Wi() {
  Vn.push(vt), (vt = !0);
}
function nt() {
  const e = Vn.pop();
  vt = e === void 0 ? !0 : e;
}
function ke(e, t, n) {
  if (!Vs()) return;
  let s = jn.get(e);
  s || jn.set(e, (s = new Map()));
  let r = s.get(n);
  r || s.set(n, (r = Bn())), Ks(r);
}
function Vs() {
  return vt && et !== void 0;
}
function Ks(e, t) {
  let n = !1;
  It <= Un ? Ds(e) || ((e.n |= Ke), (n = !Us(e))) : (n = !e.has(et)),
    n && (e.add(et), et.deps.push(e));
}
function Be(e, t, n, s, r, i) {
  const o = jn.get(e);
  if (!o) return;
  let l = [];
  if (t === 'clear') l = [...o.values()];
  else if (n === 'length' && R(e))
    o.forEach((u, f) => {
      (f === 'length' || f >= s) && l.push(u);
    });
  else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        R(e)
          ? Nn(n) && l.push(o.get('length'))
          : (l.push(o.get(tt)), mt(e) && l.push(o.get(Dn)));
        break;
      case 'delete':
        R(e) || (l.push(o.get(tt)), mt(e) && l.push(o.get(Dn)));
        break;
      case 'set':
        mt(e) && l.push(o.get(tt));
        break;
    }
  if (l.length === 1) l[0] && Kn(l[0]);
  else {
    const u = [];
    for (const f of l) f && u.push(...f);
    Kn(Bn(u));
  }
}
function Kn(e, t) {
  for (const n of R(e) ? e : [...e])
    (n !== et || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const zi = Sn('__proto__,__v_isRef,__isVue'),
  Ws = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(Rn)
  ),
  Ji = Wn(),
  Yi = Wn(!1, !0),
  Xi = Wn(!0),
  zs = Zi();
function Zi() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = W(this);
        for (let i = 0, o = this.length; i < o; i++) ke(s, 'get', i + '');
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(W)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        xt();
        const s = W(this)[t].apply(this, n);
        return nt(), s;
      };
    }),
    e
  );
}
function Wn(e = !1, t = !1) {
  return function (s, r, i) {
    if (r === '__v_isReactive') return !e;
    if (r === '__v_isReadonly') return e;
    if (r === '__v_isShallow') return t;
    if (r === '__v_raw' && i === (e ? (t ? po : nr) : t ? tr : er).get(s))
      return s;
    const o = R(s);
    if (!e && o && V(zs, r)) return Reflect.get(zs, r, i);
    const l = Reflect.get(s, r, i);
    return (Rn(r) ? Ws.has(r) : zi(r)) || (e || ke(s, 'get', r), t)
      ? l
      : ae(l)
      ? !o || !Nn(r)
        ? l.value
        : l
      : oe(l)
      ? e
        ? sr(l)
        : cn(l)
      : l;
  };
}
const Qi = Js(),
  Gi = Js(!0);
function Js(e = !1) {
  return function (n, s, r, i) {
    let o = n[s];
    if (Mt(o) && ae(o)) return !1;
    if (
      !e &&
      !Mt(r) &&
      (rr(r) || ((r = W(r)), (o = W(o))), !R(n) && ae(o) && !ae(r))
    )
      return (o.value = r), !0;
    const l = R(n) && Nn(s) ? Number(s) < n.length : V(n, s),
      u = Reflect.set(n, s, r, i);
    return (
      n === W(i) && (l ? St(r, o) && Be(n, 'set', s, r) : Be(n, 'add', s, r)), u
    );
  };
}
function eo(e, t) {
  const n = V(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Be(e, 'delete', t, void 0), s;
}
function to(e, t) {
  const n = Reflect.has(e, t);
  return (!Rn(t) || !Ws.has(t)) && ke(e, 'has', t), n;
}
function no(e) {
  return ke(e, 'iterate', R(e) ? 'length' : tt), Reflect.ownKeys(e);
}
const Ys = { get: Ji, set: Qi, deleteProperty: eo, has: to, ownKeys: no },
  so = {
    get: Xi,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  ro = _e({}, Ys, { get: Yi, set: Gi }),
  zn = (e) => e,
  tn = (e) => Reflect.getPrototypeOf(e);
function nn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e),
    i = W(t);
  t !== i && !n && ke(r, 'get', t), !n && ke(r, 'get', i);
  const { has: o } = tn(r),
    l = s ? zn : n ? Xn : Rt;
  if (o.call(r, t)) return l(e.get(t));
  if (o.call(r, i)) return l(e.get(i));
  e !== r && e.get(t);
}
function sn(e, t = !1) {
  const n = this.__v_raw,
    s = W(n),
    r = W(e);
  return (
    e !== r && !t && ke(s, 'has', e),
    !t && ke(s, 'has', r),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function rn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ke(W(e), 'iterate', tt), Reflect.get(e, 'size', e)
  );
}
function Xs(e) {
  e = W(e);
  const t = W(this);
  return tn(t).has.call(t, e) || (t.add(e), Be(t, 'add', e, e)), this;
}
function Zs(e, t) {
  t = W(t);
  const n = W(this),
    { has: s, get: r } = tn(n);
  let i = s.call(n, e);
  i || ((e = W(e)), (i = s.call(n, e)));
  const o = r.call(n, e);
  return (
    n.set(e, t), i ? St(t, o) && Be(n, 'set', e, t) : Be(n, 'add', e, t), this
  );
}
function Qs(e) {
  const t = W(this),
    { has: n, get: s } = tn(t);
  let r = n.call(t, e);
  r || ((e = W(e)), (r = n.call(t, e))), s && s.call(t, e);
  const i = t.delete(e);
  return r && Be(t, 'delete', e, void 0), i;
}
function Gs() {
  const e = W(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Be(e, 'clear', void 0, void 0), n;
}
function on(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = W(o),
      u = t ? zn : e ? Xn : Rt;
    return (
      !e && ke(l, 'iterate', tt), o.forEach((f, h) => s.call(r, u(f), u(h), i))
    );
  };
}
function ln(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = W(r),
      o = mt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      u = e === 'keys' && o,
      f = r[e](...s),
      h = n ? zn : t ? Xn : Rt;
    return (
      !t && ke(i, 'iterate', u ? Dn : tt),
      {
        next() {
          const { value: v, done: k } = f.next();
          return k
            ? { value: v, done: k }
            : { value: l ? [h(v[0]), h(v[1])] : h(v), done: k };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function We(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function io() {
  const e = {
      get(i) {
        return nn(this, i);
      },
      get size() {
        return rn(this);
      },
      has: sn,
      add: Xs,
      set: Zs,
      delete: Qs,
      clear: Gs,
      forEach: on(!1, !1),
    },
    t = {
      get(i) {
        return nn(this, i, !1, !0);
      },
      get size() {
        return rn(this);
      },
      has: sn,
      add: Xs,
      set: Zs,
      delete: Qs,
      clear: Gs,
      forEach: on(!1, !0),
    },
    n = {
      get(i) {
        return nn(this, i, !0);
      },
      get size() {
        return rn(this, !0);
      },
      has(i) {
        return sn.call(this, i, !0);
      },
      add: We('add'),
      set: We('set'),
      delete: We('delete'),
      clear: We('clear'),
      forEach: on(!0, !1),
    },
    s = {
      get(i) {
        return nn(this, i, !0, !0);
      },
      get size() {
        return rn(this, !0);
      },
      has(i) {
        return sn.call(this, i, !0);
      },
      add: We('add'),
      set: We('set'),
      delete: We('delete'),
      clear: We('clear'),
      forEach: on(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      (e[i] = ln(i, !1, !1)),
        (n[i] = ln(i, !0, !1)),
        (t[i] = ln(i, !1, !0)),
        (s[i] = ln(i, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [oo, lo, co, uo] = io();
function Jn(e, t) {
  const n = t ? (e ? uo : co) : e ? lo : oo;
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(V(n, r) && r in s ? n : s, r, i);
}
const ao = { get: Jn(!1, !1) },
  fo = { get: Jn(!1, !0) },
  ho = { get: Jn(!0, !1) },
  er = new WeakMap(),
  tr = new WeakMap(),
  nr = new WeakMap(),
  po = new WeakMap();
function mo(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function _o(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mo(Fi(e));
}
function cn(e) {
  return Mt(e) ? e : Yn(e, !1, Ys, ao, er);
}
function go(e) {
  return Yn(e, !1, ro, fo, tr);
}
function sr(e) {
  return Yn(e, !0, so, ho, nr);
}
function Yn(e, t, n, s, r) {
  if (!oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = _o(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function bt(e) {
  return Mt(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Mt(e) {
  return !!(e && e.__v_isReadonly);
}
function rr(e) {
  return !!(e && e.__v_isShallow);
}
function ir(e) {
  return bt(e) || Mt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Ot(e) {
  return Gt(e, '__v_skip', !0), e;
}
const Rt = (e) => (oe(e) ? cn(e) : e),
  Xn = (e) => (oe(e) ? sr(e) : e);
function or(e) {
  Vs() && ((e = W(e)), e.dep || (e.dep = Bn()), Ks(e.dep));
}
function lr(e, t) {
  (e = W(e)), e.dep && Kn(e.dep);
}
function ae(e) {
  return Boolean(e && e.__v_isRef === !0);
}
function st(e) {
  return cr(e, !1);
}
function vo(e) {
  return cr(e, !0);
}
function cr(e, t) {
  return ae(e) ? e : new xo(e, t);
}
class xo {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : W(t)),
      (this._value = n ? t : Rt(t));
  }
  get value() {
    return or(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : W(t)),
      St(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Rt(t)),
        lr(this));
  }
}
function P(e) {
  return ae(e) ? e.value : e;
}
const bo = {
  get: (e, t, n) => P(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ae(r) && !ae(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function ur(e) {
  return bt(e) ? e : new Proxy(e, bo);
}
function ar(e) {
  const t = R(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = ko(e, n);
  return t;
}
class yo {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function ko(e, t, n) {
  const s = e[t];
  return ae(s) ? s : new yo(e, t, n);
}
class wo {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new qn(t, () => {
        this._dirty || ((this._dirty = !0), lr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = W(this);
    return (
      or(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Co(e, t, n = !1) {
  let s, r;
  const i = F(e);
  return (
    i ? ((s = e), (r = Ae)) : ((s = e.get), (r = e.set)),
    new wo(s, r, i || !r, n)
  );
}
Promise.resolve();
function ze(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (i) {
    Nt(i, t, n);
  }
  return r;
}
function Le(e, t, n, s) {
  if (F(e)) {
    const i = ze(e, t, n, s);
    return (
      i &&
        Fs(i) &&
        i.catch((o) => {
          Nt(o, t, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(Le(e[i], t, n, s));
  return r;
}
function Nt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      l = n;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, o, l) === !1) return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      ze(u, null, 10, [e, o, l]);
      return;
    }
  }
  Eo(e, n, r, s);
}
function Eo(e, t, n, s = !0) {
  console.error(e);
}
let un = !1,
  Zn = !1;
const we = [];
let je = 0;
const Ft = [];
let Ht = null,
  yt = 0;
const Bt = [];
let Je = null,
  kt = 0;
const fr = Promise.resolve();
let Qn = null,
  Gn = null;
function dr(e) {
  const t = Qn || fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $o(e) {
  let t = je + 1,
    n = we.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    jt(we[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function es(e) {
  (!we.length || !we.includes(e, un && e.allowRecurse ? je + 1 : je)) &&
    e !== Gn &&
    (e.id == null ? we.push(e) : we.splice($o(e.id), 0, e), hr());
}
function hr() {
  !un && !Zn && ((Zn = !0), (Qn = fr.then(mr)));
}
function To(e) {
  const t = we.indexOf(e);
  t > je && we.splice(t, 1);
}
function pr(e, t, n, s) {
  R(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    hr();
}
function Po(e) {
  pr(e, Ht, Ft, yt);
}
function Ao(e) {
  pr(e, Je, Bt, kt);
}
function ts(e, t = null) {
  if (Ft.length) {
    for (
      Gn = t, Ht = [...new Set(Ft)], Ft.length = 0, yt = 0;
      yt < Ht.length;
      yt++
    )
      Ht[yt]();
    (Ht = null), (yt = 0), (Gn = null), ts(e, t);
  }
}
function an(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)];
    if (((Bt.length = 0), Je)) {
      Je.push(...t);
      return;
    }
    for (Je = t, Je.sort((n, s) => jt(n) - jt(s)), kt = 0; kt < Je.length; kt++)
      Je[kt]();
    (Je = null), (kt = 0);
  }
}
const jt = (e) => (e.id == null ? 1 / 0 : e.id);
function mr(e) {
  (Zn = !1), (un = !0), ts(e), we.sort((n, s) => jt(n) - jt(s));
  const t = Ae;
  try {
    for (je = 0; je < we.length; je++) {
      const n = we[je];
      n && n.active !== !1 && ze(n, null, 14);
    }
  } finally {
    (je = 0),
      (we.length = 0),
      an(),
      (un = !1),
      (Qn = null),
      (we.length || Ft.length || Bt.length) && mr(e);
  }
}
function Lo(e, t, ...n) {
  const s = e.vnode.props || Z;
  let r = n;
  const i = t.startsWith('update:'),
    o = i && t.slice(7);
  if (o && o in s) {
    const h = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: v, trim: k } = s[h] || Z;
    k ? (r = n.map((E) => E.trim())) : v && (r = n.map(ji));
  }
  let l,
    u = s[(l = Fn(t))] || s[(l = Fn(Re(t)))];
  !u && i && (u = s[(l = Fn(_t(t)))]), u && Le(u, e, 6, r);
  const f = s[l + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Le(f, e, 6, r);
  }
}
function _r(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!F(e)) {
    const u = (f) => {
      const h = _r(f, t, !0);
      h && ((l = !0), _e(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !i && !l
    ? (s.set(e, null), null)
    : (R(i) ? i.forEach((u) => (o[u] = null)) : _e(o, i), s.set(e, o), o);
}
function ns(e, t) {
  return !e || !At(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      V(e, t[0].toLowerCase() + t.slice(1)) || V(e, _t(t)) || V(e, t));
}
let Se = null,
  fn = null;
function dn(e) {
  const t = Se;
  return (Se = e), (fn = (e && e.type.__scopeId) || null), t;
}
function gr(e) {
  fn = e;
}
function vr() {
  fn = null;
}
function Ue(e, t = Se, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Dr(-1);
    const i = dn(t),
      o = e(...r);
    return dn(i), s._d && Dr(1), o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function ss(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: u,
    emit: f,
    render: h,
    renderCache: v,
    data: k,
    setupState: E,
    ctx: T,
    inheritAttrs: H,
  } = e;
  let _, x;
  const I = dn(e);
  try {
    if (n.shapeFlag & 4) {
      const A = r || s;
      (_ = Ie(h.call(A, A, v, i, E, k, T))), (x = u);
    } else {
      const A = t;
      (_ = Ie(
        A.length > 1 ? A(i, { attrs: u, slots: l, emit: f }) : A(i, null)
      )),
        (x = t.props ? u : So(u));
    }
  } catch (A) {
    (Vt.length = 0), Nt(A, e, 1), (_ = N(qe));
  }
  let D = _;
  if (x && H !== !1) {
    const A = Object.keys(x),
      { shapeFlag: J } = D;
    A.length &&
      J & (1 | 6) &&
      (o && A.some(Mn) && (x = Io(x, o)), (D = Wt(D, x)));
  }
  return (
    n.dirs && (D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs),
    n.transition && (D.transition = n.transition),
    (_ = D),
    dn(I),
    _
  );
}
const So = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || At(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Io = (e, t) => {
    const n = {};
    for (const s in e) (!Mn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Mo(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: u } = t,
    f = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? xr(s, o, f) : !!o;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        const k = h[v];
        if (o[k] !== s[k] && !ns(f, k)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? xr(s, o, f)
        : !0
      : !!o;
  return !1;
}
function xr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !ns(n, i)) return !0;
  }
  return !1;
}
function Oo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ro = (e) => e.__isSuspense;
function br(e, t) {
  t && t.pendingBranch
    ? R(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ao(e);
}
function No(e, t) {
  if (ce) {
    let n = ce.provides;
    const s = ce.parent && ce.parent.provides;
    s === n && (n = ce.provides = Object.create(s)), (n[e] = t);
  }
}
function Ut(e, t, n = !1) {
  const s = ce || Se;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && F(t) ? t.call(s.proxy) : t;
  }
}
function Fo(e, t) {
  return rs(e, null, t);
}
const yr = {};
function rt(e, t, n) {
  return rs(e, t, n);
}
function rs(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = Z
) {
  const l = ce;
  let u,
    f = !1,
    h = !1;
  if (
    (ae(e)
      ? ((u = () => e.value), (f = rr(e)))
      : bt(e)
      ? ((u = () => e), (s = !0))
      : R(e)
      ? ((h = !0),
        (f = e.some(bt)),
        (u = () =>
          e.map((x) => {
            if (ae(x)) return x.value;
            if (bt(x)) return wt(x);
            if (F(x)) return ze(x, l, 2);
          })))
      : F(e)
      ? t
        ? (u = () => ze(e, l, 2))
        : (u = () => {
            if (!(l && l.isUnmounted)) return v && v(), Le(e, l, 3, [k]);
          })
      : (u = Ae),
    t && s)
  ) {
    const x = u;
    u = () => wt(x());
  }
  let v,
    k = (x) => {
      v = _.onStop = () => {
        ze(x, l, 4);
      };
    };
  if ($t)
    return (k = Ae), t ? n && Le(t, l, 3, [u(), h ? [] : void 0, k]) : u(), Ae;
  let E = h ? [] : yr;
  const T = () => {
    if (!!_.active)
      if (t) {
        const x = _.run();
        (s || f || (h ? x.some((I, D) => St(I, E[D])) : St(x, E))) &&
          (v && v(), Le(t, l, 3, [x, E === yr ? void 0 : E, k]), (E = x));
      } else _.run();
  };
  T.allowRecurse = !!t;
  let H;
  r === 'sync'
    ? (H = T)
    : r === 'post'
    ? (H = () => be(T, l && l.suspense))
    : (H = () => {
        !l || l.isMounted ? Po(T) : T();
      });
  const _ = new qn(u, H);
  return (
    t
      ? n
        ? T()
        : (E = _.run())
      : r === 'post'
      ? be(_.run.bind(_), l && l.suspense)
      : _.run(),
    () => {
      _.stop(), l && l.scope && On(l.scope.effects, _);
    }
  );
}
function Ho(e, t, n) {
  const s = this.proxy,
    r = ue(e) ? (e.includes('.') ? kr(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  F(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = ce;
  Et(this);
  const l = rs(r, i.bind(s), n);
  return o ? Et(o) : ct(), l;
}
function kr(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function wt(e, t) {
  if (!oe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ae(e))) wt(e.value, t);
  else if (R(e)) for (let n = 0; n < e.length; n++) wt(e[n], t);
  else if (Ns(e) || mt(e))
    e.forEach((n) => {
      wt(n, t);
    });
  else if (Bs(e)) for (const n in e) wt(e[n], t);
  return e;
}
function le(e) {
  return F(e) ? { setup: e, name: e.name } : e;
}
const hn = (e) => !!e.type.__asyncLoader;
function Bo(e) {
  F(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    timeout: i,
    suspensible: o = !0,
    onError: l,
  } = e;
  let u = null,
    f,
    h = 0;
  const v = () => (h++, (u = null), k()),
    k = () => {
      let E;
      return (
        u ||
        (E = u =
          t()
            .catch((T) => {
              if (((T = T instanceof Error ? T : new Error(String(T))), l))
                return new Promise((H, _) => {
                  l(
                    T,
                    () => H(v()),
                    () => _(T),
                    h + 1
                  );
                });
              throw T;
            })
            .then((T) =>
              E !== u && u
                ? u
                : (T &&
                    (T.__esModule || T[Symbol.toStringTag] === 'Module') &&
                    (T = T.default),
                  (f = T),
                  T)
            ))
      );
    };
  return le({
    name: 'AsyncComponentWrapper',
    __asyncLoader: k,
    get __asyncResolved() {
      return f;
    },
    setup() {
      const E = ce;
      if (f) return () => is(f, E);
      const T = (I) => {
        (u = null), Nt(I, E, 13, !s);
      };
      if ((o && E.suspense) || $t)
        return k()
          .then((I) => () => is(I, E))
          .catch((I) => (T(I), () => (s ? N(s, { error: I }) : null)));
      const H = st(!1),
        _ = st(),
        x = st(!!r);
      return (
        r &&
          setTimeout(() => {
            x.value = !1;
          }, r),
        i != null &&
          setTimeout(() => {
            if (!H.value && !_.value) {
              const I = new Error(`Async component timed out after ${i}ms.`);
              T(I), (_.value = I);
            }
          }, i),
        k()
          .then(() => {
            (H.value = !0),
              E.parent && os(E.parent.vnode) && es(E.parent.update);
          })
          .catch((I) => {
            T(I), (_.value = I);
          }),
        () => {
          if (H.value && f) return is(f, E);
          if (_.value && s) return N(s, { error: _.value });
          if (n && !x.value) return N(n);
        }
      );
    },
  });
}
function is(e, { vnode: { ref: t, props: n, children: s } }) {
  const r = N(e, n, s);
  return (r.ref = t), r;
}
const os = (e) => e.type.__isKeepAlive;
function jo(e, t) {
  wr(e, 'a', t);
}
function Uo(e, t) {
  wr(e, 'da', t);
}
function wr(e, t, n = ce) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((pn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      os(r.parent.vnode) && Do(s, t, n, r), (r = r.parent);
  }
}
function Do(e, t, n, s) {
  const r = pn(t, e, s, !0);
  mn(() => {
    On(s[t], r);
  }, n);
}
function pn(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          xt(), Et(n);
          const l = Le(t, n, e, o);
          return ct(), nt(), l;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const De =
    (e) =>
    (t, n = ce) =>
      (!$t || e === 'sp') && pn(e, t, n),
  qo = De('bm'),
  Ct = De('m'),
  Vo = De('bu'),
  Cr = De('u'),
  Ko = De('bum'),
  mn = De('um'),
  Wo = De('sp'),
  zo = De('rtg'),
  Jo = De('rtc');
function Yo(e, t = ce) {
  pn('ec', e, t);
}
let ls = !0;
function Xo(e) {
  const t = Tr(e),
    n = e.proxy,
    s = e.ctx;
  (ls = !1), t.beforeCreate && Er(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: u,
    inject: f,
    created: h,
    beforeMount: v,
    mounted: k,
    beforeUpdate: E,
    updated: T,
    activated: H,
    deactivated: _,
    beforeDestroy: x,
    beforeUnmount: I,
    destroyed: D,
    unmounted: A,
    render: J,
    renderTracked: X,
    renderTriggered: B,
    errorCaptured: se,
    serverPrefetch: te,
    expose: re,
    inheritAttrs: he,
    components: j,
    directives: ie,
    filters: ve,
  } = t;
  if ((f && Zo(f, s, null, e.appContext.config.unwrapInjectedRef), o))
    for (const ne in o) {
      const Q = o[ne];
      F(Q) && (s[ne] = Q.bind(n));
    }
  if (r) {
    const ne = r.call(n, n);
    oe(ne) && (e.data = cn(ne));
  }
  if (((ls = !0), i))
    for (const ne in i) {
      const Q = i[ne],
        Fe = F(Q) ? Q.bind(n, n) : F(Q.get) ? Q.get.bind(n, n) : Ae,
        Pn = !F(Q) && F(Q.set) ? Q.set.bind(n) : Ae,
        Tt = z({ get: Fe, set: Pn });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (ft) => (Tt.value = ft),
      });
    }
  if (l) for (const ne in l) $r(l[ne], s, n, ne);
  if (u) {
    const ne = F(u) ? u.call(n) : u;
    Reflect.ownKeys(ne).forEach((Q) => {
      No(Q, ne[Q]);
    });
  }
  h && Er(h, e, 'c');
  function xe(ne, Q) {
    R(Q) ? Q.forEach((Fe) => ne(Fe.bind(n))) : Q && ne(Q.bind(n));
  }
  if (
    (xe(qo, v),
    xe(Ct, k),
    xe(Vo, E),
    xe(Cr, T),
    xe(jo, H),
    xe(Uo, _),
    xe(Yo, se),
    xe(Jo, X),
    xe(zo, B),
    xe(Ko, I),
    xe(mn, A),
    xe(Wo, te),
    R(re))
  )
    if (re.length) {
      const ne = e.exposed || (e.exposed = {});
      re.forEach((Q) => {
        Object.defineProperty(ne, Q, {
          get: () => n[Q],
          set: (Fe) => (n[Q] = Fe),
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Ae && (e.render = J),
    he != null && (e.inheritAttrs = he),
    j && (e.components = j),
    ie && (e.directives = ie);
}
function Zo(e, t, n = Ae, s = !1) {
  R(e) && (e = cs(e));
  for (const r in e) {
    const i = e[r];
    let o;
    oe(i)
      ? 'default' in i
        ? (o = Ut(i.from || r, i.default, !0))
        : (o = Ut(i.from || r))
      : (o = Ut(i)),
      ae(o) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (l) => (o.value = l),
          })
        : (t[r] = o);
  }
}
function Er(e, t, n) {
  Le(R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $r(e, t, n, s) {
  const r = s.includes('.') ? kr(n, s) : () => n[s];
  if (ue(e)) {
    const i = t[e];
    F(i) && rt(r, i);
  } else if (F(e)) rt(r, e.bind(n));
  else if (oe(e))
    if (R(e)) e.forEach((i) => $r(i, t, n, s));
    else {
      const i = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(i) && rt(r, i, e);
    }
}
function Tr(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let u;
  return (
    l
      ? (u = l)
      : !r.length && !n && !s
      ? (u = t)
      : ((u = {}), r.length && r.forEach((f) => _n(u, f, o, !0)), _n(u, t, o)),
    i.set(t, u),
    u
  );
}
function _n(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && _n(e, i, n, !0), r && r.forEach((o) => _n(e, o, n, !0));
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Qo[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Qo = {
  data: Pr,
  props: it,
  emits: it,
  methods: it,
  computed: it,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: it,
  directives: it,
  watch: el,
  provide: Pr,
  inject: Go,
};
function Pr(e, t) {
  return t
    ? e
      ? function () {
          return _e(
            F(e) ? e.call(this, this) : e,
            F(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Go(e, t) {
  return it(cs(e), cs(t));
}
function cs(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function it(e, t) {
  return e ? _e(_e(Object.create(null), e), t) : t;
}
function el(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _e(Object.create(null), e);
  for (const s in t) n[s] = ge(e[s], t[s]);
  return n;
}
function tl(e, t, n, s = !1) {
  const r = {},
    i = {};
  Gt(i, yn, 1), (e.propsDefaults = Object.create(null)), Ar(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : go(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function nl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = W(r),
    [u] = e.propsOptions;
  let f = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        let k = h[v];
        const E = t[k];
        if (u)
          if (V(i, k)) E !== i[k] && ((i[k] = E), (f = !0));
          else {
            const T = Re(k);
            r[T] = us(u, l, T, E, e, !1);
          }
        else E !== i[k] && ((i[k] = E), (f = !0));
      }
    }
  } else {
    Ar(e, t, r, i) && (f = !0);
    let h;
    for (const v in l)
      (!t || (!V(t, v) && ((h = _t(v)) === v || !V(t, h)))) &&
        (u
          ? n &&
            (n[v] !== void 0 || n[h] !== void 0) &&
            (r[v] = us(u, l, v, void 0, e, !0))
          : delete r[v]);
    if (i !== l)
      for (const v in i) (!t || (!V(t, v) && !0)) && (delete i[v], (f = !0));
  }
  f && Be(e, 'set', '$attrs');
}
function Ar(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let u in t) {
      if (Lt(u)) continue;
      const f = t[u];
      let h;
      r && V(r, (h = Re(u)))
        ? !i || !i.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : ns(e.emitsOptions, u) ||
          ((!(u in s) || f !== s[u]) && ((s[u] = f), (o = !0)));
    }
  if (i) {
    const u = W(n),
      f = l || Z;
    for (let h = 0; h < i.length; h++) {
      const v = i[h];
      n[v] = us(r, u, v, f[v], e, !V(f, v));
    }
  }
  return o;
}
function us(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = V(o, 'default');
    if (l && s === void 0) {
      const u = o.default;
      if (o.type !== Function && F(u)) {
        const { propsDefaults: f } = r;
        n in f ? (s = f[n]) : (Et(r), (s = f[n] = u.call(null, t)), ct());
      } else s = u;
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === '' || s === _t(n)) && (s = !0));
  }
  return s;
}
function Lr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let u = !1;
  if (!F(e)) {
    const h = (v) => {
      u = !0;
      const [k, E] = Lr(v, t, !0);
      _e(o, k), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!i && !u) return s.set(e, pt), pt;
  if (R(i))
    for (let h = 0; h < i.length; h++) {
      const v = Re(i[h]);
      Sr(v) && (o[v] = Z);
    }
  else if (i)
    for (const h in i) {
      const v = Re(h);
      if (Sr(v)) {
        const k = i[h],
          E = (o[v] = R(k) || F(k) ? { type: k } : k);
        if (E) {
          const T = Or(Boolean, E.type),
            H = Or(String, E.type);
          (E[0] = T > -1),
            (E[1] = H < 0 || T < H),
            (T > -1 || V(E, 'default')) && l.push(v);
        }
      }
    }
  const f = [o, l];
  return s.set(e, f), f;
}
function Sr(e) {
  return e[0] !== '$';
}
function Ir(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function Mr(e, t) {
  return Ir(e) === Ir(t);
}
function Or(e, t) {
  return R(t) ? t.findIndex((n) => Mr(n, e)) : F(t) && Mr(t, e) ? 0 : -1;
}
const Rr = (e) => e[0] === '_' || e === '$stable',
  as = (e) => (R(e) ? e.map(Ie) : [Ie(e)]),
  sl = (e, t, n) => {
    const s = Ue((...r) => as(t(...r)), n);
    return (s._c = !1), s;
  },
  Nr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Rr(r)) continue;
      const i = e[r];
      if (F(i)) t[r] = sl(r, i, s);
      else if (i != null) {
        const o = as(i);
        t[r] = () => o;
      }
    }
  },
  Fr = (e, t) => {
    const n = as(t);
    e.slots.default = () => n;
  },
  rl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = W(t)), Gt(t, '_', n)) : Nr(t, (e.slots = {}));
    } else (e.slots = {}), t && Fr(e, t);
    Gt(e.slots, yn, 1);
  },
  il = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = Z;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (_e(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Nr(t, r)),
        (o = t);
    } else t && (Fr(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Rr(l) && !(l in o) && delete r[l];
  };
function Ne(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let u = l.dir[s];
    u && (xt(), Le(u, n, 8, [e.el, l, e, t]), nt());
  }
}
function Hr() {
  return {
    app: null,
    config: {
      isNativeTag: Oi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ol = 0;
function ll(e, t) {
  return function (s, r = null) {
    r != null && !oe(r) && (r = null);
    const i = Hr(),
      o = new Set();
    let l = !1;
    const u = (i.app = {
      _uid: ol++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Pl,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          o.has(f) ||
            (f && F(f.install)
              ? (o.add(f), f.install(u, ...h))
              : F(f) && (o.add(f), f(u, ...h))),
          u
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), u;
      },
      component(f, h) {
        return h ? ((i.components[f] = h), u) : i.components[f];
      },
      directive(f, h) {
        return h ? ((i.directives[f] = h), u) : i.directives[f];
      },
      mount(f, h, v) {
        if (!l) {
          const k = N(s, r);
          return (
            (k.appContext = i),
            h && t ? t(k, f) : e(k, f, v),
            (l = !0),
            (u._container = f),
            (f.__vue_app__ = u),
            gs(k.component) || k.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, h) {
        return (i.provides[f] = h), u;
      },
    });
    return u;
  };
}
function gn(e, t, n, s, r = !1) {
  if (R(e)) {
    e.forEach((k, E) => gn(k, t && (R(t) ? t[E] : t), n, s, r));
    return;
  }
  if (hn(s) && !r) return;
  const i = s.shapeFlag & 4 ? gs(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: u } = e,
    f = t && t.r,
    h = l.refs === Z ? (l.refs = {}) : l.refs,
    v = l.setupState;
  if (
    (f != null &&
      f !== u &&
      (ue(f)
        ? ((h[f] = null), V(v, f) && (v[f] = null))
        : ae(f) && (f.value = null)),
    F(u))
  )
    ze(u, l, 12, [o, h]);
  else {
    const k = ue(u),
      E = ae(u);
    if (k || E) {
      const T = () => {
        if (e.f) {
          const H = k ? h[u] : u.value;
          r
            ? R(H) && On(H, i)
            : R(H)
            ? H.includes(i) || H.push(i)
            : k
            ? (h[u] = [i])
            : ((u.value = [i]), e.k && (h[e.k] = u.value));
        } else
          k
            ? ((h[u] = o), V(v, u) && (v[u] = o))
            : ae(u) && ((u.value = o), e.k && (h[e.k] = o));
      };
      o ? ((T.id = -1), be(T, n)) : T();
    }
  }
}
let Ye = !1;
const vn = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  fs = (e) => e.nodeType === 8;
function cl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        nextSibling: r,
        parentNode: i,
        remove: o,
        insert: l,
        createComment: u,
      },
    } = e,
    f = (_, x) => {
      if (!x.hasChildNodes()) {
        n(null, _, x), an();
        return;
      }
      (Ye = !1),
        h(x.firstChild, _, null, null, null),
        an(),
        Ye && console.error('Hydration completed but contains mismatches.');
    },
    h = (_, x, I, D, A, J = !1) => {
      const X = fs(_) && _.data === '[',
        B = () => T(_, x, I, D, A, X),
        { type: se, ref: te, shapeFlag: re } = x,
        he = _.nodeType;
      x.el = _;
      let j = null;
      switch (se) {
        case Dt:
          he !== 3
            ? (j = B())
            : (_.data !== x.children && ((Ye = !0), (_.data = x.children)),
              (j = r(_)));
          break;
        case qe:
          he !== 8 || X ? (j = B()) : (j = r(_));
          break;
        case qt:
          if (he !== 1) j = B();
          else {
            j = _;
            const ie = !x.children.length;
            for (let ve = 0; ve < x.staticCount; ve++)
              ie && (x.children += j.outerHTML),
                ve === x.staticCount - 1 && (x.anchor = j),
                (j = r(j));
            return j;
          }
          break;
        case fe:
          X ? (j = E(_, x, I, D, A, J)) : (j = B());
          break;
        default:
          if (re & 1)
            he !== 1 || x.type.toLowerCase() !== _.tagName.toLowerCase()
              ? (j = B())
              : (j = v(_, x, I, D, A, J));
          else if (re & 6) {
            x.slotScopeIds = A;
            const ie = i(_);
            if (
              (t(x, ie, null, I, D, vn(ie), J), (j = X ? H(_) : r(_)), hn(x))
            ) {
              let ve;
              X
                ? ((ve = N(fe)),
                  (ve.anchor = j ? j.previousSibling : ie.lastChild))
                : (ve = _.nodeType === 3 ? zt('') : N('div')),
                (ve.el = _),
                (x.component.subTree = ve);
            }
          } else
            re & 64
              ? he !== 8
                ? (j = B())
                : (j = x.type.hydrate(_, x, I, D, A, J, e, k))
              : re & 128 &&
                (j = x.type.hydrate(_, x, I, D, vn(i(_)), A, J, e, h));
      }
      return te != null && gn(te, null, D, x), j;
    },
    v = (_, x, I, D, A, J) => {
      J = J || !!x.dynamicChildren;
      const { type: X, props: B, patchFlag: se, shapeFlag: te, dirs: re } = x,
        he = (X === 'input' && re) || X === 'option';
      if (he || se !== -1) {
        if ((re && Ne(x, null, I, 'created'), B))
          if (he || !J || se & (16 | 32))
            for (const ie in B)
              ((he && ie.endsWith('value')) || (At(ie) && !Lt(ie))) &&
                s(_, ie, null, B[ie], !1, void 0, I);
          else B.onClick && s(_, 'onClick', null, B.onClick, !1, void 0, I);
        let j;
        if (
          ((j = B && B.onVnodeBeforeMount) && Ee(j, I, x),
          re && Ne(x, null, I, 'beforeMount'),
          ((j = B && B.onVnodeMounted) || re) &&
            br(() => {
              j && Ee(j, I, x), re && Ne(x, null, I, 'mounted');
            }, D),
          te & 16 && !(B && (B.innerHTML || B.textContent)))
        ) {
          let ie = k(_.firstChild, x, _, I, D, A, J);
          for (; ie; ) {
            Ye = !0;
            const ve = ie;
            (ie = ie.nextSibling), o(ve);
          }
        } else
          te & 8 &&
            _.textContent !== x.children &&
            ((Ye = !0), (_.textContent = x.children));
      }
      return _.nextSibling;
    },
    k = (_, x, I, D, A, J, X) => {
      X = X || !!x.dynamicChildren;
      const B = x.children,
        se = B.length;
      for (let te = 0; te < se; te++) {
        const re = X ? B[te] : (B[te] = Ie(B[te]));
        if (_) _ = h(_, re, D, A, J, X);
        else {
          if (re.type === Dt && !re.children) continue;
          (Ye = !0), n(null, re, I, null, D, A, vn(I), J);
        }
      }
      return _;
    },
    E = (_, x, I, D, A, J) => {
      const { slotScopeIds: X } = x;
      X && (A = A ? A.concat(X) : X);
      const B = i(_),
        se = k(r(_), x, B, I, D, A, J);
      return se && fs(se) && se.data === ']'
        ? r((x.anchor = se))
        : ((Ye = !0), l((x.anchor = u(']')), B, se), se);
    },
    T = (_, x, I, D, A, J) => {
      if (((Ye = !0), (x.el = null), J)) {
        const se = H(_);
        for (;;) {
          const te = r(_);
          if (te && te !== se) o(te);
          else break;
        }
      }
      const X = r(_),
        B = i(_);
      return o(_), n(null, x, B, X, I, D, vn(B), A), X;
    },
    H = (_) => {
      let x = 0;
      for (; _; )
        if (
          ((_ = r(_)), _ && fs(_) && (_.data === '[' && x++, _.data === ']'))
        ) {
          if (x === 0) return r(_);
          x--;
        }
      return _;
    };
  return [f, h];
}
const be = br;
function ul(e) {
  return al(e, cl);
}
function al(e, t) {
  const n = Ui();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: u,
      setText: f,
      setElementText: h,
      parentNode: v,
      nextSibling: k,
      setScopeId: E = Ae,
      cloneNode: T,
      insertStaticContent: H,
    } = e,
    _ = (
      c,
      a,
      d,
      m = null,
      p = null,
      y = null,
      C = !1,
      b = null,
      w = !!a.dynamicChildren
    ) => {
      if (c === a) return;
      c && !Kt(c, a) && ((m = Yt(c)), Ve(c, p, y, !0), (c = null)),
        a.patchFlag === -2 && ((w = !1), (a.dynamicChildren = null));
      const { type: g, ref: L, shapeFlag: $ } = a;
      switch (g) {
        case Dt:
          x(c, a, d, m);
          break;
        case qe:
          I(c, a, d, m);
          break;
        case qt:
          c == null && D(a, d, m, C);
          break;
        case fe:
          ie(c, a, d, m, p, y, C, b, w);
          break;
        default:
          $ & 1
            ? X(c, a, d, m, p, y, C, b, w)
            : $ & 6
            ? ve(c, a, d, m, p, y, C, b, w)
            : ($ & 64 || $ & 128) && g.process(c, a, d, m, p, y, C, b, w, dt);
      }
      L != null && p && gn(L, c && c.ref, y, a || c, !a);
    },
    x = (c, a, d, m) => {
      if (c == null) s((a.el = l(a.children)), d, m);
      else {
        const p = (a.el = c.el);
        a.children !== c.children && f(p, a.children);
      }
    },
    I = (c, a, d, m) => {
      c == null ? s((a.el = u(a.children || '')), d, m) : (a.el = c.el);
    },
    D = (c, a, d, m) => {
      [c.el, c.anchor] = H(c.children, a, d, m, c.el, c.anchor);
    },
    A = ({ el: c, anchor: a }, d, m) => {
      let p;
      for (; c && c !== a; ) (p = k(c)), s(c, d, m), (c = p);
      s(a, d, m);
    },
    J = ({ el: c, anchor: a }) => {
      let d;
      for (; c && c !== a; ) (d = k(c)), r(c), (c = d);
      r(a);
    },
    X = (c, a, d, m, p, y, C, b, w) => {
      (C = C || a.type === 'svg'),
        c == null ? B(a, d, m, p, y, C, b, w) : re(c, a, p, y, C, b, w);
    },
    B = (c, a, d, m, p, y, C, b) => {
      let w, g;
      const {
        type: L,
        props: $,
        shapeFlag: S,
        transition: M,
        patchFlag: q,
        dirs: ee,
      } = c;
      if (c.el && T !== void 0 && q === -1) w = c.el = T(c.el);
      else {
        if (
          ((w = c.el = o(c.type, y, $ && $.is, $)),
          S & 8
            ? h(w, c.children)
            : S & 16 &&
              te(c.children, w, null, m, p, y && L !== 'foreignObject', C, b),
          ee && Ne(c, null, m, 'created'),
          $)
        ) {
          for (const G in $)
            G !== 'value' &&
              !Lt(G) &&
              i(w, G, null, $[G], y, c.children, m, p, He);
          'value' in $ && i(w, 'value', null, $.value),
            (g = $.onVnodeBeforeMount) && Ee(g, m, c);
        }
        se(w, c, c.scopeId, C, m);
      }
      ee && Ne(c, null, m, 'beforeMount');
      const Y = (!p || (p && !p.pendingBranch)) && M && !M.persisted;
      Y && M.beforeEnter(w),
        s(w, a, d),
        ((g = $ && $.onVnodeMounted) || Y || ee) &&
          be(() => {
            g && Ee(g, m, c), Y && M.enter(w), ee && Ne(c, null, m, 'mounted');
          }, p);
    },
    se = (c, a, d, m, p) => {
      if ((d && E(c, d), m)) for (let y = 0; y < m.length; y++) E(c, m[y]);
      if (p) {
        let y = p.subTree;
        if (a === y) {
          const C = p.vnode;
          se(c, C, C.scopeId, C.slotScopeIds, p.parent);
        }
      }
    },
    te = (c, a, d, m, p, y, C, b, w = 0) => {
      for (let g = w; g < c.length; g++) {
        const L = (c[g] = b ? Xe(c[g]) : Ie(c[g]));
        _(null, L, a, d, m, p, y, C, b);
      }
    },
    re = (c, a, d, m, p, y, C) => {
      const b = (a.el = c.el);
      let { patchFlag: w, dynamicChildren: g, dirs: L } = a;
      w |= c.patchFlag & 16;
      const $ = c.props || Z,
        S = a.props || Z;
      let M;
      d && ot(d, !1),
        (M = S.onVnodeBeforeUpdate) && Ee(M, d, a, c),
        L && Ne(a, c, d, 'beforeUpdate'),
        d && ot(d, !0);
      const q = p && a.type !== 'foreignObject';
      if (
        (g
          ? he(c.dynamicChildren, g, b, d, m, q, y)
          : C || Fe(c, a, b, null, d, m, q, y, !1),
        w > 0)
      ) {
        if (w & 16) j(b, a, $, S, d, m, p);
        else if (
          (w & 2 && $.class !== S.class && i(b, 'class', null, S.class, p),
          w & 4 && i(b, 'style', $.style, S.style, p),
          w & 8)
        ) {
          const ee = a.dynamicProps;
          for (let Y = 0; Y < ee.length; Y++) {
            const G = ee[Y],
              Pe = $[G],
              ht = S[G];
            (ht !== Pe || G === 'value') &&
              i(b, G, Pe, ht, p, c.children, d, m, He);
          }
        }
        w & 1 && c.children !== a.children && h(b, a.children);
      } else !C && g == null && j(b, a, $, S, d, m, p);
      ((M = S.onVnodeUpdated) || L) &&
        be(() => {
          M && Ee(M, d, a, c), L && Ne(a, c, d, 'updated');
        }, m);
    },
    he = (c, a, d, m, p, y, C) => {
      for (let b = 0; b < a.length; b++) {
        const w = c[b],
          g = a[b],
          L =
            w.el && (w.type === fe || !Kt(w, g) || w.shapeFlag & (6 | 64))
              ? v(w.el)
              : d;
        _(w, g, L, null, m, p, y, C, !0);
      }
    },
    j = (c, a, d, m, p, y, C) => {
      if (d !== m) {
        for (const b in m) {
          if (Lt(b)) continue;
          const w = m[b],
            g = d[b];
          w !== g && b !== 'value' && i(c, b, g, w, C, a.children, p, y, He);
        }
        if (d !== Z)
          for (const b in d)
            !Lt(b) && !(b in m) && i(c, b, d[b], null, C, a.children, p, y, He);
        'value' in m && i(c, 'value', d.value, m.value);
      }
    },
    ie = (c, a, d, m, p, y, C, b, w) => {
      const g = (a.el = c ? c.el : l('')),
        L = (a.anchor = c ? c.anchor : l(''));
      let { patchFlag: $, dynamicChildren: S, slotScopeIds: M } = a;
      M && (b = b ? b.concat(M) : M),
        c == null
          ? (s(g, d, m), s(L, d, m), te(a.children, d, L, p, y, C, b, w))
          : $ > 0 && $ & 64 && S && c.dynamicChildren
          ? (he(c.dynamicChildren, S, d, p, y, C, b),
            (a.key != null || (p && a === p.subTree)) && Br(c, a, !0))
          : Fe(c, a, d, L, p, y, C, b, w);
    },
    ve = (c, a, d, m, p, y, C, b, w) => {
      (a.slotScopeIds = b),
        c == null
          ? a.shapeFlag & 512
            ? p.ctx.activate(a, d, m, C, w)
            : Tn(a, d, m, p, y, C, w)
          : xe(c, a, w);
    },
    Tn = (c, a, d, m, p, y, C) => {
      const b = (c.component = yl(c, m, p));
      if ((os(c) && (b.ctx.renderer = dt), kl(b), b.asyncDep)) {
        if ((p && p.registerDep(b, ne), !c.el)) {
          const w = (b.subTree = N(qe));
          I(null, w, a, d);
        }
        return;
      }
      ne(b, c, a, d, p, y, C);
    },
    xe = (c, a, d) => {
      const m = (a.component = c.component);
      if (Mo(c, a, d))
        if (m.asyncDep && !m.asyncResolved) {
          Q(m, a, d);
          return;
        } else (m.next = a), To(m.update), m.update();
      else (a.component = c.component), (a.el = c.el), (m.vnode = a);
    },
    ne = (c, a, d, m, p, y, C) => {
      const b = () => {
          if (c.isMounted) {
            let { next: L, bu: $, u: S, parent: M, vnode: q } = c,
              ee = L,
              Y;
            ot(c, !1),
              L ? ((L.el = q.el), Q(c, L, C)) : (L = q),
              $ && Hn($),
              (Y = L.props && L.props.onVnodeBeforeUpdate) && Ee(Y, M, L, q),
              ot(c, !0);
            const G = ss(c),
              Pe = c.subTree;
            (c.subTree = G),
              _(Pe, G, v(Pe.el), Yt(Pe), c, p, y),
              (L.el = G.el),
              ee === null && Oo(c, G.el),
              S && be(S, p),
              (Y = L.props && L.props.onVnodeUpdated) &&
                be(() => Ee(Y, M, L, q), p);
          } else {
            let L;
            const { el: $, props: S } = a,
              { bm: M, m: q, parent: ee } = c,
              Y = hn(a);
            if (
              (ot(c, !1),
              M && Hn(M),
              !Y && (L = S && S.onVnodeBeforeMount) && Ee(L, ee, a),
              ot(c, !0),
              $ && Ln)
            ) {
              const G = () => {
                (c.subTree = ss(c)), Ln($, c.subTree, c, p, null);
              };
              Y
                ? a.type.__asyncLoader().then(() => !c.isUnmounted && G())
                : G();
            } else {
              const G = (c.subTree = ss(c));
              _(null, G, d, m, c, p, y), (a.el = G.el);
            }
            if ((q && be(q, p), !Y && (L = S && S.onVnodeMounted))) {
              const G = a;
              be(() => Ee(L, ee, G), p);
            }
            a.shapeFlag & 256 && c.a && be(c.a, p),
              (c.isMounted = !0),
              (a = d = m = null);
          }
        },
        w = (c.effect = new qn(b, () => es(c.update), c.scope)),
        g = (c.update = w.run.bind(w));
      (g.id = c.uid), ot(c, !0), g();
    },
    Q = (c, a, d) => {
      a.component = c;
      const m = c.vnode.props;
      (c.vnode = a),
        (c.next = null),
        nl(c, a.props, m, d),
        il(c, a.children, d),
        xt(),
        ts(void 0, c.update),
        nt();
    },
    Fe = (c, a, d, m, p, y, C, b, w = !1) => {
      const g = c && c.children,
        L = c ? c.shapeFlag : 0,
        $ = a.children,
        { patchFlag: S, shapeFlag: M } = a;
      if (S > 0) {
        if (S & 128) {
          Tt(g, $, d, m, p, y, C, b, w);
          return;
        } else if (S & 256) {
          Pn(g, $, d, m, p, y, C, b, w);
          return;
        }
      }
      M & 8
        ? (L & 16 && He(g, p, y), $ !== g && h(d, $))
        : L & 16
        ? M & 16
          ? Tt(g, $, d, m, p, y, C, b, w)
          : He(g, p, y, !0)
        : (L & 8 && h(d, ''), M & 16 && te($, d, m, p, y, C, b, w));
    },
    Pn = (c, a, d, m, p, y, C, b, w) => {
      (c = c || pt), (a = a || pt);
      const g = c.length,
        L = a.length,
        $ = Math.min(g, L);
      let S;
      for (S = 0; S < $; S++) {
        const M = (a[S] = w ? Xe(a[S]) : Ie(a[S]));
        _(c[S], M, d, null, p, y, C, b, w);
      }
      g > L ? He(c, p, y, !0, !1, $) : te(a, d, m, p, y, C, b, w, $);
    },
    Tt = (c, a, d, m, p, y, C, b, w) => {
      let g = 0;
      const L = a.length;
      let $ = c.length - 1,
        S = L - 1;
      for (; g <= $ && g <= S; ) {
        const M = c[g],
          q = (a[g] = w ? Xe(a[g]) : Ie(a[g]));
        if (Kt(M, q)) _(M, q, d, null, p, y, C, b, w);
        else break;
        g++;
      }
      for (; g <= $ && g <= S; ) {
        const M = c[$],
          q = (a[S] = w ? Xe(a[S]) : Ie(a[S]));
        if (Kt(M, q)) _(M, q, d, null, p, y, C, b, w);
        else break;
        $--, S--;
      }
      if (g > $) {
        if (g <= S) {
          const M = S + 1,
            q = M < L ? a[M].el : m;
          for (; g <= S; )
            _(null, (a[g] = w ? Xe(a[g]) : Ie(a[g])), d, q, p, y, C, b, w), g++;
        }
      } else if (g > S) for (; g <= $; ) Ve(c[g], p, y, !0), g++;
      else {
        const M = g,
          q = g,
          ee = new Map();
        for (g = q; g <= S; g++) {
          const ye = (a[g] = w ? Xe(a[g]) : Ie(a[g]));
          ye.key != null && ee.set(ye.key, g);
        }
        let Y,
          G = 0;
        const Pe = S - q + 1;
        let ht = !1,
          Ss = 0;
        const Pt = new Array(Pe);
        for (g = 0; g < Pe; g++) Pt[g] = 0;
        for (g = M; g <= $; g++) {
          const ye = c[g];
          if (G >= Pe) {
            Ve(ye, p, y, !0);
            continue;
          }
          let Me;
          if (ye.key != null) Me = ee.get(ye.key);
          else
            for (Y = q; Y <= S; Y++)
              if (Pt[Y - q] === 0 && Kt(ye, a[Y])) {
                Me = Y;
                break;
              }
          Me === void 0
            ? Ve(ye, p, y, !0)
            : ((Pt[Me - q] = g + 1),
              Me >= Ss ? (Ss = Me) : (ht = !0),
              _(ye, a[Me], d, null, p, y, C, b, w),
              G++);
        }
        const Is = ht ? fl(Pt) : pt;
        for (Y = Is.length - 1, g = Pe - 1; g >= 0; g--) {
          const ye = q + g,
            Me = a[ye],
            Ms = ye + 1 < L ? a[ye + 1].el : m;
          Pt[g] === 0
            ? _(null, Me, d, Ms, p, y, C, b, w)
            : ht && (Y < 0 || g !== Is[Y] ? ft(Me, d, Ms, 2) : Y--);
        }
      }
    },
    ft = (c, a, d, m, p = null) => {
      const { el: y, type: C, transition: b, children: w, shapeFlag: g } = c;
      if (g & 6) {
        ft(c.component.subTree, a, d, m);
        return;
      }
      if (g & 128) {
        c.suspense.move(a, d, m);
        return;
      }
      if (g & 64) {
        C.move(c, a, d, dt);
        return;
      }
      if (C === fe) {
        s(y, a, d);
        for (let $ = 0; $ < w.length; $++) ft(w[$], a, d, m);
        s(c.anchor, a, d);
        return;
      }
      if (C === qt) {
        A(c, a, d);
        return;
      }
      if (m !== 2 && g & 1 && b)
        if (m === 0) b.beforeEnter(y), s(y, a, d), be(() => b.enter(y), p);
        else {
          const { leave: $, delayLeave: S, afterLeave: M } = b,
            q = () => s(y, a, d),
            ee = () => {
              $(y, () => {
                q(), M && M();
              });
            };
          S ? S(y, q, ee) : ee();
        }
      else s(y, a, d);
    },
    Ve = (c, a, d, m = !1, p = !1) => {
      const {
        type: y,
        props: C,
        ref: b,
        children: w,
        dynamicChildren: g,
        shapeFlag: L,
        patchFlag: $,
        dirs: S,
      } = c;
      if ((b != null && gn(b, null, d, c, !0), L & 256)) {
        a.ctx.deactivate(c);
        return;
      }
      const M = L & 1 && S,
        q = !hn(c);
      let ee;
      if ((q && (ee = C && C.onVnodeBeforeUnmount) && Ee(ee, a, c), L & 6))
        Pi(c.component, d, m);
      else {
        if (L & 128) {
          c.suspense.unmount(d, m);
          return;
        }
        M && Ne(c, null, a, 'beforeUnmount'),
          L & 64
            ? c.type.remove(c, a, d, p, dt, m)
            : g && (y !== fe || ($ > 0 && $ & 64))
            ? He(g, a, d, !1, !0)
            : ((y === fe && $ & (128 | 256)) || (!p && L & 16)) && He(w, a, d),
          m && As(c);
      }
      ((q && (ee = C && C.onVnodeUnmounted)) || M) &&
        be(() => {
          ee && Ee(ee, a, c), M && Ne(c, null, a, 'unmounted');
        }, d);
    },
    As = (c) => {
      const { type: a, el: d, anchor: m, transition: p } = c;
      if (a === fe) {
        Ti(d, m);
        return;
      }
      if (a === qt) {
        J(c);
        return;
      }
      const y = () => {
        r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (c.shapeFlag & 1 && p && !p.persisted) {
        const { leave: C, delayLeave: b } = p,
          w = () => C(d, y);
        b ? b(c.el, y, w) : w();
      } else y();
    },
    Ti = (c, a) => {
      let d;
      for (; c !== a; ) (d = k(c)), r(c), (c = d);
      r(a);
    },
    Pi = (c, a, d) => {
      const { bum: m, scope: p, update: y, subTree: C, um: b } = c;
      m && Hn(m),
        p.stop(),
        y && ((y.active = !1), Ve(C, c, a, d)),
        b && be(b, a),
        be(() => {
          c.isUnmounted = !0;
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve());
    },
    He = (c, a, d, m = !1, p = !1, y = 0) => {
      for (let C = y; C < c.length; C++) Ve(c[C], a, d, m, p);
    },
    Yt = (c) =>
      c.shapeFlag & 6
        ? Yt(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : k(c.anchor || c.el),
    Ls = (c, a, d) => {
      c == null
        ? a._vnode && Ve(a._vnode, null, null, !0)
        : _(a._vnode || null, c, a, null, null, null, d),
        an(),
        (a._vnode = c);
    },
    dt = {
      p: _,
      um: Ve,
      m: ft,
      r: As,
      mt: Tn,
      mc: te,
      pc: Fe,
      pbc: he,
      n: Yt,
      o: e,
    };
  let An, Ln;
  return (
    t && ([An, Ln] = t(dt)), { render: Ls, hydrate: An, createApp: ll(Ls, An) }
  );
}
function ot({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Br(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (R(s) && R(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Xe(r[i])), (l.el = o.el)),
        n || Br(o, l));
    }
}
function fl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const f = e[s];
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l);
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
const dl = (e) => e.__isTeleport,
  jr = 'components';
function ds(e, t) {
  return pl(jr, e, !0, t) || e;
}
const hl = Symbol();
function pl(e, t, n = !0, s = !1) {
  const r = Se || ce;
  if (r) {
    const i = r.type;
    if (e === jr) {
      const l = $l(i);
      if (l && (l === t || l === Re(t) || l === Qt(Re(t)))) return i;
    }
    const o = Ur(r[e] || i[e], t) || Ur(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function Ur(e, t) {
  return e && (e[t] || e[Re(t)] || e[Qt(Re(t))]);
}
const fe = Symbol(void 0),
  Dt = Symbol(void 0),
  qe = Symbol(void 0),
  qt = Symbol(void 0),
  Vt = [];
let lt = null;
function O(e = !1) {
  Vt.push((lt = e ? null : []));
}
function ml() {
  Vt.pop(), (lt = Vt[Vt.length - 1] || null);
}
let xn = 1;
function Dr(e) {
  xn += e;
}
function qr(e) {
  return (
    (e.dynamicChildren = xn > 0 ? lt || pt : null),
    ml(),
    xn > 0 && lt && lt.push(e),
    e
  );
}
function K(e, t, n, s, r, i) {
  return qr(U(e, t, n, s, r, i, !0));
}
function Ce(e, t, n, s, r) {
  return qr(N(e, t, n, s, r, !0));
}
function bn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yn = '__vInternal',
  Vr = ({ key: e }) => (e != null ? e : null),
  kn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ue(e) || ae(e) || F(e)
        ? { i: Se, r: e, k: t, f: !!n }
        : e
      : null;
function U(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === fe ? 0 : 1,
  o = !1,
  l = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vr(t),
    ref: t && kn(t),
    scopeId: fn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (hs(u, n), i & 128 && e.normalize(u))
      : n && (u.shapeFlag |= ue(n) ? 8 : 16),
    xn > 0 &&
      !o &&
      lt &&
      (u.patchFlag > 0 || i & 6) &&
      u.patchFlag !== 32 &&
      lt.push(u),
    u
  );
}
const N = _l;
function _l(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === hl) && (e = qe), bn(e))) {
    const l = Wt(e, t, !0);
    return n && hs(l, n), l;
  }
  if ((Tl(e) && (e = e.__vccOpts), t)) {
    t = gl(t);
    let { class: l, style: u } = t;
    l && !ue(l) && (t.class = Qe(l)),
      oe(u) && (ir(u) && !R(u) && (u = _e({}, u)), (t.style = In(u)));
  }
  const o = ue(e) ? 1 : Ro(e) ? 128 : dl(e) ? 64 : oe(e) ? 4 : F(e) ? 2 : 0;
  return U(e, t, n, s, r, o, i, !0);
}
function gl(e) {
  return e ? (ir(e) || yn in e ? _e({}, e) : e) : null;
}
function Wt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? ps(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Vr(l),
    ref:
      t && t.ref ? (n && r ? (R(r) ? r.concat(kn(t)) : [r, kn(t)]) : kn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fe ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function zt(e = ' ', t = 0) {
  return N(Dt, null, e, t);
}
function Sa(e, t) {
  const n = N(qt, null, e);
  return (n.staticCount = t), n;
}
function de(e = '', t = !1) {
  return t ? (O(), Ce(qe, null, e)) : N(qe, null, e);
}
function Ie(e) {
  return e == null || typeof e == 'boolean'
    ? N(qe)
    : R(e)
    ? N(fe, null, e.slice())
    : typeof e == 'object'
    ? Xe(e)
    : N(Dt, null, String(e));
}
function Xe(e) {
  return e.el === null || e.memo ? e : Wt(e);
}
function hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (R(t)) n = 16;
  else if (typeof t == 'object')
    if (s & (1 | 64)) {
      const r = t.default;
      r && (r._c && (r._d = !1), hs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(yn in t)
        ? (t._ctx = Se)
        : r === 3 &&
          Se &&
          (Se.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: Se }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [zt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ps(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Qe([t.class, s.class]));
      else if (r === 'style') t.style = In([t.style, s.style]);
      else if (At(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(R(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  Le(e, t, 7, [n, s]);
}
function ms(e, t, n, s) {
  let r;
  const i = n && n[s];
  if (R(e) || ue(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (oe(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const f = o[l];
        r[l] = t(e[f], f, l, i && i[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function pe(e, t, n = {}, s, r) {
  if (Se.isCE) return N('slot', t === 'default' ? null : { name: t }, s && s());
  let i = e[t];
  i && i._c && (i._d = !1), O();
  const o = i && Kr(i(n)),
    l = Ce(
      fe,
      { key: n.key || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    );
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    i && i._c && (i._d = !0),
    l
  );
}
function Kr(e) {
  return e.some((t) =>
    bn(t) ? !(t.type === qe || (t.type === fe && !Kr(t.children))) : !0
  )
    ? e
    : null;
}
const _s = (e) => (e ? (Wr(e) ? gs(e) || e.proxy : _s(e.parent)) : null),
  wn = _e(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Tr(e),
    $forceUpdate: (e) => () => es(e.update),
    $nextTick: (e) => dr.bind(e.proxy),
    $watch: (e) => Ho.bind(e),
  }),
  vl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: u,
      } = e;
      let f;
      if (t[0] !== '$') {
        const E = o[t];
        if (E !== void 0)
          switch (E) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (s !== Z && V(s, t)) return (o[t] = 1), s[t];
          if (r !== Z && V(r, t)) return (o[t] = 2), r[t];
          if ((f = e.propsOptions[0]) && V(f, t)) return (o[t] = 3), i[t];
          if (n !== Z && V(n, t)) return (o[t] = 4), n[t];
          ls && (o[t] = 0);
        }
      }
      const h = wn[t];
      let v, k;
      if (h) return t === '$attrs' && ke(e, 'get', t), h(e);
      if ((v = l.__cssModules) && (v = v[t])) return v;
      if (n !== Z && V(n, t)) return (o[t] = 4), n[t];
      if (((k = u.config.globalProperties), V(k, t))) return k[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      if (r !== Z && V(r, t)) r[t] = n;
      else if (s !== Z && V(s, t)) s[t] = n;
      else if (V(e.props, t)) return !1;
      return t[0] === '$' && t.slice(1) in e ? !1 : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== Z && V(e, o)) ||
        (t !== Z && V(t, o)) ||
        ((l = i[0]) && V(l, o)) ||
        V(s, o) ||
        V(wn, o) ||
        V(r.config.globalProperties, o)
      );
    },
  },
  xl = Hr();
let bl = 0;
function yl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || xl,
    i = {
      uid: bl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Di(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Lr(s, r),
      emitsOptions: _r(s, r),
      emit: null,
      emitted: null,
      propsDefaults: Z,
      inheritAttrs: s.inheritAttrs,
      ctx: Z,
      data: Z,
      props: Z,
      attrs: Z,
      slots: Z,
      refs: Z,
      setupState: Z,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Lo.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let ce = null;
const Et = (e) => {
    (ce = e), e.scope.on();
  },
  ct = () => {
    ce && ce.scope.off(), (ce = null);
  };
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function kl(e, t = !1) {
  $t = t;
  const { props: n, children: s } = e.vnode,
    r = Wr(e);
  tl(e, n, r, t), rl(e, s);
  const i = r ? wl(e, t) : void 0;
  return ($t = !1), i;
}
function wl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Ot(new Proxy(e.ctx, vl)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? El(e) : null);
    Et(e), xt();
    const i = ze(s, e, 0, [e.props, r]);
    if ((nt(), ct(), Fs(i))) {
      if ((i.then(ct, ct), t))
        return i
          .then((o) => {
            zr(e, o, t);
          })
          .catch((o) => {
            Nt(o, e, 0);
          });
      e.asyncDep = i;
    } else zr(e, i, t);
  } else Yr(e, t);
}
function zr(e, t, n) {
  F(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : oe(t) && (e.setupState = ur(t)),
    Yr(e, n);
}
let Jr;
function Yr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Jr && !s.render) {
      const r = s.template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: u } = s,
          f = _e(_e({ isCustomElement: i, delimiters: l }, o), u);
        s.render = Jr(r, f);
      }
    }
    e.render = s.render || Ae;
  }
  Et(e), xt(), Xo(e), nt(), ct();
}
function Cl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ke(e, 'get', '$attrs'), t[n];
    },
  });
}
function El(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Cl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function gs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ur(Ot(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in wn) return wn[n](e);
        },
      }))
    );
}
function $l(e) {
  return (F(e) && e.displayName) || e.name;
}
function Tl(e) {
  return F(e) && '__vccOpts' in e;
}
const z = (e, t) => Co(e, t, $t);
function ut(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? oe(t) && !R(t)
      ? bn(t)
        ? N(e, null, [t])
        : N(e, t)
      : N(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && bn(n) && (n = [n]),
      N(e, t, n));
}
const Pl = '3.2.28',
  Al = 'http://www.w3.org/2000/svg',
  at = typeof document != 'undefined' ? document : null,
  Xr = at && at.createElement('template'),
  Ll = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? at.createElementNS(Al, e)
        : at.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      );
    },
    createText: (e) => at.createTextNode(e),
    createComment: (e) => at.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => at.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return '_value' in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && i)
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Xr.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Xr.content;
        if (s) {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Sl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
function Il(e, t, n) {
  const s = e.style,
    r = ue(n);
  if (n && !r) {
    for (const i in n) vs(s, i, n[i]);
    if (t && !ue(t)) for (const i in t) n[i] == null && vs(s, i, '');
  } else {
    const i = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (s.display = i);
  }
}
const Zr = /\s*!important$/;
function vs(e, t, n) {
  if (R(n)) n.forEach((s) => vs(e, t, s));
  else if (t.startsWith('--')) e.setProperty(t, n);
  else {
    const s = Ml(e, t);
    Zr.test(n)
      ? e.setProperty(_t(s), n.replace(Zr, ''), 'important')
      : (e[s] = n);
  }
}
const Qr = ['Webkit', 'Moz', 'ms'],
  xs = {};
function Ml(e, t) {
  const n = xs[t];
  if (n) return n;
  let s = Re(t);
  if (s !== 'filter' && s in e) return (xs[t] = s);
  s = Qt(s);
  for (let r = 0; r < Qr.length; r++) {
    const i = Qr[r] + s;
    if (i in e) return (xs[t] = i);
  }
  return t;
}
const Gr = 'http://www.w3.org/1999/xlink';
function Ol(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Gr, t.slice(6, t.length))
      : e.setAttributeNS(Gr, t, n);
  else {
    const i = Li(t);
    n == null || (i && !Os(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n);
  }
}
function Rl(e, t, n, s, r, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, r, i), (e[t] = n == null ? '' : n);
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const l = n == null ? '' : n;
    (e.value !== l || e.tagName === 'OPTION') && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  if (n === '' || n == null) {
    const l = typeof e[t];
    if (l === 'boolean') {
      e[t] = Os(n);
      return;
    } else if (n == null && l === 'string') {
      (e[t] = ''), e.removeAttribute(t);
      return;
    } else if (l === 'number') {
      try {
        e[t] = 0;
      } catch {}
      e.removeAttribute(t);
      return;
    }
  }
  try {
    e[t] = n;
  } catch {}
}
let Cn = Date.now,
  ei = !1;
if (typeof window != 'undefined') {
  Cn() > document.createEvent('Event').timeStamp &&
    (Cn = () => performance.now());
  const e = navigator.userAgent.match(/firefox\/(\d+)/i);
  ei = !!(e && Number(e[1]) <= 53);
}
let bs = 0;
const Nl = Promise.resolve(),
  Fl = () => {
    bs = 0;
  },
  Hl = () => bs || (Nl.then(Fl), (bs = Cn()));
function Bl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function jl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ul(e, t, n, s, r = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, u] = Dl(t);
    if (s) {
      const f = (i[t] = ql(s, r));
      Bl(e, l, f, u);
    } else o && (jl(e, l, o, u), (i[t] = void 0));
  }
}
const ti = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (ti.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(ti)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [_t(e.slice(2)), t];
}
function ql(e, t) {
  const n = (s) => {
    const r = s.timeStamp || Cn();
    (ei || r >= n.attached - 1) && Le(Vl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Hl()), n;
}
function Vl(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const ni = /^on[a-z]/,
  Kl = (e, t, n, s, r = !1, i, o, l, u) => {
    t === 'class'
      ? Sl(e, s, r)
      : t === 'style'
      ? Il(e, n, s)
      : At(t)
      ? Mn(t) || Ul(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Wl(e, t, s, r)
        )
      ? Rl(e, t, s, i, o, l, u)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Ol(e, t, s, r));
  };
function Wl(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && ni.test(t) && F(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ni.test(t) && ue(n))
    ? !1
    : t in e;
}
const zl = _e({ patchProp: Kl }, Ll);
let ys,
  si = !1;
function Jl() {
  return (ys = si ? ys : ul(zl)), (si = !0), ys;
}
const Yl = (...e) => {
  const t = Jl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Xl(s);
      if (r) return n(r, !0, r instanceof SVGElement);
    }),
    t
  );
};
function Xl(e) {
  return ue(e) ? document.querySelector(e) : e;
}
var Zl =
  '{"lang":"en-US","title":"Blink Docs","description":"web \u524D\u7AEF \u5B66\u4E60\u6587\u6863","base":"/","head":[],"themeConfig":{"logo":"/images/logo.png","logoSmall":"/images/logo.png","sidebar":[{"text":"cli","children":[{"text":"\u529F\u80FD\u67B6\u6784","children":[{"text":"\u521D\u59CB\u5316\u9879\u76EE\u67B6\u6784","link":"/md/cli/\u529F\u80FD\u67B6\u6784/\u521D\u59CB\u5316\u9879\u76EE\u67B6\u6784"},{"text":"\u57FA\u7840\u67B6\u6784","link":"/md/cli/\u529F\u80FD\u67B6\u6784/\u57FA\u7840\u67B6\u6784"},{"text":"\u6A21\u5757\u62C6\u5206\u67B6\u6784","link":"/md/cli/\u529F\u80FD\u67B6\u6784/\u6A21\u5757\u62C6\u5206\u67B6\u6784"}]},{"text":"\u5F00\u53D1\u6D41\u7A0B","link":"/md/cli/\u5F00\u53D1\u6D41\u7A0B"},{"text":"\u76F8\u5173\u6280\u672F","children":[{"text":"cli-spinner","link":"/md/cli/\u76F8\u5173\u6280\u672F/cli-spinner"},{"text":"commander","link":"/md/cli/\u76F8\u5173\u6280\u672F/commander"},{"text":"ejs","link":"/md/cli/\u76F8\u5173\u6280\u672F/ejs"},{"text":"import-local","link":"/md/cli/\u76F8\u5173\u6280\u672F/import-local"},{"text":"inrequirer","link":"/md/cli/\u76F8\u5173\u6280\u672F/inrequirer"},{"text":"kebab-case","link":"/md/cli/\u76F8\u5173\u6280\u672F/kebab-case"},{"text":"npminstall","link":"/md/cli/\u76F8\u5173\u6280\u672F/npminstall"},{"text":"readline","link":"/md/cli/\u76F8\u5173\u6280\u672F/readline"},{"text":"yargs","link":"/md/cli/\u76F8\u5173\u6280\u672F/yargs"}]},{"text":"\u811A\u624B\u67B6\u4ECB\u7ECD","link":"/md/cli/\u811A\u624B\u67B6\u4ECB\u7ECD"}]},{"text":"CSS","children":[{"text":"\u57FA\u672C\u6982\u5FF5","link":"/md/CSS/\u57FA\u672C\u6982\u5FF5"},{"text":"\u5E38\u89C1\u95EE\u9898\u548C\u5B9E\u73B0","link":"/md/CSS/\u5E38\u89C1\u95EE\u9898\u548C\u5B9E\u73B0"}]},{"text":"ECMAScript","children":[{"text":"ES\u89C4\u8303","link":"/md/ECMAScript/ES\u89C4\u8303"},{"text":"new\u5177\u4F53\u8FC7\u7A0B","link":"/md/ECMAScript/new\u5177\u4F53\u8FC7\u7A0B"},{"text":"typescript","link":"/md/ECMAScript/typescript"},{"text":"\u5173\u952E\u6982\u5FF5","link":"/md/ECMAScript/\u5173\u952E\u6982\u5FF5"},{"text":"\u51FD\u6570","link":"/md/ECMAScript/\u51FD\u6570"},{"text":"\u7C7B\u578B","link":"/md/ECMAScript/\u7C7B\u578B"},{"text":"\u7EE7\u627F","link":"/md/ECMAScript/\u7EE7\u627F"},{"text":"\u9762\u5411\u5BF9\u8C61","link":"/md/ECMAScript/\u9762\u5411\u5BF9\u8C61"}]},{"text":"Git","children":[{"text":"git-flow","link":"/md/Git/git-flow"},{"text":"gitlab","children":[{"text":"gitlab-runner","link":"/md/Git/gitlab/gitlab-runner"}]}]},{"text":"NodeJs","children":[{"text":"Date\u548C\u65F6\u533A","link":"/md/NodeJs/Date\u548C\u65F6\u533A"},{"text":"npm\u4E0Epackage-json","link":"/md/NodeJs/npm\u4E0Epackage-json"},{"text":"pm2","link":"/md/NodeJs/pm2"},{"text":"require","link":"/md/NodeJs/require"},{"text":"\u5168\u5C40\u53D8\u91CF","link":"/md/NodeJs/\u5168\u5C40\u53D8\u91CF"},{"text":"\u672C\u5730\u8C03\u8BD5npm\u5305","link":"/md/NodeJs/\u672C\u5730\u8C03\u8BD5npm\u5305"},{"text":"\u767B\u5F55\u65B9\u5F0F","link":"/md/NodeJs/\u767B\u5F55\u65B9\u5F0F"},{"text":"\u8FDB\u7A0B","link":"/md/NodeJs/\u8FDB\u7A0B"}]},{"text":"VSCode","children":[{"text":"\u4EE3\u7801\u7247\u6BB5","link":"/md/VSCode/\u4EE3\u7801\u7247\u6BB5"}]},{"text":"Vue","children":[{"text":"Vue2","children":[{"text":"\u76F8\u5173\u6982\u5FF5\u548C\u539F\u7406","link":"/md/Vue/Vue2/\u76F8\u5173\u6982\u5FF5\u548C\u539F\u7406"},{"text":"\u7EC4\u4EF6\u4E2D\u4F7F\u7528Echarts","link":"/md/Vue/Vue2/\u7EC4\u4EF6\u4E2D\u4F7F\u7528Echarts"}]},{"text":"Vue3","children":[{"text":"compositionAPI","link":"/md/Vue/Vue3/compositionAPI"},{"text":"\u4E0EVue2\u6BD4\u8F83\u7684\u4F18\u5316","link":"/md/Vue/Vue3/\u4E0EVue2\u6BD4\u8F83\u7684\u4F18\u5316"},{"text":"\u4E0EVue2\u6BD4\u8F83\u7684\u65B0\u7279\u6027","link":"/md/Vue/Vue3/\u4E0EVue2\u6BD4\u8F83\u7684\u65B0\u7279\u6027"},{"text":"\u526F\u4F5C\u7528","link":"/md/Vue/Vue3/\u526F\u4F5C\u7528"},{"text":"\u54CD\u5E94\u5F0F\u5BF9\u8C61","link":"/md/Vue/Vue3/\u54CD\u5E94\u5F0F\u5BF9\u8C61"}]},{"text":"Vuex","link":"/md/Vue/Vuex"},{"text":"\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\u76844\u79CD\u65B9\u6CD5","link":"/md/Vue/\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\u76844\u79CD\u65B9\u6CD5"},{"text":"\u7EC4\u4EF6\u5E93\u7684\u521B\u5EFA","link":"/md/Vue/\u7EC4\u4EF6\u5E93\u7684\u521B\u5EFA"}]},{"text":"\u4E1A\u52A1\u5B9E\u73B0","children":[{"text":"\u5F55\u97F3","link":"/md/\u4E1A\u52A1\u5B9E\u73B0/\u5F55\u97F3"},{"text":"\u6253\u5370\u9875\u9762\u4E2D\u7684\u5143\u7D20","link":"/md/\u4E1A\u52A1\u5B9E\u73B0/\u6253\u5370\u9875\u9762\u4E2D\u7684\u5143\u7D20"},{"text":"\u767B\u5F55","children":[{"text":"vue2-element","link":"/md/\u4E1A\u52A1\u5B9E\u73B0/\u767B\u5F55/vue2-element"},{"text":"\u4E3B\u8981\u903B\u8F91","link":"/md/\u4E1A\u52A1\u5B9E\u73B0/\u767B\u5F55/\u4E3B\u8981\u903B\u8F91"}]},{"text":"\u8868\u683C\u4E0B\u8F7D","link":"/md/\u4E1A\u52A1\u5B9E\u73B0/\u8868\u683C\u4E0B\u8F7D"}]},{"text":"\u5176\u4ED6","children":[{"text":"cron\u8868\u8FBE\u5F0F","link":"/md/\u5176\u4ED6/cron\u8868\u8FBE\u5F0F"},{"text":"glob","link":"/md/\u5176\u4ED6/glob"},{"text":"\u5730\u56FE\u6982\u5FF5","link":"/md/\u5176\u4ED6/\u5730\u56FE\u6982\u5FF5"},{"text":"\u6B63\u5219\u8868\u8FBE\u5F0F","link":"/md/\u5176\u4ED6/\u6B63\u5219\u8868\u8FBE\u5F0F"}]},{"text":"\u5E38\u8003\u7B97\u6CD5","children":[{"text":"apply","link":"/md/\u5E38\u8003\u7B97\u6CD5/apply"},{"text":"Proxy\u54CD\u5E94\u5F0F","link":"/md/\u5E38\u8003\u7B97\u6CD5/Proxy\u54CD\u5E94\u5F0F"},{"text":"Vue2\u54CD\u5E94\u5F0F","link":"/md/\u5E38\u8003\u7B97\u6CD5/Vue2\u54CD\u5E94\u5F0F"},{"text":"\u53D1\u5E03\u8BA2\u9605","link":"/md/\u5E38\u8003\u7B97\u6CD5/\u53D1\u5E03\u8BA2\u9605"},{"text":"\u6570\u7EC4\u76F8\u5173","link":"/md/\u5E38\u8003\u7B97\u6CD5/\u6570\u7EC4\u76F8\u5173"},{"text":"\u6811\u7684\u904D\u5386","link":"/md/\u5E38\u8003\u7B97\u6CD5/\u6811\u7684\u904D\u5386"},{"text":"\u6DF1\u590D\u5236","link":"/md/\u5E38\u8003\u7B97\u6CD5/\u6DF1\u590D\u5236"},{"text":"\u9632\u6296\u548C\u8282\u6D41","link":"/md/\u5E38\u8003\u7B97\u6CD5/\u9632\u6296\u548C\u8282\u6D41"}]},{"text":"\u6027\u80FD","children":[{"text":"\u5206\u6790\u5DE5\u5177","link":"/md/\u6027\u80FD/\u5206\u6790\u5DE5\u5177"},{"text":"\u524D\u7AEF\u6027\u80FD\u4F18\u5316","link":"/md/\u6027\u80FD/\u524D\u7AEF\u6027\u80FD\u4F18\u5316"}]},{"text":"\u6570\u636E\u5E93","children":[{"text":"mysql","link":"/md/\u6570\u636E\u5E93/mysql"},{"text":"sequelize","link":"/md/\u6570\u636E\u5E93/sequelize"}]},{"text":"\u670D\u52A1\u5668","children":[{"text":"docker","link":"/md/\u670D\u52A1\u5668/docker"},{"text":"nginx","link":"/md/\u670D\u52A1\u5668/nginx"}]},{"text":"\u6784\u5EFA","children":[{"text":"nodemon","link":"/md/\u6784\u5EFA/nodemon"},{"text":"rollup","link":"/md/\u6784\u5EFA/rollup"},{"text":"vite","link":"/md/\u6784\u5EFA/vite"},{"text":"webpack","link":"/md/\u6784\u5EFA/webpack"},{"text":"\u4EE3\u7801\u89C4\u8303","children":[{"text":"editor-config","link":"/md/\u6784\u5EFA/\u4EE3\u7801\u89C4\u8303/editor-config"},{"text":"ESLint","link":"/md/\u6784\u5EFA/\u4EE3\u7801\u89C4\u8303/ESLint"},{"text":"\u9879\u76EE\u7ED3\u6784\u89C4\u8303","link":"/md/\u6784\u5EFA/\u4EE3\u7801\u89C4\u8303/\u9879\u76EE\u7ED3\u6784\u89C4\u8303"}]},{"text":"\u5305\u7BA1\u7406-lerna","children":[{"text":"Lerna\u6E90\u7801","link":"/md/\u6784\u5EFA/\u5305\u7BA1\u7406-lerna/Lerna\u6E90\u7801"},{"text":"Lerna\u7B80\u4ECB","link":"/md/\u6784\u5EFA/\u5305\u7BA1\u7406-lerna/Lerna\u7B80\u4ECB"}]},{"text":"\u5305\u7BA1\u7406-pnpm","children":[{"text":"\u7B80\u4ECB","link":"/md/\u6784\u5EFA/\u5305\u7BA1\u7406-pnpm/\u7B80\u4ECB"}]},{"text":"\u6301\u7EED\u96C6\u6210\u90E8\u7F72CI","children":[{"text":"gitlab-runner","link":"/md/\u6784\u5EFA/\u6301\u7EED\u96C6\u6210\u90E8\u7F72CI/gitlab-runner"},{"text":"travis","link":"/md/\u6784\u5EFA/\u6301\u7EED\u96C6\u6210\u90E8\u7F72CI/travis"}]},{"text":"\u63D0\u4EA4\u89C4\u8303","children":[{"text":"commitizen","link":"/md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/commitizen"},{"text":"commitlint","link":"/md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/commitlint"},{"text":"husky","link":"/md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/husky"},{"text":"lint-staged","link":"/md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/lint-staged"},{"text":"pretty-quick","link":"/md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/pretty-quick"}]},{"text":"\u6587\u6863\u6784\u5EFA","children":[{"text":"vitepress","link":"/md/\u6784\u5EFA/\u6587\u6863\u6784\u5EFA/vitepress"}]},{"text":"\u6A21\u5757\u5316","link":"/md/\u6784\u5EFA/\u6A21\u5757\u5316"},{"text":"\u79C1\u6709\u6A21\u5757\u4ED3\u5E93","children":[{"text":"verdaccio","link":"/md/\u6784\u5EFA/\u79C1\u6709\u6A21\u5757\u4ED3\u5E93/verdaccio"}]}]},{"text":"\u6D4F\u89C8\u5668\u8BBE\u5907","children":[{"text":"GC\uFF08\u5783\u573E\u56DE\u6536\u673A\u5236\uFF09","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/GC\uFF08\u5783\u573E\u56DE\u6536\u673A\u5236\uFF09"},{"text":"\u4E8B\u4EF6\u5FAA\u73AF","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u4E8B\u4EF6\u5FAA\u73AF"},{"text":"\u50A8\u5B58","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u50A8\u5B58"},{"text":"\u5173\u952E\u6E32\u67D3\u8DEF\u5F84","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u5173\u952E\u6E32\u67D3\u8DEF\u5F84"},{"text":"\u517C\u5BB9","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u517C\u5BB9"},{"text":"\u5C0F\u7A0B\u5E8F","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u5C0F\u7A0B\u5E8F"},{"text":"\u76D2\u6A21\u578B","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u76D2\u6A21\u578B"},{"text":"\u76F8\u5173\u6982\u5FF5","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u76F8\u5173\u6982\u5FF5"},{"text":"\u8DE8\u57DF","link":"/md/\u6D4F\u89C8\u5668\u8BBE\u5907/\u8DE8\u57DF"}]},{"text":"\u7F51\u7EDC","children":[{"text":"GraphQL\u548CRestfulAPI","link":"/md/\u7F51\u7EDC/GraphQL\u548CRestfulAPI"},{"text":"HTTPS","link":"/md/\u7F51\u7EDC/HTTPS"},{"text":"HTTP\u57FA\u7840","link":"/md/\u7F51\u7EDC/HTTP\u57FA\u7840"},{"text":"HTTP\u7248\u672C","link":"/md/\u7F51\u7EDC/HTTP\u7248\u672C"},{"text":"SEO","link":"/md/\u7F51\u7EDC/SEO"},{"text":"web\u7684\u653B\u51FB\u6280\u672F","link":"/md/\u7F51\u7EDC/web\u7684\u653B\u51FB\u6280\u672F"},{"text":"\u7F51\u7EDC\u57FA\u7840","link":"/md/\u7F51\u7EDC/\u7F51\u7EDC\u57FA\u7840"}]}]},"locales":{},"langs":{},"scrollOffset":90}';
const ri = /^https?:/i,
  $e = typeof window != 'undefined';
function Ql(e, t) {
  t.sort((n, s) => {
    const r = s.split('/').length - n.split('/').length;
    return r !== 0 ? r : s.length - n.length;
  });
  for (const n of t) if (e.startsWith(n)) return n;
}
function ii(e, t) {
  const n = Ql(t, Object.keys(e));
  return n ? e[n] : void 0;
}
function Gl(e) {
  const { locales: t } = e.themeConfig || {},
    n = e.locales;
  return t && n
    ? Object.keys(t).reduce(
        (s, r) => ((s[r] = { label: t[r].label, lang: n[r].lang }), s),
        {}
      )
    : {};
}
function ec(e, t) {
  t = tc(e, t);
  const n = ii(e.locales || {}, t),
    s = ii(e.themeConfig.locales || {}, t);
  return Object.assign({}, e, n, {
    themeConfig: Object.assign({}, e.themeConfig, s, { locales: {} }),
    lang: (n || e).lang,
    locales: {},
    langs: Gl(e),
  });
}
function tc(e, t) {
  if (!$e) return t;
  const n = e.base,
    s = n.endsWith('/') ? n.slice(0, -1) : n;
  return t.slice(s.length);
}
const oi = Symbol(),
  ks = vo(nc(Zl));
function nc(e) {
  return JSON.parse(e);
}
function sc(e) {
  const t = z(() => ec(ks.value, e.path));
  return {
    site: t,
    theme: z(() => t.value.themeConfig),
    page: z(() => e.data),
    frontmatter: z(() => e.data.frontmatter),
    lang: z(() => t.value.lang),
    localePath: z(() => {
      const { langs: n, lang: s } = t.value,
        r = Object.keys(n).find((i) => n[i].lang === s);
      return Jt(r || '/');
    }),
    title: z(() =>
      e.data.title ? e.data.title + ' | ' + t.value.title : t.value.title
    ),
    description: z(() => e.data.description || t.value.description),
  };
}
function Te() {
  const e = Ut(oi);
  if (!e) throw new Error('vitepress data not properly injected in app');
  return e;
}
function rc(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/');
}
function Jt(e) {
  return ri.test(e) ? e : rc(ks.value.base, e);
}
function li(e) {
  let t = e.replace(/\.html$/, '');
  if (((t = decodeURIComponent(t)), t.endsWith('/') && (t += 'index'), $e)) {
    const n = '/';
    t = t.slice(n.length).replace(/\//g, '_') + '.md';
    const s = __VP_HASH_MAP__[t.toLowerCase()];
    t = `${n}assets/${t}.${s}.js`;
  } else t = `./${t.slice(1).replace(/\//g, '_')}.md.js`;
  return t;
}
const ci = Symbol(),
  ui = 'http://a.com',
  ic = () => ({ path: '/', component: null, data: { frontmatter: {} } });
function oc(e, t) {
  const n = cn(ic());
  function s(o = $e ? location.href : '/') {
    const l = new URL(o, ui);
    return (
      !l.pathname.endsWith('/') &&
        !l.pathname.endsWith('.html') &&
        ((l.pathname += '.html'), (o = l.pathname + l.search + l.hash)),
      $e &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title
        ),
        history.pushState(null, '', o)),
      i(o)
    );
  }
  let r = null;
  async function i(o, l = 0) {
    const u = new URL(o, ui),
      f = (r = u.pathname);
    try {
      let h = e(f);
      if (
        ('then' in h && typeof h.then == 'function' && (h = await h), r === f)
      ) {
        r = null;
        const { default: v, __pageData: k } = h;
        if (!v) throw new Error(`Invalid route component: ${v}`);
        (n.path = f),
          (n.component = Ot(v)),
          (n.data = Ot(JSON.parse(k))),
          $e &&
            dr(() => {
              if (u.hash && !l) {
                let E = null;
                try {
                  E = document.querySelector(decodeURIComponent(u.hash));
                } catch (T) {
                  console.warn(T);
                }
                if (E) {
                  ai(E, u.hash);
                  return;
                }
              }
              window.scrollTo(0, l);
            });
      }
    } catch (h) {
      h.message.match(/fetch/) || console.error(h),
        r === f && ((r = null), (n.path = f), (n.component = t ? Ot(t) : null));
    }
  }
  return (
    $e &&
      (window.addEventListener(
        'click',
        (o) => {
          const l = o.target.closest('a');
          if (l) {
            const {
                href: u,
                protocol: f,
                hostname: h,
                pathname: v,
                hash: k,
                target: E,
              } = l,
              T = window.location,
              H = v.match(/\.\w+$/);
            !o.ctrlKey &&
              !o.shiftKey &&
              !o.altKey &&
              !o.metaKey &&
              E !== '_blank' &&
              f === T.protocol &&
              h === T.hostname &&
              !(H && H[0] !== '.html') &&
              (o.preventDefault(),
              v === T.pathname
                ? k &&
                  k !== T.hash &&
                  (history.pushState(null, '', k),
                  window.dispatchEvent(new Event('hashchange')),
                  ai(l, k, l.classList.contains('header-anchor')))
                : s(u));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', (o) => {
        i(location.href, (o.state && o.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', (o) => {
        o.preventDefault();
      })),
    { route: n, go: s }
  );
}
function lc() {
  const e = Ut(ci);
  if (!e) throw new Error('useRouter() is called without provider.');
  return e;
}
function Ze() {
  return lc().route;
}
function ai(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains('.header-anchor')
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (r) {
    console.warn(r);
  }
  if (s) {
    let r = ks.value.scrollOffset;
    typeof r == 'string' &&
      (r = document.querySelector(r).getBoundingClientRect().bottom + 24);
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - r + i;
    !n || Math.abs(o - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, o)
      : window.scrollTo({ left: 0, top: o, behavior: 'smooth' });
  }
}
function cc(e, t) {
  let n = [],
    s = !0;
  const r = (i) => {
    if (s) {
      s = !1;
      return;
    }
    const o = [],
      l = Math.min(n.length, i.length);
    for (let u = 0; u < l; u++) {
      let f = n[u];
      const [h, v, k = ''] = i[u];
      if (f.tagName.toLocaleLowerCase() === h) {
        for (const E in v)
          f.getAttribute(E) !== v[E] && f.setAttribute(E, v[E]);
        for (let E = 0; E < f.attributes.length; E++) {
          const T = f.attributes[E].name;
          T in v || f.removeAttribute(T);
        }
        f.innerHTML !== k && (f.innerHTML = k);
      } else
        document.head.removeChild(f), (f = fi(i[u])), document.head.append(f);
      o.push(f);
    }
    n.slice(l).forEach((u) => document.head.removeChild(u)),
      i.slice(l).forEach((u) => {
        const f = fi(u);
        document.head.appendChild(f), o.push(f);
      }),
      (n = o);
  };
  Fo(() => {
    const i = e.data,
      o = t.value,
      l = i && i.title,
      u = i && i.description,
      f = i && i.frontmatter.head;
    (document.title = (l ? l + ' | ' : '') + o.title),
      document
        .querySelector('meta[name=description]')
        .setAttribute('content', u || o.description),
      r([...(f ? ac(f) : [])]);
  });
}
function fi([e, t, n]) {
  const s = document.createElement(e);
  for (const r in t) s.setAttribute(r, t[r]);
  return n && (s.innerHTML = n), s;
}
function uc(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description';
}
function ac(e) {
  return e.filter((t) => !uc(t));
}
const fc = le({
  name: 'VitePressContent',
  setup() {
    const e = Ze();
    return () =>
      ut('div', { style: { position: 'relative' } }, [
        e.component ? ut(e.component) : null,
      ]);
  },
});
var me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t) n[s] = r;
  return n;
};
const dc = /#.*$/,
  hc = /(index)?\.(md|html)$/,
  En = /\/$/,
  pc = /^[a-z]+:/i;
function ws(e) {
  return Array.isArray(e);
}
function Cs(e) {
  return pc.test(e);
}
function mc(e, t) {
  if (t === void 0) return !1;
  const n = di(`/${e.data.relativePath}`),
    s = di(t);
  return n === s;
}
function di(e) {
  return decodeURI(e).replace(dc, '').replace(hc, '');
}
function _c(e, t) {
  const n = e.endsWith('/'),
    s = t.startsWith('/');
  return n && s ? e.slice(0, -1) + t : !n && !s ? `${e}/${t}` : e + t;
}
function Es(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function hi(e) {
  return e.replace(/(index)?(\.(md|html))?$/, '') || '/';
}
function gc(e) {
  return e === !1 || e === 'auto' || ws(e);
}
function vc(e) {
  return e.children !== void 0;
}
function xc(e) {
  return ws(e) ? e.length === 0 : !e;
}
function $s(e, t) {
  if (gc(e)) return e;
  t = Es(t);
  for (const n in e) if (t.startsWith(Es(n))) return e[n];
  return 'auto';
}
function pi(e) {
  return e.reduce(
    (t, n) => (
      n.link && t.push({ text: n.text, link: hi(n.link) }),
      vc(n) && (t = [...t, ...pi(n.children)]),
      t
    ),
    []
  );
}
const bc = ['href', 'aria-label'],
  yc = ['src'],
  kc = le({
    setup(e) {
      const { site: t, theme: n, localePath: s } = Te();
      return (r, i) => (
        O(),
        K(
          'a',
          {
            class: 'nav-bar-title',
            href: P(s),
            'aria-label': `${P(t).title}, back to home`,
          },
          [
            P(n).logo
              ? (O(),
                K(
                  'img',
                  { key: 0, class: 'logo', src: P(Jt)(P(n).logo), alt: 'Logo' },
                  null,
                  8,
                  yc
                ))
              : de('', !0),
            zt(' ' + Oe(P(t).title), 1),
          ],
          8,
          bc
        )
      );
    },
  });
var wc = me(kc, [['__scopeId', 'data-v-cc01ef16']]);
function Cc() {
  const { site: e, localePath: t, theme: n } = Te();
  return z(() => {
    const s = e.value.langs,
      r = Object.keys(s);
    if (r.length < 2) return null;
    const o = Ze().path.replace(t.value, ''),
      l = r.map((f) => ({ text: s[f].label, link: `${f}${o}` }));
    return { text: n.value.selectText || 'Languages', items: l };
  });
}
const Ec = ['GitHub', 'GitLab', 'Bitbucket'].map((e) => [
  e,
  new RegExp(e, 'i'),
]);
function $c() {
  const { site: e } = Te();
  return z(() => {
    const t = e.value.themeConfig,
      n = t.docsRepo || t.repo;
    if (!n) return null;
    const s = Tc(n);
    return { text: Pc(s, t.repoLabel), link: s };
  });
}
function Tc(e) {
  return ri.test(e) ? e : `https://github.com/${e}`;
}
function Pc(e, t) {
  if (t) return t;
  const n = e.match(/^https?:\/\/[^/]+/);
  if (!n) return 'Source';
  const s = Ec.find(([r, i]) => i.test(n[0]));
  return s && s[0] ? s[0] : 'Source';
}
function mi(e) {
  const t = Ze(),
    n = Cs(e.value.link);
  return {
    props: z(() => {
      const r = _i(`/${t.data.relativePath}`);
      let i = !1;
      if (e.value.activeMatch) i = new RegExp(e.value.activeMatch).test(r);
      else {
        const o = _i(e.value.link);
        i = o === '/' ? o === r : r.startsWith(o);
      }
      return {
        class: { active: i, isExternal: n },
        href: n ? e.value.link : Jt(e.value.link),
        target: e.value.target || (n ? '_blank' : null),
        rel: e.value.rel || (n ? 'noopener noreferrer' : null),
        'aria-label': e.value.ariaLabel,
      };
    }),
    isExternal: n,
  };
}
function _i(e) {
  return e
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\.(html|md)$/, '')
    .replace(/\/index$/, '/');
}
const Ac = {},
  Lc = {
    class: 'icon outbound',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    x: '0px',
    y: '0px',
    viewBox: '0 0 100 100',
    width: '15',
    height: '15',
  },
  Sc = U(
    'path',
    {
      fill: 'currentColor',
      d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
    },
    null,
    -1
  ),
  Ic = U(
    'polygon',
    {
      fill: 'currentColor',
      points:
        '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
    },
    null,
    -1
  ),
  Mc = [Sc, Ic];
function Oc(e, t) {
  return O(), K('svg', Lc, Mc);
}
var Ts = me(Ac, [['render', Oc]]);
const Rc = { class: 'nav-link' },
  Nc = le({
    props: { item: null },
    setup(e) {
      const n = ar(e),
        { props: s, isExternal: r } = mi(n.item);
      return (i, o) => (
        O(),
        K('div', Rc, [
          U(
            'a',
            ps({ class: 'item' }, P(s)),
            [
              zt(Oe(e.item.text) + ' ', 1),
              P(r) ? (O(), Ce(Ts, { key: 0 })) : de('', !0),
            ],
            16
          ),
        ])
      );
    },
  });
var gi = me(Nc, [['__scopeId', 'data-v-b8818f8c']]);
const Fc = (e) => (gr('data-v-bbc27490'), (e = e()), vr(), e),
  Hc = { class: 'nav-dropdown-link-item' },
  Bc = Fc(() => U('span', { class: 'arrow' }, null, -1)),
  jc = { class: 'text' },
  Uc = { class: 'icon' },
  Dc = le({
    props: { item: null },
    setup(e) {
      const n = ar(e),
        { props: s, isExternal: r } = mi(n.item);
      return (i, o) => (
        O(),
        K('div', Hc, [
          U(
            'a',
            ps({ class: 'item' }, P(s)),
            [
              Bc,
              U('span', jc, Oe(e.item.text), 1),
              U('span', Uc, [P(r) ? (O(), Ce(Ts, { key: 0 })) : de('', !0)]),
            ],
            16
          ),
        ])
      );
    },
  });
var qc = me(Dc, [['__scopeId', 'data-v-bbc27490']]);
const Vc = ['aria-label'],
  Kc = { class: 'button-text' },
  Wc = { class: 'dialog' },
  zc = le({
    props: { item: null },
    setup(e) {
      const t = Ze(),
        n = st(!1);
      rt(
        () => t.path,
        () => {
          n.value = !1;
        }
      );
      function s() {
        n.value = !n.value;
      }
      return (r, i) => (
        O(),
        K(
          'div',
          { class: Qe(['nav-dropdown-link', { open: n.value }]) },
          [
            U(
              'button',
              { class: 'button', 'aria-label': e.item.ariaLabel, onClick: s },
              [
                U('span', Kc, Oe(e.item.text), 1),
                U(
                  'span',
                  { class: Qe(['button-arrow', n.value ? 'down' : 'right']) },
                  null,
                  2
                ),
              ],
              8,
              Vc
            ),
            U('ul', Wc, [
              (O(!0),
              K(
                fe,
                null,
                ms(
                  e.item.items,
                  (o) => (
                    O(),
                    K('li', { key: o.text, class: 'dialog-item' }, [
                      N(qc, { item: o }, null, 8, ['item']),
                    ])
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  });
var vi = me(zc, [['__scopeId', 'data-v-56bf3a3f']]);
const Jc = { key: 0, class: 'nav-links' },
  Yc = { key: 1, class: 'item' },
  Xc = { key: 2, class: 'item' },
  Zc = le({
    setup(e) {
      const { theme: t } = Te(),
        n = Cc(),
        s = $c(),
        r = z(() => t.value.nav || s.value || n.value);
      return (i, o) =>
        P(r)
          ? (O(),
            K('nav', Jc, [
              P(t).nav
                ? (O(!0),
                  K(
                    fe,
                    { key: 0 },
                    ms(
                      P(t).nav,
                      (l) => (
                        O(),
                        K('div', { key: l.text, class: 'item' }, [
                          l.items
                            ? (O(),
                              Ce(vi, { key: 0, item: l }, null, 8, ['item']))
                            : (O(),
                              Ce(gi, { key: 1, item: l }, null, 8, ['item'])),
                        ])
                      )
                    ),
                    128
                  ))
                : de('', !0),
              P(n)
                ? (O(),
                  K('div', Yc, [N(vi, { item: P(n) }, null, 8, ['item'])]))
                : de('', !0),
              P(s)
                ? (O(),
                  K('div', Xc, [N(gi, { item: P(s) }, null, 8, ['item'])]))
                : de('', !0),
            ]))
          : de('', !0);
    },
  });
var xi = me(Zc, [['__scopeId', 'data-v-eab3edfe']]);
const Qc = { emits: ['toggle'] },
  Gc = U(
    'svg',
    {
      class: 'icon',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true',
      role: 'img',
      viewBox: '0 0 448 512',
    },
    [
      U('path', {
        fill: 'currentColor',
        d: 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z',
        class: '',
      }),
    ],
    -1
  ),
  eu = [Gc];
function tu(e, t, n, s, r, i) {
  return (
    O(),
    K(
      'div',
      {
        class: 'sidebar-button',
        onClick: t[0] || (t[0] = (o) => e.$emit('toggle')),
      },
      eu
    )
  );
}
var nu = me(Qc, [['render', tu]]);
const su = (e) => (gr('data-v-675d8756'), (e = e()), vr(), e),
  ru = { class: 'nav-bar' },
  iu = su(() => U('div', { class: 'flex-grow' }, null, -1)),
  ou = { class: 'nav' },
  lu = le({
    emits: ['toggle'],
    setup(e) {
      return (t, n) => (
        O(),
        K('header', ru, [
          N(nu, { onToggle: n[0] || (n[0] = (s) => t.$emit('toggle')) }),
          N(wc),
          iu,
          U('div', ou, [N(xi)]),
          pe(t.$slots, 'search', {}, void 0, !0),
        ])
      );
    },
  });
var cu = me(lu, [['__scopeId', 'data-v-675d8756']]);
function uu() {
  let e = null,
    t = null;
  const n = pu(s, 300);
  function s() {
    const o = au(),
      l = fu(o);
    for (let u = 0; u < l.length; u++) {
      const f = l[u],
        h = l[u + 1],
        [v, k] = hu(u, f, h);
      if (v) {
        history.replaceState(null, document.title, k || ' '), r(k);
        return;
      }
    }
  }
  function r(o) {
    if (
      (i(t), i(e), (t = document.querySelector(`.sidebar a[href="${o}"]`)), !t)
    )
      return;
    t.classList.add('active');
    const l = t.closest('.sidebar-links > ul > li');
    l && l !== t.parentElement
      ? ((e = l.querySelector('a')), e && e.classList.add('active'))
      : (e = null);
  }
  function i(o) {
    o && o.classList.remove('active');
  }
  Ct(() => {
    s(), window.addEventListener('scroll', n);
  }),
    Cr(() => {
      r(decodeURIComponent(location.hash));
    }),
    mn(() => {
      window.removeEventListener('scroll', n);
    });
}
function au() {
  return [].slice.call(
    document.querySelectorAll('.sidebar a.sidebar-link-item')
  );
}
function fu(e) {
  return [].slice
    .call(document.querySelectorAll('.header-anchor'))
    .filter((t) => e.some((n) => n.hash === t.hash));
}
function du() {
  return document.querySelector('.nav-bar').offsetHeight;
}
function bi(e) {
  const t = du();
  return e.parentElement.offsetTop - t - 15;
}
function hu(e, t, n) {
  const s = window.scrollY;
  return e === 0 && s === 0
    ? [!0, null]
    : s < bi(t)
    ? [!1, null]
    : !n || s < bi(n)
    ? [!0, decodeURIComponent(t.hash)]
    : [!1, null];
}
function pu(e, t) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, t));
  };
}
function mu() {
  const e = Ze(),
    { site: t } = Te();
  return (
    uu(),
    z(() => {
      const n = e.data.headers,
        s = e.data.frontmatter.sidebar,
        r = e.data.frontmatter.sidebarDepth;
      if (s === !1) return [];
      if (s === 'auto') return yi(n, r);
      const i = $s(t.value.themeConfig.sidebar, e.data.relativePath);
      return i === !1 ? [] : i === 'auto' ? yi(n, r) : i;
    })
  );
}
function yi(e, t) {
  const n = [];
  if (e === void 0) return [];
  let s;
  return (
    e.forEach(({ level: r, title: i, slug: o }) => {
      if (r - 1 > t) return;
      const l = { text: i, link: `#${o}` };
      r === 2
        ? ((s = l), n.push(l))
        : s && (s.children || (s.children = [])).push(l);
    }),
    n
  );
}
const ki = (e) => {
  const t = Ze(),
    { site: n, frontmatter: s } = Te(),
    r = e.depth || 1,
    i = s.value.sidebarDepth || 1 / 0,
    o = t.data.headers,
    l = e.item.text,
    u = _u(n.value.base, e.item.link),
    f = e.item.children,
    h = mc(t, e.item.link),
    v = r < i ? wi(h, f, o, r + 1) : null;
  return ut('li', { class: 'sidebar-link' }, [
    ut(
      u ? 'a' : 'p',
      { class: { 'sidebar-link-item': !0, active: h }, href: u },
      l
    ),
    v,
  ]);
};
function _u(e, t) {
  return t === void 0 || t.startsWith('#') ? t : _c(e, t);
}
function wi(e, t, n, s = 1) {
  return t && t.length > 0
    ? ut(
        'ul',
        { class: 'sidebar-links' },
        t.map((r) => ut(ki, { item: r, depth: s }))
      )
    : e && n
    ? wi(!1, gu(n), void 0, s)
    : null;
}
function gu(e) {
  return Ci(vu(e));
}
function vu(e) {
  e = e.map((n) => Object.assign({}, n));
  let t;
  return (
    e.forEach((n) => {
      n.level === 2 ? (t = n) : t && (t.children || (t.children = [])).push(n);
    }),
    e.filter((n) => n.level === 2)
  );
}
function Ci(e) {
  return e.map((t) => ({
    text: t.title,
    link: `#${t.slug}`,
    children: t.children ? Ci(t.children) : void 0,
  }));
}
const xu = { key: 0, class: 'sidebar-links' },
  bu = le({
    setup(e) {
      const t = mu();
      return (n, s) =>
        P(t).length > 0
          ? (O(),
            K('ul', xu, [
              (O(!0),
              K(
                fe,
                null,
                ms(
                  P(t),
                  (r) => (O(), Ce(P(ki), { item: r }, null, 8, ['item']))
                ),
                256
              )),
            ]))
          : de('', !0);
    },
  });
const yu = le({
  props: { open: { type: Boolean } },
  setup(e) {
    return (t, n) => (
      O(),
      K(
        'aside',
        { class: Qe(['sidebar', { open: e.open }]) },
        [
          N(xi, { class: 'nav' }),
          pe(t.$slots, 'sidebar-top', {}, void 0, !0),
          N(bu),
          pe(t.$slots, 'sidebar-bottom', {}, void 0, !0),
        ],
        2
      )
    );
  },
});
var ku = me(yu, [['__scopeId', 'data-v-83e92a68']]);
const wu = /bitbucket.org/;
function Cu() {
  const { page: e, theme: t, frontmatter: n } = Te(),
    s = z(() => {
      const {
          repo: i,
          docsDir: o = '',
          docsBranch: l = 'master',
          docsRepo: u = i,
          editLinks: f,
        } = t.value,
        h = n.value.editLink != null ? n.value.editLink : f,
        { relativePath: v } = e.value;
      return !h || !v || !i ? null : Eu(i, u, o, l, v);
    }),
    r = z(() => t.value.editLinkText || 'Edit this page');
  return { url: s, text: r };
}
function Eu(e, t, n, s, r) {
  return wu.test(e) ? Tu(e, t, n, s, r) : $u(e, t, n, s, r);
}
function $u(e, t, n, s, r) {
  return (
    (Cs(t) ? t : `https://github.com/${t}`).replace(En, '') +
    `/edit/${s}/` +
    (n ? n.replace(En, '') + '/' : '') +
    r
  );
}
function Tu(e, t, n, s, r) {
  return (
    (Cs(t) ? t : e).replace(En, '') +
    `/src/${s}/` +
    (n ? n.replace(En, '') + '/' : '') +
    r +
    `?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`
  );
}
const Pu = { class: 'edit-link' },
  Au = ['href'],
  Lu = le({
    setup(e) {
      const { url: t, text: n } = Cu();
      return (s, r) => (
        O(),
        K('div', Pu, [
          P(t)
            ? (O(),
              K(
                'a',
                {
                  key: 0,
                  class: 'link',
                  href: P(t),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                [zt(Oe(P(n)) + ' ', 1), N(Ts, { class: 'icon' })],
                8,
                Au
              ))
            : de('', !0),
        ])
      );
    },
  });
var Su = me(Lu, [['__scopeId', 'data-v-1ed99556']]);
const Iu = { key: 0, class: 'last-updated' },
  Mu = { class: 'prefix' },
  Ou = { class: 'datetime' },
  Ru = le({
    setup(e) {
      const { theme: t, page: n } = Te(),
        s = z(() => {
          const o = t.value.lastUpdated;
          return o !== void 0 && o !== !1;
        }),
        r = z(() => {
          const o = t.value.lastUpdated;
          return o === !0 ? 'Last Updated' : o;
        }),
        i = st('');
      return (
        Ct(() => {
          i.value = new Date(n.value.lastUpdated).toLocaleString('en-US');
        }),
        (o, l) =>
          P(s)
            ? (O(),
              K('p', Iu, [
                U('span', Mu, Oe(P(r)) + ':', 1),
                U('span', Ou, Oe(i.value), 1),
              ]))
            : de('', !0)
      );
    },
  });
var Nu = me(Ru, [['__scopeId', 'data-v-5797b537']]);
const Fu = { class: 'page-footer' },
  Hu = { class: 'edit' },
  Bu = { class: 'updated' },
  ju = le({
    setup(e) {
      return (t, n) => (
        O(), K('footer', Fu, [U('div', Hu, [N(Su)]), U('div', Bu, [N(Nu)])])
      );
    },
  });
var Uu = me(ju, [['__scopeId', 'data-v-fb8d84c6']]);
function Du() {
  const { page: e, theme: t } = Te(),
    n = z(() => hi(Es(e.value.relativePath))),
    s = z(() => {
      const u = $s(t.value.sidebar, n.value);
      return ws(u) ? pi(u) : [];
    }),
    r = z(() => s.value.findIndex((u) => u.link === n.value)),
    i = z(() => {
      if (
        t.value.nextLinks !== !1 &&
        r.value > -1 &&
        r.value < s.value.length - 1
      )
        return s.value[r.value + 1];
    }),
    o = z(() => {
      if (t.value.prevLinks !== !1 && r.value > 0) return s.value[r.value - 1];
    }),
    l = z(() => !!i.value || !!o.value);
  return { next: i, prev: o, hasLinks: l };
}
const qu = {},
  Vu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Ku = U(
    'path',
    {
      d: 'M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z',
    },
    null,
    -1
  ),
  Wu = [Ku];
function zu(e, t) {
  return O(), K('svg', Vu, Wu);
}
var Ju = me(qu, [['render', zu]]);
const Yu = {},
  Xu = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Zu = U(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1
  ),
  Qu = [Zu];
function Gu(e, t) {
  return O(), K('svg', Xu, Qu);
}
var ea = me(Yu, [['render', Gu]]);
const ta = { key: 0, class: 'next-and-prev-link' },
  na = { class: 'container' },
  sa = { class: 'prev' },
  ra = ['href'],
  ia = { class: 'text' },
  oa = { class: 'next' },
  la = ['href'],
  ca = { class: 'text' },
  ua = le({
    setup(e) {
      const { hasLinks: t, prev: n, next: s } = Du();
      return (r, i) =>
        P(t)
          ? (O(),
            K('div', ta, [
              U('div', na, [
                U('div', sa, [
                  P(n)
                    ? (O(),
                      K(
                        'a',
                        { key: 0, class: 'link', href: P(Jt)(P(n).link) },
                        [
                          N(Ju, { class: 'icon icon-prev' }),
                          U('span', ia, Oe(P(n).text), 1),
                        ],
                        8,
                        ra
                      ))
                    : de('', !0),
                ]),
                U('div', oa, [
                  P(s)
                    ? (O(),
                      K(
                        'a',
                        { key: 0, class: 'link', href: P(Jt)(P(s).link) },
                        [
                          U('span', ca, Oe(P(s).text), 1),
                          N(ea, { class: 'icon icon-next' }),
                        ],
                        8,
                        la
                      ))
                    : de('', !0),
                ]),
              ]),
            ]))
          : de('', !0);
    },
  });
var aa = me(ua, [['__scopeId', 'data-v-38ede35f']]);
const fa = { class: 'page' },
  da = { class: 'container' },
  ha = le({
    setup(e) {
      return (t, n) => {
        const s = ds('Content');
        return (
          O(),
          K('main', fa, [
            U('div', da, [
              pe(t.$slots, 'top', {}, void 0, !0),
              N(s, { class: 'content' }),
              N(Uu),
              N(aa),
              pe(t.$slots, 'bottom', {}, void 0, !0),
            ]),
          ])
        );
      };
    },
  });
var pa = me(ha, [['__scopeId', 'data-v-7eddb2c4']]);
const ma = { key: 0, id: 'ads-container' },
  _a = le({
    setup(e) {
      const t = Bo(() => import('./Home.1e4600d8.js')),
        n = () => null,
        s = n,
        r = n,
        i = n,
        o = Ze(),
        { site: l, page: u, theme: f, frontmatter: h } = Te(),
        v = z(() => !!h.value.customLayout),
        k = z(() => !!h.value.home),
        E = z(() => Object.keys(l.value.langs).length > 1),
        T = z(() => {
          const A = f.value;
          return h.value.navbar === !1 || A.navbar === !1
            ? !1
            : l.value.title || A.logo || A.repo || A.nav;
        }),
        H = st(!1),
        _ = z(() =>
          h.value.home || h.value.sidebar === !1
            ? !1
            : !xc($s(f.value.sidebar, o.data.relativePath))
        ),
        x = (A) => {
          H.value = typeof A == 'boolean' ? A : !H.value;
        },
        I = x.bind(null, !1);
      rt(o, I);
      const D = z(() => [
        {
          'no-navbar': !T.value,
          'sidebar-open': H.value,
          'no-sidebar': !_.value,
        },
      ]);
      return (A, J) => {
        const X = ds('Content'),
          B = ds('Debug');
        return (
          O(),
          K(
            fe,
            null,
            [
              U(
                'div',
                { class: Qe(['theme', P(D)]) },
                [
                  P(T)
                    ? (O(),
                      Ce(
                        cu,
                        { key: 0, onToggle: x },
                        {
                          search: Ue(() => [
                            pe(A.$slots, 'navbar-search', {}, () => [
                              P(f).algolia
                                ? (O(),
                                  Ce(
                                    P(i),
                                    {
                                      key: 0,
                                      options: P(f).algolia,
                                      multilang: P(E),
                                    },
                                    null,
                                    8,
                                    ['options', 'multilang']
                                  ))
                                : de('', !0),
                            ]),
                          ]),
                          _: 3,
                        }
                      ))
                    : de('', !0),
                  N(
                    ku,
                    { open: H.value },
                    {
                      'sidebar-top': Ue(() => [pe(A.$slots, 'sidebar-top')]),
                      'sidebar-bottom': Ue(() => [
                        pe(A.$slots, 'sidebar-bottom'),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open']
                  ),
                  U('div', {
                    class: 'sidebar-mask',
                    onClick: J[0] || (J[0] = (se) => x(!1)),
                  }),
                  P(v)
                    ? (O(), Ce(X, { key: 1 }))
                    : P(k)
                    ? pe(A.$slots, 'home', { key: 2 }, () => [
                        N(P(t), null, {
                          hero: Ue(() => [pe(A.$slots, 'home-hero')]),
                          features: Ue(() => [pe(A.$slots, 'home-features')]),
                          footer: Ue(() => [pe(A.$slots, 'home-footer')]),
                          _: 3,
                        }),
                      ])
                    : (O(),
                      Ce(
                        pa,
                        { key: 3 },
                        {
                          top: Ue(() => [
                            pe(A.$slots, 'page-top-ads', {}, () => [
                              P(f).carbonAds && P(f).carbonAds.carbon
                                ? (O(),
                                  K('div', ma, [
                                    (O(),
                                    Ce(
                                      P(s),
                                      {
                                        key: 'carbon' + P(u).relativePath,
                                        code: P(f).carbonAds.carbon,
                                        placement: P(f).carbonAds.placement,
                                      },
                                      null,
                                      8,
                                      ['code', 'placement']
                                    )),
                                  ]))
                                : de('', !0),
                            ]),
                            pe(A.$slots, 'page-top'),
                          ]),
                          bottom: Ue(() => [
                            pe(A.$slots, 'page-bottom'),
                            pe(A.$slots, 'page-bottom-ads', {}, () => [
                              P(f).carbonAds && P(f).carbonAds.custom
                                ? (O(),
                                  Ce(
                                    P(r),
                                    {
                                      key: 'custom' + P(u).relativePath,
                                      code: P(f).carbonAds.custom,
                                      placement: P(f).carbonAds.placement,
                                    },
                                    null,
                                    8,
                                    ['code', 'placement']
                                  ))
                                : de('', !0),
                            ]),
                          ]),
                          _: 3,
                        }
                      )),
                ],
                2
              ),
              N(B),
            ],
            64
          )
        );
      };
    },
  }),
  ga = { class: 'theme' },
  va = U('h1', null, '404', -1),
  xa = ['href'],
  ba = le({
    setup(e) {
      const { site: t } = Te(),
        n = [
          "There's nothing here.",
          'How did we get here?',
          "That's a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ];
      function s() {
        return n[Math.floor(Math.random() * n.length)];
      }
      return (r, i) => (
        O(),
        K('div', ga, [
          va,
          U('blockquote', null, Oe(s()), 1),
          U(
            'a',
            { href: P(t).base, 'aria-label': 'go to home' },
            'Take me home.',
            8,
            xa
          ),
        ])
      );
    },
  }),
  Ei = { Layout: _a, NotFound: ba },
  Ps = new Set(),
  $i = () => document.createElement('link'),
  ya = (e) => {
    const t = $i();
    (t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t);
  },
  ka = (e) => {
    const t = new XMLHttpRequest();
    t.open('GET', e, (t.withCredentials = !0)), t.send();
  };
let $n;
const wa =
  $e &&
  ($n = $i()) &&
  $n.relList &&
  $n.relList.supports &&
  $n.relList.supports('prefetch')
    ? ya
    : ka;
function Ca() {
  if (!$e || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target;
            n.unobserve(l);
            const { pathname: u } = l;
            if (!Ps.has(u)) {
              Ps.add(u);
              const f = li(u);
              wa(f);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { target: o, hostname: l, pathname: u } = i,
            f = u.match(/\.\w+$/);
          (f && f[0] !== '.html') ||
            (o !== '_blank' &&
              l === location.hostname &&
              (u !== location.pathname ? n.observe(i) : Ps.add(u)));
        });
      });
  };
  Ct(s);
  const r = Ze();
  rt(() => r.path, s),
    mn(() => {
      n && n.disconnect();
    });
}
const Ea = le({
    setup(e, { slots: t }) {
      const n = st(!1);
      return (
        Ct(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    },
  }),
  $a = Ei.NotFound || (() => '404 Not Found'),
  Ta = {
    name: 'VitePressApp',
    setup() {
      const { site: e } = Te();
      return (
        Ct(() => {
          rt(
            () => e.value.lang,
            (t) => {
              document.documentElement.lang = t;
            },
            { immediate: !0 }
          );
        }),
        Ca(),
        () => ut(Ei.Layout)
      );
    },
  };
function Pa() {
  const e = La(),
    t = Aa();
  t.provide(ci, e);
  const n = sc(e.route);
  return (
    t.provide(oi, n),
    $e && cc(e.route, n.site),
    t.component('Content', fc),
    t.component('ClientOnly', Ea),
    t.component('Debug', () => null),
    Object.defineProperty(t.config.globalProperties, '$frontmatter', {
      get() {
        return n.frontmatter.value;
      },
    }),
    { app: t, router: e }
  );
}
function Aa() {
  return Yl(Ta);
}
function La() {
  let e = $e,
    t;
  return oc((n) => {
    let s = li(n);
    return (
      e && (t = s),
      (e || t === s) && (s = s.replace(/\.js$/, '.lean.js')),
      $e ? ((e = !1), import(s)) : require(s)
    );
  }, $a);
}
if ($e) {
  const { app: e, router: t } = Pa();
  t.go().then(() => {
    e.mount('#app');
  });
}
export {
  fe as F,
  gi as N,
  me as _,
  Sa as a,
  U as b,
  K as c,
  Pa as createApp,
  zt as d,
  le as e,
  z as f,
  P as g,
  de as h,
  Ce as i,
  ds as j,
  N as k,
  pe as l,
  O as o,
  ms as r,
  Oe as t,
  Te as u,
  Jt as w,
};
