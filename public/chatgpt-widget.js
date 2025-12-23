function km(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var nc = { exports: {} }, be = {};
var vo;
function Fm() {
  if (vo) return be;
  vo = 1;
  var A = /* @__PURE__ */ Symbol.for("react.transitional.element"), ul = /* @__PURE__ */ Symbol.for("react.fragment");
  function V(h, cl, zl) {
    var pl = null;
    if (zl !== void 0 && (pl = "" + zl), cl.key !== void 0 && (pl = "" + cl.key), "key" in cl) {
      zl = {};
      for (var Rl in cl)
        Rl !== "key" && (zl[Rl] = cl[Rl]);
    } else zl = cl;
    return cl = zl.ref, {
      $$typeof: A,
      type: h,
      key: pl,
      ref: cl !== void 0 ? cl : null,
      props: zl
    };
  }
  return be.Fragment = ul, be.jsx = V, be.jsxs = V, be;
}
var ho;
function Im() {
  return ho || (ho = 1, nc.exports = Fm()), nc.exports;
}
var Yl = Im(), ic = { exports: {} }, C = {};
var go;
function Pm() {
  if (go) return C;
  go = 1;
  var A = /* @__PURE__ */ Symbol.for("react.transitional.element"), ul = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), cl = /* @__PURE__ */ Symbol.for("react.profiler"), zl = /* @__PURE__ */ Symbol.for("react.consumer"), pl = /* @__PURE__ */ Symbol.for("react.context"), Rl = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), sl = Symbol.iterator;
  function Wl(d) {
    return d === null || typeof d != "object" ? null : (d = sl && d[sl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Gl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, Dt = {};
  function $l(d, T, _) {
    this.props = d, this.context = T, this.refs = Dt, this.updater = _ || Gl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(d, T) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, T, "setState");
  }, $l.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = $l.prototype;
  function Hl(d, T, _) {
    this.props = d, this.context = T, this.refs = Dt, this.updater = _ || Gl;
  }
  var it = Hl.prototype = new Wt();
  it.constructor = Hl, ql(it, $l.prototype), it.isPureReactComponent = !0;
  var Tt = Array.isArray;
  function jl() {
  }
  var L = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function Et(d, T, _) {
    var M = _.ref;
    return {
      $$typeof: A,
      type: d,
      key: T,
      ref: M !== void 0 ? M : null,
      props: _
    };
  }
  function Qa(d, T) {
    return Et(d.type, T, d.props);
  }
  function At(d) {
    return typeof d == "object" && d !== null && d.$$typeof === A;
  }
  function Ql(d) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(_) {
      return T[_];
    });
  }
  var za = /\/+/g;
  function Ut(d, T) {
    return typeof d == "object" && d !== null && d.key != null ? Ql("" + d.key) : T.toString(36);
  }
  function rt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(jl, jl) : (d.status = "pending", d.then(
          function(T) {
            d.status === "pending" && (d.status = "fulfilled", d.value = T);
          },
          function(T) {
            d.status === "pending" && (d.status = "rejected", d.reason = T);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function S(d, T, _, M, B) {
    var j = typeof d;
    (j === "undefined" || j === "boolean") && (d = null);
    var k = !1;
    if (d === null) k = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case A:
            case ul:
              k = !0;
              break;
            case $:
              return k = d._init, S(
                k(d._payload),
                T,
                _,
                M,
                B
              );
          }
      }
    if (k)
      return B = B(d), k = M === "" ? "." + Ut(d, 0) : M, Tt(B) ? (_ = "", k != null && (_ = k.replace(za, "$&/") + "/"), S(B, T, _, "", function(Ou) {
        return Ou;
      })) : B != null && (At(B) && (B = Qa(
        B,
        _ + (B.key == null || d && d.key === B.key ? "" : ("" + B.key).replace(
          za,
          "$&/"
        ) + "/") + k
      )), T.push(B)), 1;
    k = 0;
    var Cl = M === "" ? "." : M + ":";
    if (Tt(d))
      for (var ml = 0; ml < d.length; ml++)
        M = d[ml], j = Cl + Ut(M, ml), k += S(
          M,
          T,
          _,
          j,
          B
        );
    else if (ml = Wl(d), typeof ml == "function")
      for (d = ml.call(d), ml = 0; !(M = d.next()).done; )
        M = M.value, j = Cl + Ut(M, ml++), k += S(
          M,
          T,
          _,
          j,
          B
        );
    else if (j === "object") {
      if (typeof d.then == "function")
        return S(
          rt(d),
          T,
          _,
          M,
          B
        );
      throw T = String(d), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return k;
  }
  function p(d, T, _) {
    if (d == null) return d;
    var M = [], B = 0;
    return S(d, M, "", "", function(j) {
      return T.call(_, j, B++);
    }), M;
  }
  function q(d) {
    if (d._status === -1) {
      var T = d._result;
      T = T(), T.then(
        function(_) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = _);
        },
        function(_) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = _);
        }
      ), d._status === -1 && (d._status = 0, d._result = T);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var P = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, el = {
    map: p,
    forEach: function(d, T, _) {
      p(
        d,
        function() {
          T.apply(this, arguments);
        },
        _
      );
    },
    count: function(d) {
      var T = 0;
      return p(d, function() {
        T++;
      }), T;
    },
    toArray: function(d) {
      return p(d, function(T) {
        return T;
      }) || [];
    },
    only: function(d) {
      if (!At(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return C.Activity = R, C.Children = el, C.Component = $l, C.Fragment = V, C.Profiler = cl, C.PureComponent = Hl, C.StrictMode = h, C.Suspense = H, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return L.H.useMemoCache(d);
    }
  }, C.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(d, T, _) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var M = ql({}, d.props), B = d.key;
    if (T != null)
      for (j in T.key !== void 0 && (B = "" + T.key), T)
        !Xl.call(T, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && T.ref === void 0 || (M[j] = T[j]);
    var j = arguments.length - 2;
    if (j === 1) M.children = _;
    else if (1 < j) {
      for (var k = Array(j), Cl = 0; Cl < j; Cl++)
        k[Cl] = arguments[Cl + 2];
      M.children = k;
    }
    return Et(d.type, B, M);
  }, C.createContext = function(d) {
    return d = {
      $$typeof: pl,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: zl,
      _context: d
    }, d;
  }, C.createElement = function(d, T, _) {
    var M, B = {}, j = null;
    if (T != null)
      for (M in T.key !== void 0 && (j = "" + T.key), T)
        Xl.call(T, M) && M !== "key" && M !== "__self" && M !== "__source" && (B[M] = T[M]);
    var k = arguments.length - 2;
    if (k === 1) B.children = _;
    else if (1 < k) {
      for (var Cl = Array(k), ml = 0; ml < k; ml++)
        Cl[ml] = arguments[ml + 2];
      B.children = Cl;
    }
    if (d && d.defaultProps)
      for (M in k = d.defaultProps, k)
        B[M] === void 0 && (B[M] = k[M]);
    return Et(d, j, B);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(d) {
    return { $$typeof: Rl, render: d };
  }, C.isValidElement = At, C.lazy = function(d) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: d },
      _init: q
    };
  }, C.memo = function(d, T) {
    return {
      $$typeof: E,
      type: d,
      compare: T === void 0 ? null : T
    };
  }, C.startTransition = function(d) {
    var T = L.T, _ = {};
    L.T = _;
    try {
      var M = d(), B = L.S;
      B !== null && B(_, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(jl, P);
    } catch (j) {
      P(j);
    } finally {
      T !== null && _.types !== null && (T.types = _.types), L.T = T;
    }
  }, C.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, C.use = function(d) {
    return L.H.use(d);
  }, C.useActionState = function(d, T, _) {
    return L.H.useActionState(d, T, _);
  }, C.useCallback = function(d, T) {
    return L.H.useCallback(d, T);
  }, C.useContext = function(d) {
    return L.H.useContext(d);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(d, T) {
    return L.H.useDeferredValue(d, T);
  }, C.useEffect = function(d, T) {
    return L.H.useEffect(d, T);
  }, C.useEffectEvent = function(d) {
    return L.H.useEffectEvent(d);
  }, C.useId = function() {
    return L.H.useId();
  }, C.useImperativeHandle = function(d, T, _) {
    return L.H.useImperativeHandle(d, T, _);
  }, C.useInsertionEffect = function(d, T) {
    return L.H.useInsertionEffect(d, T);
  }, C.useLayoutEffect = function(d, T) {
    return L.H.useLayoutEffect(d, T);
  }, C.useMemo = function(d, T) {
    return L.H.useMemo(d, T);
  }, C.useOptimistic = function(d, T) {
    return L.H.useOptimistic(d, T);
  }, C.useReducer = function(d, T, _) {
    return L.H.useReducer(d, T, _);
  }, C.useRef = function(d) {
    return L.H.useRef(d);
  }, C.useState = function(d) {
    return L.H.useState(d);
  }, C.useSyncExternalStore = function(d, T, _) {
    return L.H.useSyncExternalStore(
      d,
      T,
      _
    );
  }, C.useTransition = function() {
    return L.H.useTransition();
  }, C.version = "19.2.3", C;
}
var ro;
function oc() {
  return ro || (ro = 1, ic.exports = Pm()), ic.exports;
}
var _u = oc();
const lv = /* @__PURE__ */ km(_u);
var fc = { exports: {} }, ze = {}, cc = { exports: {} }, sc = {};
var So;
function tv() {
  return So || (So = 1, (function(A) {
    function ul(S, p) {
      var q = S.length;
      S.push(p);
      l: for (; 0 < q; ) {
        var P = q - 1 >>> 1, el = S[P];
        if (0 < cl(el, p))
          S[P] = p, S[q] = el, q = P;
        else break l;
      }
    }
    function V(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var p = S[0], q = S.pop();
      if (q !== p) {
        S[0] = q;
        l: for (var P = 0, el = S.length, d = el >>> 1; P < d; ) {
          var T = 2 * (P + 1) - 1, _ = S[T], M = T + 1, B = S[M];
          if (0 > cl(_, q))
            M < el && 0 > cl(B, _) ? (S[P] = B, S[M] = q, P = M) : (S[P] = _, S[T] = q, P = T);
          else if (M < el && 0 > cl(B, q))
            S[P] = B, S[M] = q, P = M;
          else break l;
        }
      }
      return p;
    }
    function cl(S, p) {
      var q = S.sortIndex - p.sortIndex;
      return q !== 0 ? q : S.id - p.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var zl = performance;
      A.unstable_now = function() {
        return zl.now();
      };
    } else {
      var pl = Date, Rl = pl.now();
      A.unstable_now = function() {
        return pl.now() - Rl;
      };
    }
    var H = [], E = [], $ = 1, R = null, sl = 3, Wl = !1, Gl = !1, ql = !1, Dt = !1, $l = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Hl = typeof setImmediate < "u" ? setImmediate : null;
    function it(S) {
      for (var p = V(E); p !== null; ) {
        if (p.callback === null) h(E);
        else if (p.startTime <= S)
          h(E), p.sortIndex = p.expirationTime, ul(H, p);
        else break;
        p = V(E);
      }
    }
    function Tt(S) {
      if (ql = !1, it(S), !Gl)
        if (V(H) !== null)
          Gl = !0, jl || (jl = !0, Ql());
        else {
          var p = V(E);
          p !== null && rt(Tt, p.startTime - S);
        }
    }
    var jl = !1, L = -1, Xl = 5, Et = -1;
    function Qa() {
      return Dt ? !0 : !(A.unstable_now() - Et < Xl);
    }
    function At() {
      if (Dt = !1, jl) {
        var S = A.unstable_now();
        Et = S;
        var p = !0;
        try {
          l: {
            Gl = !1, ql && (ql = !1, Wt(L), L = -1), Wl = !0;
            var q = sl;
            try {
              t: {
                for (it(S), R = V(H); R !== null && !(R.expirationTime > S && Qa()); ) {
                  var P = R.callback;
                  if (typeof P == "function") {
                    R.callback = null, sl = R.priorityLevel;
                    var el = P(
                      R.expirationTime <= S
                    );
                    if (S = A.unstable_now(), typeof el == "function") {
                      R.callback = el, it(S), p = !0;
                      break t;
                    }
                    R === V(H) && h(H), it(S);
                  } else h(H);
                  R = V(H);
                }
                if (R !== null) p = !0;
                else {
                  var d = V(E);
                  d !== null && rt(
                    Tt,
                    d.startTime - S
                  ), p = !1;
                }
              }
              break l;
            } finally {
              R = null, sl = q, Wl = !1;
            }
            p = void 0;
          }
        } finally {
          p ? Ql() : jl = !1;
        }
      }
    }
    var Ql;
    if (typeof Hl == "function")
      Ql = function() {
        Hl(At);
      };
    else if (typeof MessageChannel < "u") {
      var za = new MessageChannel(), Ut = za.port2;
      za.port1.onmessage = At, Ql = function() {
        Ut.postMessage(null);
      };
    } else
      Ql = function() {
        $l(At, 0);
      };
    function rt(S, p) {
      L = $l(function() {
        S(A.unstable_now());
      }, p);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, A.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, A.unstable_next = function(S) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = sl;
      }
      var q = sl;
      sl = p;
      try {
        return S();
      } finally {
        sl = q;
      }
    }, A.unstable_requestPaint = function() {
      Dt = !0;
    }, A.unstable_runWithPriority = function(S, p) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var q = sl;
      sl = S;
      try {
        return p();
      } finally {
        sl = q;
      }
    }, A.unstable_scheduleCallback = function(S, p, q) {
      var P = A.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? P + q : P) : q = P, S) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = q + el, S = {
        id: $++,
        callback: p,
        priorityLevel: S,
        startTime: q,
        expirationTime: el,
        sortIndex: -1
      }, q > P ? (S.sortIndex = q, ul(E, S), V(H) === null && S === V(E) && (ql ? (Wt(L), L = -1) : ql = !0, rt(Tt, q - P))) : (S.sortIndex = el, ul(H, S), Gl || Wl || (Gl = !0, jl || (jl = !0, Ql()))), S;
    }, A.unstable_shouldYield = Qa, A.unstable_wrapCallback = function(S) {
      var p = sl;
      return function() {
        var q = sl;
        sl = p;
        try {
          return S.apply(this, arguments);
        } finally {
          sl = q;
        }
      };
    };
  })(sc)), sc;
}
var bo;
function av() {
  return bo || (bo = 1, cc.exports = tv()), cc.exports;
}
var dc = { exports: {} }, Nl = {};
var zo;
function uv() {
  if (zo) return Nl;
  zo = 1;
  var A = oc();
  function ul(H) {
    var E = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        E += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + H + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V() {
  }
  var h = {
    d: {
      f: V,
      r: function() {
        throw Error(ul(522));
      },
      D: V,
      C: V,
      L: V,
      m: V,
      X: V,
      S: V,
      M: V
    },
    p: 0,
    findDOMNode: null
  }, cl = /* @__PURE__ */ Symbol.for("react.portal");
  function zl(H, E, $) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: cl,
      key: R == null ? null : "" + R,
      children: H,
      containerInfo: E,
      implementation: $
    };
  }
  var pl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Rl(H, E) {
    if (H === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Nl.createPortal = function(H, E) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(ul(299));
    return zl(H, E, null, $);
  }, Nl.flushSync = function(H) {
    var E = pl.T, $ = h.p;
    try {
      if (pl.T = null, h.p = 2, H) return H();
    } finally {
      pl.T = E, h.p = $, h.d.f();
    }
  }, Nl.preconnect = function(H, E) {
    typeof H == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, h.d.C(H, E));
  }, Nl.prefetchDNS = function(H) {
    typeof H == "string" && h.d.D(H);
  }, Nl.preinit = function(H, E) {
    if (typeof H == "string" && E && typeof E.as == "string") {
      var $ = E.as, R = Rl($, E.crossOrigin), sl = typeof E.integrity == "string" ? E.integrity : void 0, Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      $ === "style" ? h.d.S(
        H,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: R,
          integrity: sl,
          fetchPriority: Wl
        }
      ) : $ === "script" && h.d.X(H, {
        crossOrigin: R,
        integrity: sl,
        fetchPriority: Wl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Nl.preinitModule = function(H, E) {
    if (typeof H == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var $ = Rl(
            E.as,
            E.crossOrigin
          );
          h.d.M(H, {
            crossOrigin: $,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && h.d.M(H);
  }, Nl.preload = function(H, E) {
    if (typeof H == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var $ = E.as, R = Rl($, E.crossOrigin);
      h.d.L(H, $, {
        crossOrigin: R,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Nl.preloadModule = function(H, E) {
    if (typeof H == "string")
      if (E) {
        var $ = Rl(E.as, E.crossOrigin);
        h.d.m(H, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: $,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else h.d.m(H);
  }, Nl.requestFormReset = function(H) {
    h.d.r(H);
  }, Nl.unstable_batchedUpdates = function(H, E) {
    return H(E);
  }, Nl.useFormState = function(H, E, $) {
    return pl.H.useFormState(H, E, $);
  }, Nl.useFormStatus = function() {
    return pl.H.useHostTransitionStatus();
  }, Nl.version = "19.2.3", Nl;
}
var To;
function ev() {
  if (To) return dc.exports;
  To = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), dc.exports = uv(), dc.exports;
}
var Eo;
function nv() {
  if (Eo) return ze;
  Eo = 1;
  var A = av(), ul = oc(), V = ev();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function cl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function zl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function pl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Rl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (zl(l) !== l)
      throw Error(h(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = zl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return H(e), l;
          if (n === u) return H(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var i = !1, f = e.child; f; ) {
          if (f === a) {
            i = !0, a = e, u = n;
            break;
          }
          if (f === u) {
            i = !0, u = e, a = n;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === a) {
              i = !0, a = n, u = e;
              break;
            }
            if (f === u) {
              i = !0, u = n, a = e;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, sl = /* @__PURE__ */ Symbol.for("react.element"), Wl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Gl = /* @__PURE__ */ Symbol.for("react.portal"), ql = /* @__PURE__ */ Symbol.for("react.fragment"), Dt = /* @__PURE__ */ Symbol.for("react.strict_mode"), $l = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Hl = /* @__PURE__ */ Symbol.for("react.context"), it = /* @__PURE__ */ Symbol.for("react.forward_ref"), Tt = /* @__PURE__ */ Symbol.for("react.suspense"), jl = /* @__PURE__ */ Symbol.for("react.suspense_list"), L = /* @__PURE__ */ Symbol.for("react.memo"), Xl = /* @__PURE__ */ Symbol.for("react.lazy"), Et = /* @__PURE__ */ Symbol.for("react.activity"), Qa = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var za = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case jl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Gl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : Ut(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return Ut(l(t));
          } catch {
          }
      }
    return null;
  }
  var rt = Array.isArray, S = ul.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], el = -1;
  function d(l) {
    return { current: l };
  }
  function T(l) {
    0 > el || (l.current = P[el], P[el] = null, el--);
  }
  function _(l, t) {
    el++, P[el] = l.current, l.current = t;
  }
  var M = d(null), B = d(null), j = d(null), k = d(null);
  function Cl(l, t) {
    switch (_(j, t), _(B, l), _(M, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Yd(t), l = Gd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(M), _(M, l);
  }
  function ml() {
    T(M), T(B), T(j);
  }
  function Ou(l) {
    l.memoizedState !== null && _(k, l);
    var t = M.current, a = Gd(t, l.type);
    t !== a && (_(B, l), _(M, a));
  }
  function Te(l) {
    B.current === l && (T(M), T(B)), k.current === l && (T(k), he._currentValue = q);
  }
  var Qn, yc;
  function Ta(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", yc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + yc;
  }
  var xn = !1;
  function Zn(l, t) {
    if (!l || xn) return "";
    xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var v = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  v = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                v = g;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (g) {
            if (g && v && typeof g.stack == "string")
              return [g.stack, v.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), i = n[0], f = n[1];
      if (i && f) {
        var c = i.split(`
`), m = f.split(`
`);
        for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === c.length || e === m.length)
          for (u = c.length - 1, e = m.length - 1; 1 <= u && 0 <= e && c[u] !== m[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== m[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || c[u] !== m[e]) {
                  var r = `
` + c[u].replace(" at new ", " at ");
                  return l.displayName && r.includes("<anonymous>") && (r = r.replace("<anonymous>", l.displayName)), r;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
  }
  function Mo(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(l.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ta("Suspense Fallback") : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function mc(l) {
    try {
      var t = "", a = null;
      do
        t += Mo(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = A.unstable_scheduleCallback, Kn = A.unstable_cancelCallback, Do = A.unstable_shouldYield, Uo = A.unstable_requestPaint, kl = A.unstable_now, Ho = A.unstable_getCurrentPriorityLevel, vc = A.unstable_ImmediatePriority, hc = A.unstable_UserBlockingPriority, Ee = A.unstable_NormalPriority, No = A.unstable_LowPriority, gc = A.unstable_IdlePriority, Ro = A.log, qo = A.unstable_setDisableYieldValue, Mu = null, Fl = null;
  function $t(l) {
    if (typeof Ro == "function" && qo(l), Fl && typeof Fl.setStrictMode == "function")
      try {
        Fl.setStrictMode(Mu, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Yo, Co = Math.log, Bo = Math.LN2;
  function Yo(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Co(l) / Bo | 0) | 0;
  }
  var Ae = 256, pe = 262144, _e = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Oe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return f !== 0 ? (u = f & ~n, u !== 0 ? e = Ea(u) : (i &= f, i !== 0 ? e = Ea(i) : a || (a = f & ~l, a !== 0 && (e = Ea(a))))) : (f = u & ~n, f !== 0 ? e = Ea(f) : i !== 0 ? e = Ea(i) : a || (a = u & ~l, a !== 0 && (e = Ea(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Go(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rc() {
    var l = _e;
    return _e <<= 1, (_e & 62914560) === 0 && (_e = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Uu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jo(l, t, a, u, e, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var f = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var r = 31 - Il(a), z = 1 << r;
      f[r] = 0, c[r] = -1;
      var v = m[r];
      if (v !== null)
        for (m[r] = null, r = 0; r < v.length; r++) {
          var g = v[r];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && Sc(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Sc(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function bc(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function zc(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tc() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : io(l.type));
  }
  function Ec(l, t) {
    var a = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = a;
    }
  }
  var kt = Math.random().toString(36).slice(2), _l = "__reactFiber$" + kt, xl = "__reactProps$" + kt, xa = "__reactContainer$" + kt, $n = "__reactEvents$" + kt, Xo = "__reactListeners$" + kt, Qo = "__reactHandles$" + kt, Ac = "__reactResources$" + kt, Hu = "__reactMarker$" + kt;
  function kn(l) {
    delete l[_l], delete l[xl], delete l[$n], delete l[Xo], delete l[Qo];
  }
  function Za(l) {
    var t = l[_l];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[xa] || a[_l]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ld(l); l !== null; ) {
            if (a = l[_l]) return a;
            l = Ld(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[_l] || l[xa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Nu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function La(l) {
    var t = l[Ac];
    return t || (t = l[Ac] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function El(l) {
    l[Hu] = !0;
  }
  var pc = /* @__PURE__ */ new Set(), _c = {};
  function Aa(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (_c[l] = t, l = 0; l < t.length; l++)
      pc.add(t[l]);
  }
  var xo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oc = {}, Mc = {};
  function Zo(l) {
    return Vn.call(Mc, l) ? !0 : Vn.call(Oc, l) ? !1 : xo.test(l) ? Mc[l] = !0 : (Oc[l] = !0, !1);
  }
  function Me(l, t, a) {
    if (Zo(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function De(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ht(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Dc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Vo(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Dc(l) ? "checked" : "value";
      l._valueTracker = Vo(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Uc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Dc(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Lo = /[\n"\\]/g;
  function ct(l) {
    return l.replace(
      Lo,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, u, e, n, i, f) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, i, ft(t)) : a != null ? Pn(l, i, ft(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ft(f) : l.removeAttribute("name");
  }
  function Hc(l, t, a, u, e, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Fn(l);
        return;
      }
      a = a != null ? "" + ft(a) : "", t = t != null ? "" + ft(t) : a, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = f ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Fn(l);
  }
  function Pn(l, t, a) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nc(l, t, a) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Rc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (rt(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = ft(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Fn(l);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ko = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qc(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ko.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Cc(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && qc(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qc(l, n, t[n]);
  }
  function li(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jo = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), wo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return wo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
  }
  var ti = null;
  function ai(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Bc(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[xl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[xl] || null;
                if (!e) throw Error(h(90));
                In(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Uc(u);
          }
          break l;
        case "textarea":
          Nc(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var ui = !1;
  function Yc(l, t, a) {
    if (ui) return l(t, a);
    ui = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (ui = !1, (Wa !== null || $a !== null) && (Sn(), Wa && (t = Wa, l = $a, $a = Wa = null, Bc(t), l)))
        for (t = 0; t < l.length; t++) Bc(l[t]);
    }
  }
  function Ru(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[xl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        h(231, t, typeof a)
      );
    return a;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = !1;
  if (Rt)
    try {
      var qu = {};
      Object.defineProperty(qu, "passive", {
        get: function() {
          ei = !0;
        }
      }), window.addEventListener("test", qu, qu), window.removeEventListener("test", qu, qu);
    } catch {
      ei = !1;
    }
  var Ft = null, ni = null, Ne = null;
  function Gc() {
    if (Ne) return Ne;
    var l, t = ni, a = t.length, u, e = "value" in Ft ? Ft.value : Ft.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++) ;
    return Ne = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function jc() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, i) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (a = l[f], this[f] = a ? a(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : jc, this.isPropagationStopped = jc, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var pa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Zl(pa), Cu = R({}, pa, { view: 0, detail: 0 }), Wo = Zl(Cu), ii, fi, Bu, Be = R({}, Cu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: si,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (ii = l.screenX - Bu.screenX, fi = l.screenY - Bu.screenY) : fi = ii = 0, Bu = l), ii);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : fi;
    }
  }), Xc = Zl(Be), $o = R({}, Be, { dataTransfer: 0 }), ko = Zl($o), Fo = R({}, Cu, { relatedTarget: 0 }), ci = Zl(Fo), Io = R({}, pa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Po = Zl(Io), ly = R({}, pa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ty = Zl(ly), ay = R({}, pa, { data: 0 }), Qc = Zl(ay), uy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ny = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function iy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ny[l]) ? !!t[l] : !1;
  }
  function si() {
    return iy;
  }
  var fy = R({}, Cu, {
    key: function(l) {
      if (l.key) {
        var t = uy[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ey[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: si,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cy = Zl(fy), sy = R({}, Be, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xc = Zl(sy), dy = R({}, Cu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: si
  }), oy = Zl(dy), yy = R({}, pa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), my = Zl(yy), vy = R({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hy = Zl(vy), gy = R({}, pa, {
    newState: 0,
    oldState: 0
  }), ry = Zl(gy), Sy = [9, 13, 27, 32], di = Rt && "CompositionEvent" in window, Yu = null;
  Rt && "documentMode" in document && (Yu = document.documentMode);
  var by = Rt && "TextEvent" in window && !Yu, Zc = Rt && (!di || Yu && 8 < Yu && 11 >= Yu), Vc = " ", Lc = !1;
  function Kc(l, t) {
    switch (l) {
      case "keyup":
        return Sy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jc(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ka = !1;
  function zy(l, t) {
    switch (l) {
      case "compositionend":
        return Jc(t);
      case "keypress":
        return t.which !== 32 ? null : (Lc = !0, Vc);
      case "textInput":
        return l = t.data, l === Vc && Lc ? null : l;
      default:
        return null;
    }
  }
  function Ty(l, t) {
    if (ka)
      return l === "compositionend" || !di && Kc(l, t) ? (l = Gc(), Ne = ni = Ft = null, ka = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ey[l.type] : t === "textarea";
  }
  function Wc(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = _n(t, "onChange"), 0 < t.length && (a = new Ce(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Gu = null, ju = null;
  function Ay(l) {
    Hd(l, 0);
  }
  function Ye(l) {
    var t = Nu(l);
    if (Uc(t)) return l;
  }
  function $c(l, t) {
    if (l === "change") return t;
  }
  var kc = !1;
  if (Rt) {
    var oi;
    if (Rt) {
      var yi = "oninput" in document;
      if (!yi) {
        var Fc = document.createElement("div");
        Fc.setAttribute("oninput", "return;"), yi = typeof Fc.oninput == "function";
      }
      oi = yi;
    } else oi = !1;
    kc = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    Gu && (Gu.detachEvent("onpropertychange", Pc), ju = Gu = null);
  }
  function Pc(l) {
    if (l.propertyName === "value" && Ye(ju)) {
      var t = [];
      Wc(
        t,
        ju,
        l,
        ai(l)
      ), Yc(Ay, t);
    }
  }
  function py(l, t, a) {
    l === "focusin" ? (Ic(), Gu = t, ju = a, Gu.attachEvent("onpropertychange", Pc)) : l === "focusout" && Ic();
  }
  function _y(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(ju);
  }
  function Oy(l, t) {
    if (l === "click") return Ye(t);
  }
  function My(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Dy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Dy;
  function Xu(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var a = ls(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ls(a);
    }
  }
  function as(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function us(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function mi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Uy = Rt && "documentMode" in document && 11 >= document.documentMode, Fa = null, vi = null, Qu = null, hi = !1;
  function es(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hi || Fa == null || Fa !== Ue(u) || (u = Fa, "selectionStart" in u && mi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Xu(Qu, u) || (Qu = u, u = _n(vi, "onSelect"), 0 < u.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Fa)));
  }
  function _a(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: _a("Animation", "AnimationEnd"),
    animationiteration: _a("Animation", "AnimationIteration"),
    animationstart: _a("Animation", "AnimationStart"),
    transitionrun: _a("Transition", "TransitionRun"),
    transitionstart: _a("Transition", "TransitionStart"),
    transitioncancel: _a("Transition", "TransitionCancel"),
    transitionend: _a("Transition", "TransitionEnd")
  }, gi = {}, ns = {};
  Rt && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Oa(l) {
    if (gi[l]) return gi[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ns)
        return gi[l] = t[a];
    return l;
  }
  var is = Oa("animationend"), fs = Oa("animationiteration"), cs = Oa("animationstart"), Hy = Oa("transitionrun"), Ny = Oa("transitionstart"), Ry = Oa("transitioncancel"), ss = Oa("transitionend"), ds = /* @__PURE__ */ new Map(), ri = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ri.push("scrollEnd");
  function St(l, t) {
    ds.set(l, t), Aa(t, [l]);
  }
  var Ge = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, st = [], Pa = 0, Si = 0;
  function je() {
    for (var l = Pa, t = Si = Pa = 0; t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (st[t++] = null, u !== null && e !== null) {
        var i = u.pending;
        i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e;
      }
      n !== 0 && os(a, e, n);
    }
  }
  function Xe(l, t, a, u) {
    st[Pa++] = l, st[Pa++] = t, st[Pa++] = a, st[Pa++] = u, Si |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function bi(l, t, a, u) {
    return Xe(l, t, a, u), Qe(l);
  }
  function Ma(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function os(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ce)
      throw ce = 0, Uf = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function qy(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, a, u) {
    return new qy(l, t, a, u);
  }
  function zi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var a = l.alternate;
    return a === null ? (a = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ys(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function xe(l, t, a, u, e, n) {
    var i = 0;
    if (u = l, typeof l == "function") zi(l) && (i = 1);
    else if (typeof l == "string")
      i = jm(
        l,
        a,
        M.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Et:
          return l = lt(31, a, t, e), l.elementType = Et, l.lanes = n, l;
        case ql:
          return Da(a.children, e, n, t);
        case Dt:
          i = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, a, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Tt:
          return l = lt(13, a, t, e), l.elementType = Tt, l.lanes = n, l;
        case jl:
          return l = lt(19, a, t, e), l.elementType = jl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case L:
                i = 14;
                break l;
              case Xl:
                i = 16, u = null;
                break l;
            }
          i = 29, a = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = lt(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Da(l, t, a, u) {
    return l = lt(7, l, u, t), l.lanes = a, l;
  }
  function Ti(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function ms(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ei(l, t, a) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var vs = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = vs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: mc(t)
      }, vs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: mc(t)
    };
  }
  var tu = [], au = 0, Ze = null, xu = 0, ot = [], yt = 0, It = null, pt = 1, _t = "";
  function Ct(l, t) {
    tu[au++] = xu, tu[au++] = Ze, Ze = l, xu = t;
  }
  function hs(l, t, a) {
    ot[yt++] = pt, ot[yt++] = _t, ot[yt++] = It, It = l;
    var u = pt;
    l = _t;
    var e = 32 - Il(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var i = e - e % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, pt = 1 << 32 - Il(t) + e | a << e | u, _t = n + l;
    } else
      pt = 1 << n | a << e | u, _t = l;
  }
  function Ai(l) {
    l.return !== null && (Ct(l, 1), hs(l, 1, 0));
  }
  function pi(l) {
    for (; l === Ze; )
      Ze = tu[--au], tu[au] = null, xu = tu[--au], tu[au] = null;
    for (; l === It; )
      It = ot[--yt], ot[yt] = null, _t = ot[--yt], ot[yt] = null, pt = ot[--yt], ot[yt] = null;
  }
  function gs(l, t) {
    ot[yt++] = pt, ot[yt++] = _t, ot[yt++] = It, pt = t.id, _t = t.overflow, It = l;
  }
  var Ol = null, il = null, K = !1, Pt = null, mt = !1, _i = Error(h(519));
  function la(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(dt(t, l)), _i;
  }
  function rs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[_l] = l, t[xl] = u, a) {
      case "dialog":
        Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++)
          Q(de[a], t);
        break;
      case "source":
        Q("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "input":
        Q("invalid", t), Hc(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        Q("invalid", t);
        break;
      case "textarea":
        Q("invalid", t), Rc(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Cd(t.textContent, a) ? (u.popover != null && (Q("beforetoggle", t), Q("toggle", t)), u.onScroll != null && Q("scroll", t), u.onScrollEnd != null && Q("scrollend", t), u.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || la(l, !0);
  }
  function Ss(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
        case 5:
        case 31:
        case 13:
          mt = !1;
          return;
        case 27:
        case 3:
          mt = !0;
          return;
        default:
          Ol = Ol.return;
      }
  }
  function uu(l) {
    if (l !== Ol) return !1;
    if (!K) return Ss(l), K = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Lf(l.type, l.memoizedProps)), a = !a), a && il && la(l), Ss(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      il = Vd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      il = Vd(l);
    } else
      t === 27 ? (t = il, va(l.type) ? (l = $f, $f = null, il = l) : il = t) : il = Ol ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    il = Ol = null, K = !1;
  }
  function Oi() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Mi = d(null), Ha = null, Bt = null;
  function ta(l, t, a) {
    _(Mi, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Mi.current, T(Mi);
  }
  function Di(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Ui(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), Di(
                n.return,
                a,
                l
              ), u || (i = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (i = e.return, i === null) throw Error(h(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Di(i, a, l), i = null;
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (e = i.sibling, e !== null) {
            e.return = i.return, i = e;
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(h(387));
        if (i = i.memoizedProps, i !== null) {
          var f = e.type;
          Pl(e.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (e === k.current) {
        if (i = e.alternate, i === null) throw Error(h(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Ui(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Na(l) {
    Ha = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ml(l) {
    return bs(Ha, l);
  }
  function Le(l, t) {
    return Ha === null && Na(l), bs(l, t);
  }
  function bs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Bt === null) {
      if (l === null) throw Error(h(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var Cy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, By = A.unstable_scheduleCallback, Yy = A.unstable_NormalPriority, gl = {
    $$typeof: Hl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hi() {
    return {
      controller: new Cy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vu(l) {
    l.refCount--, l.refCount === 0 && By(Yy, function() {
      l.controller.abort();
    });
  }
  var Lu = null, Ni = 0, nu = 0, iu = null;
  function Gy(l, t) {
    if (Lu === null) {
      var a = Lu = [];
      Ni = 0, nu = Bf(), iu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Ni++, t.then(zs, zs), t;
  }
  function zs() {
    if (--Ni === 0 && Lu !== null) {
      iu !== null && (iu.status = "fulfilled");
      var l = Lu;
      Lu = null, nu = 0, iu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function jy(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var Ts = S.S;
  S.S = function(l, t) {
    ed = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && Gy(l, t), Ts !== null && Ts(l, t);
  };
  var Ra = d(null);
  function Ri() {
    var l = Ra.current;
    return l !== null ? l : nl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? _(Ra, Ra.current) : _(Ra, t.pool);
  }
  function Es() {
    var l = Ri();
    return l === null ? null : { parent: gl._currentValue, pool: l };
  }
  var fu = Error(h(460)), qi = Error(h(474)), Je = Error(h(542)), we = { then: function() {
  } };
  function As(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ps(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Nt, Nt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Os(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = nl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Os(l), l;
        }
        throw Ca = t, fu;
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ca = a, fu) : a;
    }
  }
  var Ca = null;
  function _s() {
    if (Ca === null) throw Error(h(459));
    var l = Ca;
    return Ca = null, l;
  }
  function Os(l) {
    if (l === fu || l === Je)
      throw Error(h(483));
  }
  var cu = null, Ku = 0;
  function We(l) {
    var t = Ku;
    return Ku += 1, cu === null && (cu = []), ps(cu, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === sl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Ms(l) {
    function t(o, s) {
      if (l) {
        var y = o.deletions;
        y === null ? (o.deletions = [s], o.flags |= 16) : y.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; )
        t(o, s), s = s.sibling;
      return null;
    }
    function u(o) {
      for (var s = /* @__PURE__ */ new Map(); o !== null; )
        o.key !== null ? s.set(o.key, o) : s.set(o.index, o), o = o.sibling;
      return s;
    }
    function e(o, s) {
      return o = qt(o, s), o.index = 0, o.sibling = null, o;
    }
    function n(o, s, y) {
      return o.index = y, l ? (y = o.alternate, y !== null ? (y = y.index, y < s ? (o.flags |= 67108866, s) : y) : (o.flags |= 67108866, s)) : (o.flags |= 1048576, s);
    }
    function i(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function f(o, s, y, b) {
      return s === null || s.tag !== 6 ? (s = Ti(y, o.mode, b), s.return = o, s) : (s = e(s, y), s.return = o, s);
    }
    function c(o, s, y, b) {
      var U = y.type;
      return U === ql ? r(
        o,
        s,
        y.props.children,
        b,
        y.key
      ) : s !== null && (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && qa(U) === s.type) ? (s = e(s, y.props), Ju(s, y), s.return = o, s) : (s = xe(
        y.type,
        y.key,
        y.props,
        null,
        o.mode,
        b
      ), Ju(s, y), s.return = o, s);
    }
    function m(o, s, y, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? (s = Ei(y, o.mode, b), s.return = o, s) : (s = e(s, y.children || []), s.return = o, s);
    }
    function r(o, s, y, b, U) {
      return s === null || s.tag !== 7 ? (s = Da(
        y,
        o.mode,
        b,
        U
      ), s.return = o, s) : (s = e(s, y), s.return = o, s);
    }
    function z(o, s, y) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ti(
          "" + s,
          o.mode,
          y
        ), s.return = o, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return y = xe(
              s.type,
              s.key,
              s.props,
              null,
              o.mode,
              y
            ), Ju(y, s), y.return = o, y;
          case Gl:
            return s = Ei(
              s,
              o.mode,
              y
            ), s.return = o, s;
          case Xl:
            return s = qa(s), z(o, s, y);
        }
        if (rt(s) || Ql(s))
          return s = Da(
            s,
            o.mode,
            y,
            null
          ), s.return = o, s;
        if (typeof s.then == "function")
          return z(o, We(s), y);
        if (s.$$typeof === Hl)
          return z(
            o,
            Le(o, s),
            y
          );
        $e(o, s);
      }
      return null;
    }
    function v(o, s, y, b) {
      var U = s !== null ? s.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return U !== null ? null : f(o, s, "" + y, b);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wl:
            return y.key === U ? c(o, s, y, b) : null;
          case Gl:
            return y.key === U ? m(o, s, y, b) : null;
          case Xl:
            return y = qa(y), v(o, s, y, b);
        }
        if (rt(y) || Ql(y))
          return U !== null ? null : r(o, s, y, b, null);
        if (typeof y.then == "function")
          return v(
            o,
            s,
            We(y),
            b
          );
        if (y.$$typeof === Hl)
          return v(
            o,
            s,
            Le(o, y),
            b
          );
        $e(o, y);
      }
      return null;
    }
    function g(o, s, y, b, U) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return o = o.get(y) || null, f(s, o, "" + b, U);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Wl:
            return o = o.get(
              b.key === null ? y : b.key
            ) || null, c(s, o, b, U);
          case Gl:
            return o = o.get(
              b.key === null ? y : b.key
            ) || null, m(s, o, b, U);
          case Xl:
            return b = qa(b), g(
              o,
              s,
              y,
              b,
              U
            );
        }
        if (rt(b) || Ql(b))
          return o = o.get(y) || null, r(s, o, b, U, null);
        if (typeof b.then == "function")
          return g(
            o,
            s,
            y,
            We(b),
            U
          );
        if (b.$$typeof === Hl)
          return g(
            o,
            s,
            y,
            Le(s, b),
            U
          );
        $e(s, b);
      }
      return null;
    }
    function O(o, s, y, b) {
      for (var U = null, J = null, D = s, G = s = 0, Z = null; D !== null && G < y.length; G++) {
        D.index > G ? (Z = D, D = null) : Z = D.sibling;
        var w = v(
          o,
          D,
          y[G],
          b
        );
        if (w === null) {
          D === null && (D = Z);
          break;
        }
        l && D && w.alternate === null && t(o, D), s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w, D = Z;
      }
      if (G === y.length)
        return a(o, D), K && Ct(o, G), U;
      if (D === null) {
        for (; G < y.length; G++)
          D = z(o, y[G], b), D !== null && (s = n(
            D,
            s,
            G
          ), J === null ? U = D : J.sibling = D, J = D);
        return K && Ct(o, G), U;
      }
      for (D = u(D); G < y.length; G++)
        Z = g(
          D,
          o,
          G,
          y[G],
          b
        ), Z !== null && (l && Z.alternate !== null && D.delete(
          Z.key === null ? G : Z.key
        ), s = n(
          Z,
          s,
          G
        ), J === null ? U = Z : J.sibling = Z, J = Z);
      return l && D.forEach(function(ba) {
        return t(o, ba);
      }), K && Ct(o, G), U;
    }
    function N(o, s, y, b) {
      if (y == null) throw Error(h(151));
      for (var U = null, J = null, D = s, G = s = 0, Z = null, w = y.next(); D !== null && !w.done; G++, w = y.next()) {
        D.index > G ? (Z = D, D = null) : Z = D.sibling;
        var ba = v(o, D, w.value, b);
        if (ba === null) {
          D === null && (D = Z);
          break;
        }
        l && D && ba.alternate === null && t(o, D), s = n(ba, s, G), J === null ? U = ba : J.sibling = ba, J = ba, D = Z;
      }
      if (w.done)
        return a(o, D), K && Ct(o, G), U;
      if (D === null) {
        for (; !w.done; G++, w = y.next())
          w = z(o, w.value, b), w !== null && (s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w);
        return K && Ct(o, G), U;
      }
      for (D = u(D); !w.done; G++, w = y.next())
        w = g(D, o, G, w.value, b), w !== null && (l && w.alternate !== null && D.delete(w.key === null ? G : w.key), s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w);
      return l && D.forEach(function($m) {
        return t(o, $m);
      }), K && Ct(o, G), U;
    }
    function al(o, s, y, b) {
      if (typeof y == "object" && y !== null && y.type === ql && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wl:
            l: {
              for (var U = y.key; s !== null; ) {
                if (s.key === U) {
                  if (U = y.type, U === ql) {
                    if (s.tag === 7) {
                      a(
                        o,
                        s.sibling
                      ), b = e(
                        s,
                        y.props.children
                      ), b.return = o, o = b;
                      break l;
                    }
                  } else if (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && qa(U) === s.type) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, y.props), Ju(b, y), b.return = o, o = b;
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              y.type === ql ? (b = Da(
                y.props.children,
                o.mode,
                b,
                y.key
              ), b.return = o, o = b) : (b = xe(
                y.type,
                y.key,
                y.props,
                null,
                o.mode,
                b
              ), Ju(b, y), b.return = o, o = b);
            }
            return i(o);
          case Gl:
            l: {
              for (U = y.key; s !== null; ) {
                if (s.key === U)
                  if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, y.children || []), b.return = o, o = b;
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              b = Ei(y, o.mode, b), b.return = o, o = b;
            }
            return i(o);
          case Xl:
            return y = qa(y), al(
              o,
              s,
              y,
              b
            );
        }
        if (rt(y))
          return O(
            o,
            s,
            y,
            b
          );
        if (Ql(y)) {
          if (U = Ql(y), typeof U != "function") throw Error(h(150));
          return y = U.call(y), N(
            o,
            s,
            y,
            b
          );
        }
        if (typeof y.then == "function")
          return al(
            o,
            s,
            We(y),
            b
          );
        if (y.$$typeof === Hl)
          return al(
            o,
            s,
            Le(o, y),
            b
          );
        $e(o, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, s !== null && s.tag === 6 ? (a(o, s.sibling), b = e(s, y), b.return = o, o = b) : (a(o, s), b = Ti(y, o.mode, b), b.return = o, o = b), i(o)) : a(o, s);
    }
    return function(o, s, y, b) {
      try {
        Ku = 0;
        var U = al(
          o,
          s,
          y,
          b
        );
        return cu = null, U;
      } catch (D) {
        if (D === fu || D === Je) throw D;
        var J = lt(29, D, null, o.mode);
        return J.lanes = b, J.return = o, J;
      }
    };
  }
  var Ba = Ms(!0), Ds = Ms(!1), aa = !1;
  function Ci(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (W & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Qe(l), os(l, null, a), t;
    }
    return Xe(l, u, t, a), Qe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  function Yi(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Gi = !1;
  function Wu() {
    if (Gi) {
      var l = iu;
      if (l !== null) throw l;
    }
  }
  function $u(l, t, a, u) {
    Gi = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate, i = e.lastBaseUpdate, f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var c = f, m = c.next;
      c.next = null, i === null ? n = m : i.next = m, i = c;
      var r = l.alternate;
      r !== null && (r = r.updateQueue, f = r.lastBaseUpdate, f !== i && (f === null ? r.firstBaseUpdate = m : f.next = m, r.lastBaseUpdate = c));
    }
    if (n !== null) {
      var z = e.baseState;
      i = 0, r = m = c = null, f = n;
      do {
        var v = f.lane & -536870913, g = v !== f.lane;
        if (g ? (x & v) === v : (u & v) === v) {
          v !== 0 && v === nu && (Gi = !0), r !== null && (r = r.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l, N = f;
            v = t;
            var al = a;
            switch (N.tag) {
              case 1:
                if (O = N.payload, typeof O == "function") {
                  z = O.call(al, z, v);
                  break l;
                }
                z = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = N.payload, v = typeof O == "function" ? O.call(al, z, v) : O, v == null) break l;
                z = R({}, z, v);
                break l;
              case 2:
                aa = !0;
            }
          }
          v = f.callback, v !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [v] : g.push(v));
        } else
          g = {
            lane: v,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, r === null ? (m = r = g, c = z) : r = r.next = g, i |= v;
        if (f = f.next, f === null) {
          if (f = e.shared.pending, f === null)
            break;
          g = f, f = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      r === null && (c = z), e.baseState = c, e.firstBaseUpdate = m, e.lastBaseUpdate = r, n === null && (e.shared.lanes = 0), sa |= i, l.lanes = i, l.memoizedState = z;
    }
  }
  function Us(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Us(a[l], t);
  }
  var su = d(null), ke = d(0);
  function Ns(l, t) {
    l = Kt, _(ke, l), _(su, t), Kt = l | t.baseLanes;
  }
  function ji() {
    _(ke, Kt), _(su, su.current);
  }
  function Xi() {
    Kt = ke.current, T(su), T(ke);
  }
  var tt = d(null), vt = null;
  function na(l) {
    var t = l.alternate;
    _(vl, vl.current & 1), _(tt, l), vt === null && (t === null || su.current !== null || t.memoizedState !== null) && (vt = l);
  }
  function Qi(l) {
    _(vl, vl.current), _(tt, l), vt === null && (vt = l);
  }
  function Rs(l) {
    l.tag === 22 ? (_(vl, vl.current), _(tt, l), vt === null && (vt = l)) : ia();
  }
  function ia() {
    _(vl, vl.current), _(tt, tt.current);
  }
  function at(l) {
    T(tt), vt === l && (vt = null), T(vl);
  }
  var vl = d(0);
  function Fe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || wf(a) || Wf(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, Y = null, ll = null, rl = null, Ie = !1, du = !1, Ya = !1, Pe = 0, ku = 0, ou = null, Xy = 0;
  function ol() {
    throw Error(h(321));
  }
  function xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, u, e, n) {
    return Gt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? h0 : uf, Ya = !1, n = a(u, e), Ya = !1, du && (n = Cs(
      t,
      a,
      u,
      e
    )), qs(l), n;
  }
  function qs(l) {
    S.H = Pu;
    var t = ll !== null && ll.next !== null;
    if (Gt = 0, rl = ll = Y = null, Ie = !1, ku = 0, ou = null, t) throw Error(h(300));
    l === null || Sl || (l = l.dependencies, l !== null && Ve(l) && (Sl = !0));
  }
  function Cs(l, t, a, u) {
    Y = l;
    var e = 0;
    do {
      if (du && (ou = null), ku = 0, du = !1, 25 <= e) throw Error(h(301));
      if (e += 1, rl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = g0, n = t(a, u);
    } while (du);
    return n;
  }
  function Qy() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fu(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Vi() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Li(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Ki(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Gt = 0, rl = ll = Y = null, du = !1, ku = Pe = 0, ou = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return rl === null ? Y.memoizedState = rl = l : rl = rl.next = l, rl;
  }
  function hl() {
    if (ll === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = rl === null ? Y.memoizedState : rl.next;
    if (t !== null)
      rl = t, ll = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(h(467)) : Error(h(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, rl === null ? Y.memoizedState = rl = l : rl = rl.next = l;
    }
    return rl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = ku;
    return ku += 1, ou === null && (ou = []), l = ps(ou, l, t), t = Y, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? h0 : uf), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Hl) return Ml(l);
    }
    throw Error(h(438, String(l)));
  }
  function Ji(l) {
    var t = null, a = Y.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = Y.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), Y.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = Qa;
    return t.index++, a;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = hl();
    return wi(t, ll, l);
  }
  function wi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        e.next = n.next, n.next = i;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var f = i = null, c = null, m = t, r = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (x & z) === z : (Gt & z) === z) {
          var v = m.revertLane;
          if (v === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === nu && (r = !0);
          else if ((Gt & v) === v) {
            m = m.next, v === nu && (r = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (f = c = z, i = n) : c = c.next = z, Y.lanes |= v, sa |= v;
          z = m.action, Ya && a(n, z), n = m.hasEagerState ? m.eagerState : a(n, z);
        } else
          v = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (f = c = v, i = n) : c = c.next = v, Y.lanes |= z, sa |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? i = n : c.next = f, !Pl(n, l.memoizedState) && (Sl = !0, r && (a = iu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = c, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Wi(l) {
    var t = hl(), a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = e = e.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== e);
      Pl(n, t.memoizedState) || (Sl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Bs(l, t, a) {
    var u = Y, e = hl(), n = K;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var i = !Pl(
      (ll || e).memoizedState,
      a
    );
    if (i && (e.memoizedState = a, Sl = !0), e = e.queue, Fi(js.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || i || rl !== null && rl.memoizedState.tag & 1) {
      if (u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        Gs.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), nl === null) throw Error(h(349));
      n || (Gt & 127) !== 0 || Ys(u, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = Y.updateQueue, t === null ? (t = ln(), Y.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Gs(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Xs(t) && Qs(l);
  }
  function js(l, t, a) {
    return a(function() {
      Xs(t) && Qs(l);
    });
  }
  function Xs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Qs(l) {
    var t = Ma(l, 2);
    t !== null && wl(t, l, 2);
  }
  function $i(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function xs(l, t, a, u) {
    return l.baseState = a, wi(
      l,
      ll,
      typeof u == "function" ? u : jt
    );
  }
  function xy(l, t, a, u, e) {
    if (nn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      S.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Zs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Zs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, i = {};
      S.T = i;
      try {
        var f = a(e, u), c = S.S;
        c !== null && c(i, f), Vs(l, t, f);
      } catch (m) {
        ki(l, t, m);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), S.T = n;
      }
    } else
      try {
        n = a(e, u), Vs(l, t, n);
      } catch (m) {
        ki(l, t, m);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Ls(l, t, u);
      },
      function(u) {
        return ki(l, t, u);
      }
    ) : Ls(l, t, a);
  }
  function Ls(l, t, a) {
    t.status = "fulfilled", t.value = a, Ks(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Zs(l, a)));
  }
  function ki(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Ks(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if (K) {
      var a = nl.formState;
      if (a !== null) {
        l: {
          var u = Y;
          if (K) {
            if (il) {
              t: {
                for (var e = il, n = mt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                il = ht(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Bl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: t
    }, a.queue = u, a = y0.bind(
      null,
      Y,
      u
    ), u.dispatch = a, u = $i(!1), n = af.bind(
      null,
      Y,
      !1,
      u.queue
    ), u = Bl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = xy.bind(
      null,
      Y,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Ws(l) {
    var t = hl();
    return $s(t, ll, l);
  }
  function $s(l, t, a) {
    if (t = wi(
      l,
      t,
      Js
    )[0], l = an(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Fu(t);
      } catch (i) {
        throw i === fu ? Je : i;
      }
    else u = t;
    t = hl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (Y.flags |= 2048, yu(
      9,
      { destroy: void 0 },
      Zy.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Zy(l, t) {
    l.action = t;
  }
  function ks(l) {
    var t = hl(), a = ll;
    if (a !== null)
      return $s(t, a, l);
    hl(), t = t.memoizedState, a = hl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function yu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = Y.updateQueue, t === null && (t = ln(), Y.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Fs() {
    return hl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Bl();
    Y.flags |= l, e.memoizedState = yu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = hl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ll !== null && u !== null && xi(u, ll.memoizedState.deps) ? e.memoizedState = yu(t, n, a, u) : (Y.flags |= l, e.memoizedState = yu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Is(l, t) {
    un(8390656, 8, l, t);
  }
  function Fi(l, t) {
    en(2048, 8, l, t);
  }
  function Vy(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = ln(), Y.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function Ps(l) {
    var t = hl().memoizedState;
    return Vy({ ref: t, nextImpl: l }), function() {
      if ((W & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function l0(l, t) {
    return en(4, 2, l, t);
  }
  function t0(l, t) {
    return en(4, 4, l, t);
  }
  function a0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function u0(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, a0.bind(null, t, l), a);
  }
  function Ii() {
  }
  function e0(l, t) {
    var a = hl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && xi(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function n0(l, t) {
    var a = hl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && xi(t, u[1]))
      return u[0];
    if (u = l(), Ya) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Pi(l, t, a) {
    return a === void 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = id(), Y.lanes |= l, sa |= l, a);
  }
  function i0(l, t, a, u) {
    return Pl(a, t) ? a : su.current !== null ? (l = Pi(l, a, u), Pl(l, t) || (Sl = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? (Sl = !0, l.memoizedState = a) : (l = id(), Y.lanes |= l, sa |= l, t);
  }
  function f0(l, t, a, u, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T, f = {};
    S.T = f, af(l, !1, t, a);
    try {
      var c = e(), m = S.S;
      if (m !== null && m(f, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var r = jy(
          c,
          u
        );
        Iu(
          l,
          t,
          r,
          nt(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          nt(l)
        );
    } catch (z) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        nt()
      );
    } finally {
      p.p = n, i !== null && f.types !== null && (i.types = f.types), S.T = i;
    }
  }
  function Ly() {
  }
  function lf(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = c0(l).queue;
    f0(
      l,
      e,
      t,
      q,
      a === null ? Ly : function() {
        return s0(l), a(u);
      }
    );
  }
  function c0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function s0(l) {
    var t = c0(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function tf() {
    return Ml(he);
  }
  function d0() {
    return hl().memoizedState;
  }
  function o0() {
    return hl().memoizedState;
  }
  function Ky(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var u = ea(t, l, a);
          u !== null && (wl(u, t, a), wu(u, t, a)), t = { cache: Hi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Jy(l, t, a) {
    var u = nt();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? m0(t, a) : (a = bi(l, t, a, u), a !== null && (wl(a, l, u), v0(a, t, u)));
  }
  function y0(l, t, a) {
    var u = nt();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) m0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, f = n(i, a);
          if (e.hasEagerState = !0, e.eagerState = f, Pl(f, i))
            return Xe(l, t, e, 0), nl === null && je(), !1;
        } catch {
        }
      if (a = bi(l, t, e, u), a !== null)
        return wl(a, l, u), v0(a, t, u), !0;
    }
    return !1;
  }
  function af(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bf(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(h(479));
    } else
      t = bi(
        l,
        a,
        u,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function m0(l, t) {
    du = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function v0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  var Pu = {
    readContext: Ml,
    use: tn,
    useCallback: ol,
    useContext: ol,
    useEffect: ol,
    useImperativeHandle: ol,
    useLayoutEffect: ol,
    useInsertionEffect: ol,
    useMemo: ol,
    useReducer: ol,
    useRef: ol,
    useState: ol,
    useDebugValue: ol,
    useDeferredValue: ol,
    useTransition: ol,
    useSyncExternalStore: ol,
    useId: ol,
    useHostTransitionStatus: ol,
    useFormState: ol,
    useActionState: ol,
    useOptimistic: ol,
    useMemoCache: ol,
    useCacheRefresh: ol
  };
  Pu.useEffectEvent = ol;
  var h0 = {
    readContext: Ml,
    use: tn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ml,
    useEffect: Is,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        a0.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ya) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Bl();
      if (a !== void 0) {
        var e = a(t);
        if (Ya) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Jy.bind(
        null,
        Y,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = $i(l);
      var t = l.queue, a = y0.bind(null, Y, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = Bl();
      return Pi(a, l, t);
    },
    useTransition: function() {
      var l = $i(!1);
      return l = f0.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = Y, e = Bl();
      if (K) {
        if (a === void 0)
          throw Error(h(407));
        a = a();
      } else {
        if (a = t(), nl === null)
          throw Error(h(349));
        (x & 127) !== 0 || Ys(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Is(js.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        Gs.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Bl(), t = nl.identifierPrefix;
      if (K) {
        var a = _t, u = pt;
        a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Xy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: tf,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = af.bind(
        null,
        Y,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Ji,
    useCacheRefresh: function() {
      return Bl().memoizedState = Ky.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Bl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((W & 2) !== 0)
          throw Error(h(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, uf = {
    readContext: Ml,
    use: tn,
    useCallback: e0,
    useContext: Ml,
    useEffect: Fi,
    useImperativeHandle: u0,
    useInsertionEffect: l0,
    useLayoutEffect: t0,
    useMemo: n0,
    useReducer: an,
    useRef: Fs,
    useState: function() {
      return an(jt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = hl();
      return i0(
        a,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(jt)[0], t = hl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: d0,
    useHostTransitionStatus: tf,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l, t) {
      var a = hl();
      return xs(a, ll, l, t);
    },
    useMemoCache: Ji,
    useCacheRefresh: o0
  };
  uf.useEffectEvent = Ps;
  var g0 = {
    readContext: Ml,
    use: tn,
    useCallback: e0,
    useContext: Ml,
    useEffect: Fi,
    useImperativeHandle: u0,
    useInsertionEffect: l0,
    useLayoutEffect: t0,
    useMemo: n0,
    useReducer: Wi,
    useRef: Fs,
    useState: function() {
      return Wi(jt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = hl();
      return ll === null ? Pi(a, l, t) : i0(
        a,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wi(jt)[0], t = hl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: d0,
    useHostTransitionStatus: tf,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(l, t) {
      var a = hl();
      return ll !== null ? xs(a, ll, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: o0
  };
  g0.useEffectEvent = Ps;
  function ef(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : R({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nf = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = nt(), u = ua(a);
      u.tag = 2, t != null && (u.callback = t), t = ea(l, u, a), t !== null && (wl(t, l, a), wu(t, l, a));
    }
  };
  function r0(l, t, a, u, e, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Xu(a, u) || !Xu(e, n) : !0;
  }
  function S0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && nf.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = R({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function b0(l) {
    Ge(l);
  }
  function z0(l) {
    console.error(l);
  }
  function T0(l) {
    Ge(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function E0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ff(l, t, a) {
    return a = ua(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function A0(l) {
    return l = ua(l), l.tag = 3, l;
  }
  function p0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        E0(t, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      E0(t, a, u), typeof e != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var f = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function wy(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && eu(
        t,
        a,
        e,
        !0
      ), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return vt === null ? bn() : a.alternate === null && yl === 0 && (yl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Rf(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Rf(l, u, e)), !1;
        }
        throw Error(h(435, a.tag));
      }
      return Rf(l, u, e), bn(), !1;
    }
    if (K)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== _i && (l = Error(h(422), { cause: u }), Zu(dt(l, a)))) : (u !== _i && (t = Error(h(423), {
        cause: u
      }), Zu(
        dt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = dt(u, a), e = ff(
        l.stateNode,
        u,
        e
      ), Yi(l, e), yl !== 4 && (yl = 2)), !1;
    var n = Error(h(520), { cause: u });
    if (n = dt(n, a), fe === null ? fe = [n] : fe.push(n), yl !== 4 && (yl = 2), t === null) return !0;
    u = dt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ff(a.stateNode, u, l), Yi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (da === null || !da.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = A0(e), p0(
              e,
              l,
              a,
              u
            ), Yi(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cf = Error(h(461)), Sl = !1;
  function Dl(l, t, a, u) {
    t.child = l === null ? Ds(t, null, a, u) : Ba(
      t,
      l.child,
      a,
      u
    );
  }
  function _0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var f in u)
        f !== "ref" && (i[f] = u[f]);
    } else i = u;
    return Na(t), u = Zi(
      l,
      t,
      a,
      i,
      n,
      e
    ), f = Vi(), l !== null && !Sl ? (Li(l, t, e), Xt(l, t, e)) : (K && f && Ai(t), t.flags |= 1, Dl(l, t, u, e), t.child);
  }
  function O0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !zi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, M0(
        l,
        t,
        n,
        u,
        e
      )) : (l = xe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gf(l, e)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xu, a(i, u) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function M0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xu(n, u) && l.ref === t.ref)
        if (Sl = !1, t.pendingProps = u = n, gf(l, e))
          (l.flags & 131072) !== 0 && (Sl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return sf(
      l,
      t,
      a,
      u,
      e
    );
  }
  function D0(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return U0(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ns(t, n) : ji(), Rs(t);
      else
        return u = t.lanes = 536870912, U0(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Ns(t, n), ia(), t.memoizedState = null) : (l !== null && Ke(t, null), ji(), ia());
    return Dl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function U0(l, t, a, u, e) {
    var n = Ri();
    return n = n === null ? null : { parent: gl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), ji(), Rs(t), l !== null && eu(l, t, u, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = dn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function H0(l, t, a) {
    return Ba(t, l.child, null, a), l = cn(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function Wy(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (u.mode === "hidden")
          return l = cn(t, u), t.lanes = 536870912, le(null, l);
        if (Qi(t), (l = il) ? (l = Zd(
          l,
          mt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: pt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ms(l), a.return = t, t.child = a, Ol = t, il = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Qi(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = H0(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (Sl || eu(l, t, a, !1), e = (a & l.childLanes) !== 0, Sl || e) {
        if (u = nl, u !== null && (i = zc(u, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ma(l, i), wl(u, l, i), cf;
        bn(), t = H0(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, il = ht(i.nextSibling), Ol = t, K = !0, Pt = null, mt = !1, l !== null && gs(t, l), t = cn(t, u), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function sf(l, t, a, u, e) {
    return Na(t), a = Zi(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Vi(), l !== null && !Sl ? (Li(l, t, e), Xt(l, t, e)) : (K && u && Ai(t), t.flags |= 1, Dl(l, t, a, e), t.child);
  }
  function N0(l, t, a, u, e, n) {
    return Na(t), t.updateQueue = null, a = Cs(
      t,
      u,
      a,
      e
    ), qs(l), u = Vi(), l !== null && !Sl ? (Li(l, t, n), Xt(l, t, n)) : (K && u && Ai(t), t.flags |= 1, Dl(l, t, a, n), t.child);
  }
  function R0(l, t, a, u, e) {
    if (Na(t), t.stateNode === null) {
      var n = lu, i = a.contextType;
      typeof i == "object" && i !== null && (n = Ml(i)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Ci(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Ml(i) : lu, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (ef(
        t,
        a,
        i,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && nf.enqueueReplaceState(n, n.state, null), $u(t, u, n, e), Wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, c = Ga(a, f);
      n.props = c;
      var m = n.context, r = a.contextType;
      i = lu, typeof r == "object" && r !== null && (i = Ml(r));
      var z = a.getDerivedStateFromProps;
      r = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, r || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || m !== i) && S0(
        t,
        n,
        u,
        i
      ), aa = !1;
      var v = t.memoizedState;
      n.state = v, $u(t, u, n, e), Wu(), m = t.memoizedState, f || v !== m || aa ? (typeof z == "function" && (ef(
        t,
        a,
        z,
        u
      ), m = t.memoizedState), (c = aa || r0(
        t,
        a,
        c,
        u,
        v,
        m,
        i
      )) ? (r || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = i, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Bi(l, t), i = t.memoizedProps, r = Ga(a, i), n.props = r, z = t.pendingProps, v = n.context, m = a.contextType, c = lu, typeof m == "object" && m !== null && (c = Ml(m)), f = a.getDerivedStateFromProps, (m = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== z || v !== c) && S0(
        t,
        n,
        u,
        c
      ), aa = !1, v = t.memoizedState, n.state = v, $u(t, u, n, e), Wu();
      var g = t.memoizedState;
      i !== z || v !== g || aa || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof f == "function" && (ef(
        t,
        a,
        f,
        u
      ), g = t.memoizedState), (r = aa || r0(
        t,
        a,
        r,
        u,
        v,
        g,
        c
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), n.props = u, n.state = g, n.context = c, u = r) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ba(
      t,
      l.child,
      null,
      e
    ), t.child = Ba(
      t,
      null,
      a,
      e
    )) : Dl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function q0(l, t, a, u) {
    return Ua(), t.flags |= 256, Dl(l, t, a, u), t.child;
  }
  var df = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function of(l) {
    return { baseLanes: l, cachePool: Es() };
  }
  function yf(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= et), l;
  }
  function C0(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (vl.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? na(t) : ia(), (l = il) ? (l = Zd(
          l,
          mt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: pt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ms(l), a.return = t, t.child = a, Ol = t, il = null)) : l = null, l === null) throw la(t);
        return Wf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = u.children;
      return u = u.fallback, e ? (ia(), e = t.mode, f = dn(
        { mode: "hidden", children: f },
        e
      ), u = Da(
        u,
        e,
        a,
        null
      ), f.return = t, u.return = t, f.sibling = u, t.child = f, u = t.child, u.memoizedState = of(a), u.childLanes = yf(
        l,
        i,
        a
      ), t.memoizedState = df, le(null, u)) : (na(t), mf(t, f));
    }
    var c = l.memoizedState;
    if (c !== null && (f = c.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = vf(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ia(), t.child = l.child, t.flags |= 128, t = null) : (ia(), f = u.fallback, e = t.mode, u = dn(
          { mode: "visible", children: u.children },
          e
        ), f = Da(
          f,
          e,
          a,
          null
        ), f.flags |= 2, u.return = t, f.return = t, u.sibling = f, t.child = u, Ba(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = of(a), u.childLanes = yf(
          l,
          i,
          a
        ), t.memoizedState = df, t = le(null, u));
      else if (na(t), Wf(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var m = i.dgst;
        i = m, u = Error(h(419)), u.stack = "", u.digest = i, Zu({ value: u, source: null, stack: null }), t = vf(
          l,
          t,
          a
        );
      } else if (Sl || eu(l, t, a, !1), i = (a & l.childLanes) !== 0, Sl || i) {
        if (i = nl, i !== null && (u = zc(i, a), u !== 0 && u !== c.retryLane))
          throw c.retryLane = u, Ma(l, u), wl(i, l, u), cf;
        wf(f) || bn(), t = vf(
          l,
          t,
          a
        );
      } else
        wf(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, il = ht(
          f.nextSibling
        ), Ol = t, K = !0, Pt = null, mt = !1, l !== null && gs(t, l), t = mf(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (ia(), f = u.fallback, e = t.mode, c = l.child, m = c.sibling, u = qt(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 65011712, m !== null ? f = qt(
      m,
      f
    ) : (f = Da(
      f,
      e,
      a,
      null
    ), f.flags |= 2), f.return = t, u.return = t, u.sibling = f, t.child = u, le(null, u), u = t.child, f = l.child.memoizedState, f === null ? f = of(a) : (e = f.cachePool, e !== null ? (c = gl._currentValue, e = e.parent !== c ? { parent: c, pool: c } : e) : e = Es(), f = {
      baseLanes: f.baseLanes | a,
      cachePool: e
    }), u.memoizedState = f, u.childLanes = yf(
      l,
      i,
      a
    ), t.memoizedState = df, le(l.child, u)) : (na(t), a = l.child, l = a.sibling, a = qt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function mf(l, t) {
    return t = dn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function dn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function vf(l, t, a) {
    return Ba(t, l.child, null, a), l = mf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function B0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Di(l.return, t, a);
  }
  function hf(l, t, a, u, e, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = a, i.tailMode = e, i.treeForkCount = n);
  }
  function Y0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var i = vl.current, f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, _(vl, i), Dl(l, t, u, a), u = K ? xu : 0, !f && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && B0(l, a, t);
        else if (l.tag === 19)
          B0(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && Fe(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), hf(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Fe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        hf(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        hf(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (eu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = qt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function gf(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function $y(l, t, a) {
    switch (t.tag) {
      case 3:
        Cl(t, t.stateNode.containerInfo), ta(t, gl, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qi(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? C0(l, t, a) : (na(t), l = Xt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (eu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Y0(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(vl, vl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, D0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, gl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function G0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Sl = !0;
      else {
        if (!gf(l, a) && (t.flags & 128) === 0)
          return Sl = !1, $y(
            l,
            t,
            a
          );
        Sl = (l.flags & 131072) !== 0;
      }
    else
      Sl = !1, K && (t.flags & 1048576) !== 0 && hs(t, xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = qa(t.elementType), t.type = l, typeof l == "function")
            zi(l) ? (u = Ga(l, u), t.tag = 1, t = R0(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = sf(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === it) {
                t.tag = 11, t = _0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === L) {
                t.tag = 14, t = O0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = Ut(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return sf(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Ga(
          u,
          t.pendingProps
        ), R0(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Cl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bi(l, t), $u(t, u, null, a);
          var i = t.memoizedState;
          if (u = i.cache, ta(t, gl, u), u !== n.cache && Ui(
            t,
            [gl],
            a,
            !0
          ), Wu(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = q0(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = dt(
                Error(h(424)),
                t
              ), Zu(e), t = q0(
                l,
                t,
                u,
                a
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, il = ht(l.firstChild), Ol = t, K = !0, Pt = null, mt = !0, a = Ds(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ua(), u === e) {
              t = Xt(
                l,
                t,
                a
              );
              break l;
            }
            Dl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = Wd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : K || (a = t.type, l = t.pendingProps, u = On(
          j.current
        ).createElement(a), u[_l] = t, u[xl] = l, Ul(u, a, l), El(u), t.stateNode = u) : t.memoizedState = Wd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ou(t), l === null && K && (u = t.stateNode = Kd(
          t.type,
          t.pendingProps,
          j.current
        ), Ol = t, mt = !0, e = il, va(t.type) ? ($f = e, il = ht(u.firstChild)) : il = e), Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = u = il) && (u = _m(
          u,
          t.type,
          t.pendingProps,
          mt
        ), u !== null ? (t.stateNode = u, Ol = t, il = ht(u.firstChild), mt = !1, e = !0) : e = !1), e || la(t)), Ou(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, Lf(e, n) ? u = null : i !== null && Lf(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = Zi(
          l,
          t,
          Qy,
          null,
          null,
          a
        ), he._currentValue = e), sn(l, t), Dl(l, t, u, a), t.child;
      case 6:
        return l === null && K && ((l = a = il) && (a = Om(
          a,
          t.pendingProps,
          mt
        ), a !== null ? (t.stateNode = a, Ol = t, il = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return C0(l, t, a);
      case 4:
        return Cl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ba(
          t,
          null,
          u,
          a
        ) : Dl(l, t, u, a), t.child;
      case 11:
        return _0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Dl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Dl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Na(t), e = Ml(e), u = u(e), t.flags |= 1, Dl(l, t, u, a), t.child;
      case 14:
        return O0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return M0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Y0(l, t, a);
      case 31:
        return Wy(l, t, a);
      case 22:
        return D0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Na(t), u = Ml(gl), l === null ? (e = Ri(), e === null && (e = nl, n = Hi(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Ci(t), ta(t, gl, e)) : ((l.lanes & a) !== 0 && (Bi(l, t), $u(t, null, null, a), Wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ta(t, gl, u)) : (u = n.cache, ta(t, gl, u), u !== e.cache && Ui(
          t,
          [gl],
          a,
          !0
        ))), Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function rf(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dd()) l.flags |= 8192;
        else
          throw Ca = we, qi;
    } else l.flags &= -16777217;
  }
  function j0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Pd(t))
      if (dd()) l.flags |= 8192;
      else
        throw Ca = we, qi;
  }
  function on(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? rc() : 536870912, l.lanes |= t, gu |= t);
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function fl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function ky(l, t, a) {
    var u = t.pendingProps;
    switch (pi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return fl(t), null;
      case 1:
        return fl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(gl), ml(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (uu(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oi())), fl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (fl(t), j0(t, n)) : (fl(t), rf(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Qt(t), fl(t), j0(t, n)) : (fl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Qt(t), fl(t), rf(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (Te(t), a = j.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return fl(t), null;
          }
          l = M.current, uu(t) ? rs(t) : (l = Kd(e, u, a), t.stateNode = l, Qt(t));
        }
        return fl(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return fl(t), null;
          }
          if (n = M.current, uu(t))
            rs(t);
          else {
            var i = On(
              j.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? i.createElement("select", {
                      is: u.is
                    }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? i.createElement(e, { is: u.is }) : i.createElement(e);
                }
            }
            n[_l] = t, n[xl] = u;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Ul(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Qt(t);
          }
        }
        return fl(t), rf(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = j.current, uu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[_l] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Cd(l.nodeValue, a)), l || la(t, !0);
          } else
            l = On(l).createTextNode(
              u
            ), l[_l] = t, t.stateNode = l;
        }
        return fl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = uu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[_l] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            fl(t), l = !1;
          } else
            a = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return fl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = uu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[_l] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            fl(t), e = !1;
          } else
            e = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), on(t, t.updateQueue), fl(t), null);
      case 4:
        return ml(), l === null && Xf(t.stateNode.containerInfo), fl(t), null;
      case 10:
        return Yt(t.type), fl(t), null;
      case 19:
        if (T(vl), u = t.memoizedState, u === null) return fl(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (yl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fe(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, on(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ys(a, l), a = a.sibling;
                  return _(
                    vl,
                    vl.current & 1 | 2
                  ), K && Ct(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && kl() > gn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Fe(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, on(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !K)
                return fl(t), null;
            } else
              2 * kl() - u.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = kl(), l.sibling = null, a = vl.current, _(
          vl,
          e ? a & 1 | 2 : a & 1
        ), K && Ct(t, u.treeForkCount), l) : (fl(t), null);
      case 22:
      case 23:
        return at(t), Xi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (fl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fl(t), a = t.updateQueue, a !== null && on(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && T(Ra), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(gl), fl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Fy(l, t) {
    switch (pi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(gl), ml(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(vl), null;
      case 4:
        return ml(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return at(t), Xi(), l !== null && T(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(gl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function X0(l, t) {
    switch (pi(t), t.tag) {
      case 3:
        Yt(gl), ml();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        ml();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(vl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        at(t), Xi(), l !== null && T(Ra);
        break;
      case 24:
        Yt(gl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, i = a.inst;
            u = n(), i.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      I(t, t.return, f);
    }
  }
  function fa(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, e = t;
              var c = a, m = f;
              try {
                m();
              } catch (r) {
                I(
                  e,
                  c,
                  r
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (r) {
      I(t, t.return, r);
    }
  }
  function Q0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (u) {
        I(l, l.return, u);
      }
    }
  }
  function x0(l, t, a) {
    a.props = Ga(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      I(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      I(l, t, e);
    }
  }
  function Ot(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          I(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          I(l, t, e);
        }
      else a.current = null;
  }
  function Z0(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function Sf(l, t, a) {
    try {
      var u = l.stateNode;
      bm(u, l.type, a, t), u[xl] = t;
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function V0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && va(l.type) || l.tag === 4;
  }
  function bf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || V0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && va(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Nt));
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (zf(l, t, a), l = l.sibling; l !== null; )
        zf(l, t, a), l = l.sibling;
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (yn(l, t, a), l = l.sibling; l !== null; )
        yn(l, t, a), l = l.sibling;
  }
  function L0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ul(t, u, a), t[_l] = l, t[xl] = a;
    } catch (n) {
      I(l, l.return, n);
    }
  }
  var xt = !1, bl = !1, Tf = !1, K0 = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Iy(l, t) {
    if (l = l.containerInfo, Zf = qn, l = us(l), mi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, f = -1, c = -1, m = 0, r = 0, z = l, v = null;
            t: for (; ; ) {
              for (var g; z !== a || e !== 0 && z.nodeType !== 3 || (f = i + e), z !== n || u !== 0 && z.nodeType !== 3 || (c = i + u), z.nodeType === 3 && (i += z.nodeValue.length), (g = z.firstChild) !== null; )
                v = z, z = g;
              for (; ; ) {
                if (z === l) break t;
                if (v === a && ++m === e && (f = i), v === n && ++r === u && (c = i), (g = z.nextSibling) !== null) break;
                z = v, v = z.parentNode;
              }
              z = g;
            }
            a = f === -1 || c === -1 ? null : { start: f, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vf = { focusedElem: l, selectionRange: a }, qn = !1, Al = t; Al !== null; )
      if (t = Al, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Al = l;
      else
        for (; Al !== null; ) {
          switch (t = Al, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var O = Ga(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    O,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  I(
                    a,
                    a.return,
                    N
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Jf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Al = l;
            break;
          }
          Al = t.return;
        }
  }
  function J0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (Vt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              I(a, a.return, i);
            }
          else {
            var e = Ga(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              I(
                a,
                a.return,
                i
              );
            }
          }
        u & 64 && Q0(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (Vt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Hs(l, t);
          } catch (i) {
            I(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && L0(a);
      case 26:
      case 5:
        Vt(l, a), t === null && u & 4 && Z0(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        Vt(l, a), u & 4 && $0(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && k0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = fm.bind(
          null,
          a
        ), Mm(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || xt, !u) {
          t = t !== null && t.memoizedState !== null || bl, e = xt;
          var n = bl;
          xt = u, (bl = t) && !n ? Lt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Vt(l, a), xt = e, bl = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function w0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, w0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var dl = null, Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; )
      W0(l, t, a), a = a.sibling;
  }
  function W0(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Mu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        bl || Ot(a, t), Zt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        bl || Ot(a, t);
        var u = dl, e = Vl;
        va(a.type) && (dl = a.stateNode, Vl = !1), Zt(
          l,
          t,
          a
        ), ye(a.stateNode), dl = u, Vl = e;
        break;
      case 5:
        bl || Ot(a, t);
      case 6:
        if (u = dl, e = Vl, dl = null, Zt(
          l,
          t,
          a
        ), dl = u, Vl = e, dl !== null)
          if (Vl)
            try {
              (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(a.stateNode);
            } catch (n) {
              I(
                a,
                t,
                n
              );
            }
          else
            try {
              dl.removeChild(a.stateNode);
            } catch (n) {
              I(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        dl !== null && (Vl ? (l = dl, Qd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), pu(l)) : Qd(dl, a.stateNode));
        break;
      case 4:
        u = dl, e = Vl, dl = a.stateNode.containerInfo, Vl = !0, Zt(
          l,
          t,
          a
        ), dl = u, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fa(2, a, t), bl || fa(4, a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 1:
        bl || (Ot(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && x0(
          a,
          t,
          u
        )), Zt(
          l,
          t,
          a
        );
        break;
      case 21:
        Zt(
          l,
          t,
          a
        );
        break;
      case 22:
        bl = (u = bl) || a.memoizedState !== null, Zt(
          l,
          t,
          a
        ), bl = u;
        break;
      default:
        Zt(
          l,
          t,
          a
        );
    }
  }
  function $0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        pu(l);
      } catch (a) {
        I(t, t.return, a);
      }
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        pu(l);
      } catch (a) {
        I(t, t.return, a);
      }
  }
  function Py(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new K0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new K0()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function mn(l, t) {
    var a = Py(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = cm.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, i = t, f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (va(f.type)) {
                dl = f.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              dl = f.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              dl = f.stateNode.containerInfo, Vl = !0;
              break l;
          }
          f = f.return;
        }
        if (dl === null) throw Error(h(160));
        W0(n, i, e), dl = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        F0(t, l), t = t.sibling;
  }
  var bt = null;
  function F0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), u & 4 && (fa(3, l, l.return), ae(3, l), fa(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), u & 64 && xt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = bt;
        if (Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Hu] || n[_l] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Ul(n, u, a), n[_l] = l, El(n), u = n;
                      break l;
                    case "link":
                      var i = Fd(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ul(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = Fd(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ul(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  n[_l] = l, El(n), u = n;
                }
                l.stateNode = u;
              } else
                Id(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = kd(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Id(
              e,
              l.type,
              l.stateNode
            ) : kd(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && Sf(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), a !== null && u & 4 && Sf(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (O) {
            I(l, l.return, O);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, Sf(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (Tf = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (O) {
            I(l, l.return, O);
          }
        }
        break;
      case 3:
        if (Un = null, e = bt, bt = Mn(t.containerInfo), Ll(t, l), bt = e, Kl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            pu(t.containerInfo);
          } catch (O) {
            I(l, l.return, O);
          }
        Tf && (Tf = !1, I0(l));
        break;
      case 4:
        u = bt, bt = Mn(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), bt = u;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = kl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null, m = xt, r = bl;
        if (xt = m || e, bl = r || c, Ll(t, l), bl = r, xt = m, Kl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || c || xt || bl || ja(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (n = c.stateNode, e)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = c.stateNode;
                    var z = c.memoizedProps.style, v = z != null && z.hasOwnProperty("display") ? z.display : null;
                    f.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                c = t;
                try {
                  var g = c.stateNode;
                  e ? xd(g, !0) : xd(c.stateNode, !1);
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, mn(l, a))));
        break;
      case 19:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ll(t, l), Kl(l);
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (V0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = bf(l);
            yn(l, n, e);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (wa(i, ""), a.flags &= -33);
            var f = bf(l);
            yn(l, f, i);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo, m = bf(l);
            zf(
              l,
              m,
              c
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (r) {
        I(l, l.return, r);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function I0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        I0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        J0(l, t.alternate, t), t = t.sibling;
  }
  function ja(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fa(4, t, t.return), ja(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && x0(
            t,
            t.return,
            a
          ), ja(t);
          break;
        case 27:
          ye(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), ja(t);
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (m) {
              I(u, u.return, m);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var f = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  Us(c[e], f);
            } catch (m) {
              I(u, u.return, m);
            }
          }
          a && i & 64 && Q0(n), ue(n, n.return);
          break;
        case 27:
          L0(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            a
          ), a && u === null && i & 4 && Z0(n), ue(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            a
          );
          break;
        case 31:
          Lt(
            e,
            n,
            a
          ), a && i & 4 && $0(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            a
          ), a && i & 4 && k0(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ef(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Vu(a));
  }
  function Af(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        P0(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function P0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (c) {
            I(t, t.return, c);
          }
        } else
          zt(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, mu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ef(i, t);
        break;
      case 24:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && Af(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          a,
          u
        );
    }
  }
  function mu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, f = a, c = u, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          mu(
            n,
            i,
            f,
            c,
            e
          ), ae(8, i);
          break;
        case 23:
          break;
        case 22:
          var r = i.stateNode;
          i.memoizedState !== null ? r._visibility & 2 ? mu(
            n,
            i,
            f,
            c,
            e
          ) : ee(
            n,
            i
          ) : (r._visibility |= 2, mu(
            n,
            i,
            f,
            c,
            e
          )), e && m & 2048 && Ef(
            i.alternate,
            i
          );
          break;
        case 24:
          mu(
            n,
            i,
            f,
            c,
            e
          ), e && m & 2048 && Af(i.alternate, i);
          break;
        default:
          mu(
            n,
            i,
            f,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Ef(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && Af(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function vu(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ld(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function ld(l, t, a) {
    switch (l.tag) {
      case 26:
        vu(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && Xm(
          a,
          bt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        vu(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = bt;
        bt = Mn(l.stateNode.containerInfo), vu(
          l,
          t,
          a
        ), bt = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, vu(
          l,
          t,
          a
        ), ne = u) : vu(
          l,
          t,
          a
        ));
        break;
      default:
        vu(
          l,
          t,
          a
        );
    }
  }
  function td(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ie(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, ud(
            u,
            l
          );
        }
      td(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ad(l), l = l.sibling;
  }
  function ad(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ie(l), l.flags & 2048 && fa(9, l, l.return);
        break;
      case 3:
        ie(l);
        break;
      case 12:
        ie(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : ie(l);
        break;
      default:
        ie(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, ud(
            u,
            l
          );
        }
      td(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, t, t.return), vn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function ud(l, t) {
    for (; Al !== null; ) {
      var a = Al;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Al = u;
      else
        l: for (a = l; Al !== null; ) {
          u = Al;
          var e = u.sibling, n = u.return;
          if (w0(u), u === a) {
            Al = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Al = e;
            break l;
          }
          Al = n;
        }
    }
  }
  var lm = {
    getCacheForType: function(l) {
      var t = Ml(gl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Ml(gl).controller.signal;
    }
  }, tm = typeof WeakMap == "function" ? WeakMap : Map, W = 0, nl = null, X = null, x = 0, F = 0, ut = null, ca = !1, hu = !1, pf = !1, Kt = 0, yl = 0, sa = 0, Xa = 0, _f = 0, et = 0, gu = 0, fe = null, Jl = null, Of = !1, hn = 0, ed = 0, gn = 1 / 0, rn = null, da = null, Tl = 0, oa = null, ru = null, Jt = 0, Mf = 0, Df = null, nd = null, ce = 0, Uf = null;
  function nt() {
    return (W & 2) !== 0 && x !== 0 ? x & -x : S.T !== null ? Bf() : Tc();
  }
  function id() {
    if (et === 0)
      if ((x & 536870912) === 0 || K) {
        var l = pe;
        pe <<= 1, (pe & 3932160) === 0 && (pe = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function wl(l, t, a) {
    (l === nl && (F === 2 || F === 9) || l.cancelPendingCommit !== null) && (Su(l, 0), ya(
      l,
      x,
      et,
      !1
    )), Uu(l, a), ((W & 2) === 0 || l !== nl) && (l === nl && ((W & 2) === 0 && (Xa |= a), yl === 4 && ya(
      l,
      x,
      et,
      !1
    )), Mt(l));
  }
  function fd(l, t, a) {
    if ((W & 6) !== 0) throw Error(h(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), e = u ? em(l, t) : Nf(l, t, !0), n = u;
    do {
      if (e === 0) {
        hu && !u && ya(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !am(a)) {
          e = Nf(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              e = fe;
              var c = f.current.memoizedState.isDehydrated;
              if (c && (Su(f, i).flags |= 256), i = Nf(
                f,
                i,
                !1
              ), i !== 2) {
                if (pf && !c) {
                  f.errorRecoveryDisabledLanes |= n, Xa |= n, e = 4;
                  break l;
                }
                n = Jl, Jl = e, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              e = i;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Su(l, 0), ya(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ya(
                u,
                t,
                et,
                !ca
              );
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - kl(), 10 < e)) {
            if (ya(
              u,
              t,
              et,
              !ca
            ), Oe(u, 0, !0) !== 0) break l;
            Jt = t, u.timeoutHandle = jd(
              cd.bind(
                null,
                u,
                a,
                Jl,
                rn,
                Of,
                t,
                et,
                Xa,
                gu,
                ca,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          cd(
            u,
            a,
            Jl,
            rn,
            Of,
            t,
            et,
            Xa,
            gu,
            ca,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function cd(l, t, a, u, e, n, i, f, c, m, r, z, v, g) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, ld(
        t,
        n,
        z
      );
      var O = (n & 62914560) === n ? hn - kl() : (n & 4194048) === n ? ed - kl() : 0;
      if (O = Qm(
        z,
        O
      ), O !== null) {
        Jt = n, l.cancelPendingCommit = O(
          gd.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            i,
            f,
            c,
            r,
            z,
            null,
            v,
            g
          )
        ), ya(l, n, i, !m);
        return;
      }
    }
    gd(
      l,
      t,
      n,
      a,
      u,
      e,
      i,
      f,
      c
    );
  }
  function am(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ya(l, t, a, u) {
    t &= ~_f, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), i = 1 << n;
      u[n] = -1, e &= ~i;
    }
    a !== 0 && Sc(l, a, t);
  }
  function Sn() {
    return (W & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hf() {
    if (X !== null) {
      if (F === 0)
        var l = X.return;
      else
        l = X, Bt = Ha = null, Ki(l), cu = null, Ku = 0, l = X;
      for (; l !== null; )
        X0(l.alternate, l), l = l.return;
      X = null;
    }
  }
  function Su(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, Em(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Jt = 0, Hf(), nl = l, X = a = qt(l.current, null), x = t, F = 0, ut = null, ca = !1, hu = Du(l, t), pf = !1, gu = et = _f = Xa = sa = yl = 0, Jl = fe = null, Of = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Kt = t, je(), a;
  }
  function sd(l, t) {
    Y = null, S.H = Pu, t === fu || t === Je ? (t = _s(), F = 3) : t === qi ? (t = _s(), F = 4) : F = t === cf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, X === null && (yl = 1, fn(
      l,
      dt(t, l.current)
    ));
  }
  function dd() {
    var l = tt.current;
    return l === null ? !0 : (x & 4194048) === x ? vt === null : (x & 62914560) === x || (x & 536870912) !== 0 ? l === vt : !1;
  }
  function od() {
    var l = S.H;
    return S.H = Pu, l === null ? Pu : l;
  }
  function yd() {
    var l = S.A;
    return S.A = lm, l;
  }
  function bn() {
    yl = 4, ca || (x & 4194048) !== x && tt.current !== null || (hu = !0), (sa & 134217727) === 0 && (Xa & 134217727) === 0 || nl === null || ya(
      nl,
      x,
      et,
      !1
    );
  }
  function Nf(l, t, a) {
    var u = W;
    W |= 2;
    var e = od(), n = yd();
    (nl !== l || x !== t) && (rn = null, Su(l, t)), t = !1;
    var i = yl;
    l: do
      try {
        if (F !== 0 && X !== null) {
          var f = X, c = ut;
          switch (F) {
            case 8:
              Hf(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var m = F;
              if (F = 0, ut = null, bu(l, f, c, m), a && hu) {
                i = 0;
                break l;
              }
              break;
            default:
              m = F, F = 0, ut = null, bu(l, f, c, m);
          }
        }
        um(), i = yl;
        break;
      } catch (r) {
        sd(l, r);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Ha = null, W = u, S.H = e, S.A = n, X === null && (nl = null, x = 0, je()), i;
  }
  function um() {
    for (; X !== null; ) md(X);
  }
  function em(l, t) {
    var a = W;
    W |= 2;
    var u = od(), e = yd();
    nl !== l || x !== t ? (rn = null, gn = kl() + 500, Su(l, t)) : hu = Du(
      l,
      t
    );
    l: do
      try {
        if (F !== 0 && X !== null) {
          t = X;
          var n = ut;
          t: switch (F) {
            case 1:
              F = 0, ut = null, bu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (As(n)) {
                F = 0, ut = null, vd(t);
                break;
              }
              t = function() {
                F !== 2 && F !== 9 || nl !== l || (F = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              F = 7;
              break l;
            case 4:
              F = 5;
              break l;
            case 7:
              As(n) ? (F = 0, ut = null, vd(t)) : (F = 0, ut = null, bu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (X.tag) {
                case 26:
                  i = X.memoizedState;
                case 5:
                case 27:
                  var f = X;
                  if (i ? Pd(i) : f.stateNode.complete) {
                    F = 0, ut = null;
                    var c = f.sibling;
                    if (c !== null) X = c;
                    else {
                      var m = f.return;
                      m !== null ? (X = m, zn(m)) : X = null;
                    }
                    break t;
                  }
              }
              F = 0, ut = null, bu(l, t, n, 5);
              break;
            case 6:
              F = 0, ut = null, bu(l, t, n, 6);
              break;
            case 8:
              Hf(), yl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        nm();
        break;
      } catch (r) {
        sd(l, r);
      }
    while (!0);
    return Bt = Ha = null, S.H = u, S.A = e, W = a, X !== null ? 0 : (nl = null, x = 0, je(), yl);
  }
  function nm() {
    for (; X !== null && !Do(); )
      md(X);
  }
  function md(l) {
    var t = G0(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
  }
  function vd(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = N0(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          x
        );
        break;
      case 11:
        t = N0(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          x
        );
        break;
      case 5:
        Ki(t);
      default:
        X0(a, t), t = X = ys(t, Kt), t = G0(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
  }
  function bu(l, t, a, u) {
    Bt = Ha = null, Ki(t), cu = null, Ku = 0;
    var e = t.return;
    try {
      if (wy(
        l,
        e,
        t,
        a,
        x
      )) {
        yl = 1, fn(
          l,
          dt(a, l.current)
        ), X = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw X = e, n;
      yl = 1, fn(
        l,
        dt(a, l.current)
      ), X = null;
      return;
    }
    t.flags & 32768 ? (K || u === 1 ? l = !0 : hu || (x & 536870912) !== 0 ? l = !1 : (ca = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hd(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        hd(
          t,
          ca
        );
        return;
      }
      l = t.return;
      var a = ky(
        t.alternate,
        t,
        Kt
      );
      if (a !== null) {
        X = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = l;
    } while (t !== null);
    yl === 0 && (yl = 5);
  }
  function hd(l, t) {
    do {
      var a = Fy(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, X = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        X = l;
        return;
      }
      X = l = a;
    } while (l !== null);
    yl = 6, X = null;
  }
  function gd(l, t, a, u, e, n, i, f, c) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (Tl !== 0);
    if ((W & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= Si, jo(
        l,
        a,
        n,
        i,
        f,
        c
      ), l === nl && (X = nl = null, x = 0), ru = t, oa = l, Jt = a, Mf = n, Df = e, nd = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, sm(Ee, function() {
        return Td(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null, e = p.p, p.p = 2, i = W, W |= 4;
        try {
          Iy(l, t, a);
        } finally {
          W = i, p.p = e, S.T = u;
        }
      }
      Tl = 1, rd(), Sd(), bd();
    }
  }
  function rd() {
    if (Tl === 1) {
      Tl = 0;
      var l = oa, t = ru, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var u = p.p;
        p.p = 2;
        var e = W;
        W |= 4;
        try {
          F0(t, l);
          var n = Vf, i = us(l.containerInfo), f = n.focusedElem, c = n.selectionRange;
          if (i !== f && f && f.ownerDocument && as(
            f.ownerDocument.documentElement,
            f
          )) {
            if (c !== null && mi(f)) {
              var m = c.start, r = c.end;
              if (r === void 0 && (r = m), "selectionStart" in f)
                f.selectionStart = m, f.selectionEnd = Math.min(
                  r,
                  f.value.length
                );
              else {
                var z = f.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var g = v.getSelection(), O = f.textContent.length, N = Math.min(c.start, O), al = c.end === void 0 ? N : Math.min(c.end, O);
                  !g.extend && N > al && (i = al, al = N, N = i);
                  var o = ts(
                    f,
                    N
                  ), s = ts(
                    f,
                    al
                  );
                  if (o && s && (g.rangeCount !== 1 || g.anchorNode !== o.node || g.anchorOffset !== o.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var y = z.createRange();
                    y.setStart(o.node, o.offset), g.removeAllRanges(), N > al ? (g.addRange(y), g.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), g.addRange(y));
                  }
                }
              }
            }
            for (z = [], g = f; g = g.parentNode; )
              g.nodeType === 1 && z.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var b = z[f];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          qn = !!Zf, Vf = Zf = null;
        } finally {
          W = e, p.p = u, S.T = a;
        }
      }
      l.current = t, Tl = 2;
    }
  }
  function Sd() {
    if (Tl === 2) {
      Tl = 0;
      var l = oa, t = ru, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var u = p.p;
        p.p = 2;
        var e = W;
        W |= 4;
        try {
          J0(l, t.alternate, t);
        } finally {
          W = e, p.p = u, S.T = a;
        }
      }
      Tl = 3;
    }
  }
  function bd() {
    if (Tl === 4 || Tl === 3) {
      Tl = 0, Uo();
      var l = oa, t = ru, a = Jt, u = nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tl = 5 : (Tl = 0, ru = oa = null, zd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (da = null), Wn(a), t = t.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function")
        try {
          Fl.onCommitFiberRoot(
            Mu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = S.T, e = p.p, p.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
            var f = u[i];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          S.T = t, p.p = e;
        }
      }
      (Jt & 3) !== 0 && Tn(), Mt(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Uf ? ce++ : (ce = 0, Uf = l) : ce = 0, se(0);
    }
  }
  function zd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Vu(t)));
  }
  function Tn() {
    return rd(), Sd(), bd(), Td();
  }
  function Td() {
    if (Tl !== 5) return !1;
    var l = oa, t = Mf;
    Mf = 0;
    var a = Wn(Jt), u = S.T, e = p.p;
    try {
      p.p = 32 > a ? 32 : a, S.T = null, a = Df, Df = null;
      var n = oa, i = Jt;
      if (Tl = 0, ru = oa = null, Jt = 0, (W & 6) !== 0) throw Error(h(331));
      var f = W;
      if (W |= 4, ad(n.current), P0(
        n,
        n.current,
        i,
        a
      ), W = f, se(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function")
        try {
          Fl.onPostCommitFiberRoot(Mu, n);
        } catch {
        }
      return !0;
    } finally {
      p.p = e, S.T = u, zd(l, t);
    }
  }
  function Ed(l, t, a) {
    t = dt(a, t), t = ff(l.stateNode, t, 2), l = ea(l, t, 2), l !== null && (Uu(l, 2), Mt(l));
  }
  function I(l, t, a) {
    if (l.tag === 3)
      Ed(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ed(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (da === null || !da.has(u))) {
            l = dt(a, l), a = A0(2), u = ea(t, a, 2), u !== null && (p0(
              a,
              u,
              t,
              l
            ), Uu(u, 2), Mt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new tm();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (pf = !0, e.add(a), l = im.bind(null, l, t, a), t.then(l, l));
  }
  function im(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, nl === l && (x & a) === a && (yl === 4 || yl === 3 && (x & 62914560) === x && 300 > kl() - hn ? (W & 2) === 0 && Su(l, 0) : _f |= a, gu === x && (gu = 0)), Mt(l);
  }
  function Ad(l, t) {
    t === 0 && (t = rc()), l = Ma(l, t), l !== null && (Uu(l, t), Mt(l));
  }
  function fm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Ad(l, a);
  }
  function cm(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(t), Ad(l, a);
  }
  function sm(l, t) {
    return Ln(l, t);
  }
  var En = null, zu = null, qf = !1, An = !1, Cf = !1, ma = 0;
  function Mt(l) {
    l !== zu && l.next === null && (zu === null ? En = zu = l : zu = zu.next = l), An = !0, qf || (qf = !0, om());
  }
  function se(l, t) {
    if (!Cf && An) {
      Cf = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes, f = u.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Md(u, n));
          } else
            n = x, n = Oe(
              u,
              u === nl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Du(u, n) || (a = !0, Md(u, n));
          u = u.next;
        }
      while (a);
      Cf = !1;
    }
  }
  function dm() {
    pd();
  }
  function pd() {
    An = qf = !1;
    var l = 0;
    ma !== 0 && Tm() && (l = ma);
    for (var t = kl(), a = null, u = En; u !== null; ) {
      var e = u.next, n = _d(u, t);
      n === 0 ? (u.next = null, a === null ? En = e : a.next = e, e === null && (zu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (An = !0)), u = e;
    }
    Tl !== 0 && Tl !== 5 || se(l), ma !== 0 && (ma = 0);
  }
  function _d(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Il(n), f = 1 << i, c = e[i];
      c === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[i] = Go(f, t)) : c <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = nl, a = x, a = Oe(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (F === 2 || F === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Kn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Kn(u), Wn(a)) {
        case 2:
        case 8:
          a = hc;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = gc;
          break;
        default:
          a = Ee;
      }
      return u = Od.bind(null, l), a = Ln(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Kn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Od(l, t) {
    if (Tl !== 0 && Tl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a)
      return null;
    var u = x;
    return u = Oe(
      l,
      l === nl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (fd(l, u, t), _d(l, kl()), l.callbackNode != null && l.callbackNode === a ? Od.bind(null, l) : null);
  }
  function Md(l, t) {
    if (Tn()) return null;
    fd(l, t, !0);
  }
  function om() {
    Am(function() {
      (W & 6) !== 0 ? Ln(
        vc,
        dm
      ) : pd();
    });
  }
  function Bf() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), ma = l;
    }
    return ma;
  }
  function Dd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function Ud(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function ym(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Dd(
        (e[xl] || null).action
      ), i = u.submitter;
      i && (t = (t = i[xl] || null) ? Dd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var f = new Ce(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ma !== 0) {
                  var c = i ? Ud(e, i) : new FormData(e);
                  lf(
                    a,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (f.preventDefault(), c = i ? Ud(e, i) : new FormData(e), lf(
                  a,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yf = 0; Yf < ri.length; Yf++) {
    var Gf = ri[Yf], mm = Gf.toLowerCase(), vm = Gf[0].toUpperCase() + Gf.slice(1);
    St(
      mm,
      "on" + vm
    );
  }
  St(is, "onAnimationEnd"), St(fs, "onAnimationIteration"), St(cs, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(Hy, "onTransitionRun"), St(Ny, "onTransitionStart"), St(Ry, "onTransitionCancel"), St(ss, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var de = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(de)
  );
  function Hd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = u.length - 1; 0 <= i; i--) {
            var f = u[i], c = f.instance, m = f.currentTarget;
            if (f = f.listener, c !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = m;
            try {
              n(e);
            } catch (r) {
              Ge(r);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (f = u[i], c = f.instance, m = f.currentTarget, f = f.listener, c !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = m;
            try {
              n(e);
            } catch (r) {
              Ge(r);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function Q(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Nd(t, l, 2, !1), a.add(u));
  }
  function jf(l, t, a) {
    var u = 0;
    t && (u |= 4), Nd(
      a,
      l,
      u,
      t
    );
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Xf(l) {
    if (!l[pn]) {
      l[pn] = !0, pc.forEach(function(a) {
        a !== "selectionchange" && (hm.has(a) || jf(a, !1, l), jf(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || (t[pn] = !0, jf("selectionchange", !1, t));
    }
  }
  function Nd(l, t, a, u) {
    switch (io(t)) {
      case 2:
        var e = Vm;
        break;
      case 8:
        e = Lm;
        break;
      default:
        e = lc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Qf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = Za(f), i === null) return;
            if (c = i.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              u = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Yc(function() {
      var m = n, r = ai(a), z = [];
      l: {
        var v = ds.get(l);
        if (v !== void 0) {
          var g = Ce, O = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = cy;
              break;
            case "focusin":
              O = "focus", g = ci;
              break;
            case "focusout":
              O = "blur", g = ci;
              break;
            case "beforeblur":
            case "afterblur":
              g = ci;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = ko;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = oy;
              break;
            case is:
            case fs:
            case cs:
              g = Po;
              break;
            case ss:
              g = my;
              break;
            case "scroll":
            case "scrollend":
              g = Wo;
              break;
            case "wheel":
              g = hy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = xc;
              break;
            case "toggle":
            case "beforetoggle":
              g = ry;
          }
          var N = (t & 4) !== 0, al = !N && (l === "scroll" || l === "scrollend"), o = N ? v !== null ? v + "Capture" : null : v;
          N = [];
          for (var s = m, y; s !== null; ) {
            var b = s;
            if (y = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || y === null || o === null || (b = Ru(s, o), b != null && N.push(
              oe(s, b, y)
            )), al) break;
            s = s.return;
          }
          0 < N.length && (v = new g(
            v,
            O,
            null,
            a,
            r
          ), z.push({ event: v, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", v && a !== ti && (O = a.relatedTarget || a.fromElement) && (Za(O) || O[xa]))
            break l;
          if ((g || v) && (v = r.window === r ? r : (v = r.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (O = a.relatedTarget || a.toElement, g = m, O = O ? Za(O) : null, O !== null && (al = zl(O), N = O.tag, O !== al || N !== 5 && N !== 27 && N !== 6) && (O = null)) : (g = null, O = m), g !== O)) {
            if (N = Xc, b = "onMouseLeave", o = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (N = xc, b = "onPointerLeave", o = "onPointerEnter", s = "pointer"), al = g == null ? v : Nu(g), y = O == null ? v : Nu(O), v = new N(
              b,
              s + "leave",
              g,
              a,
              r
            ), v.target = al, v.relatedTarget = y, b = null, Za(r) === m && (N = new N(
              o,
              s + "enter",
              O,
              a,
              r
            ), N.target = y, N.relatedTarget = al, b = N), al = b, g && O)
              t: {
                for (N = gm, o = g, s = O, y = 0, b = o; b; b = N(b))
                  y++;
                b = 0;
                for (var U = s; U; U = N(U))
                  b++;
                for (; 0 < y - b; )
                  o = N(o), y--;
                for (; 0 < b - y; )
                  s = N(s), b--;
                for (; y--; ) {
                  if (o === s || s !== null && o === s.alternate) {
                    N = o;
                    break t;
                  }
                  o = N(o), s = N(s);
                }
                N = null;
              }
            else N = null;
            g !== null && Rd(
              z,
              v,
              g,
              N,
              !1
            ), O !== null && al !== null && Rd(
              z,
              al,
              O,
              N,
              !0
            );
          }
        }
        l: {
          if (v = m ? Nu(m) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
            var J = $c;
          else if (wc(v))
            if (kc)
              J = My;
            else {
              J = _y;
              var D = py;
            }
          else
            g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && li(m.elementType) && (J = $c) : J = Oy;
          if (J && (J = J(l, m))) {
            Wc(
              z,
              J,
              a,
              r
            );
            break l;
          }
          D && D(l, v, m), l === "focusout" && m && v.type === "number" && m.memoizedProps.value != null && Pn(v, "number", v.value);
        }
        switch (D = m ? Nu(m) : window, l) {
          case "focusin":
            (wc(D) || D.contentEditable === "true") && (Fa = D, vi = m, Qu = null);
            break;
          case "focusout":
            Qu = vi = Fa = null;
            break;
          case "mousedown":
            hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hi = !1, es(z, a, r);
            break;
          case "selectionchange":
            if (Uy) break;
          case "keydown":
          case "keyup":
            es(z, a, r);
        }
        var G;
        if (di)
          l: {
            switch (l) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break l;
              case "compositionend":
                Z = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break l;
            }
            Z = void 0;
          }
        else
          ka ? Kc(l, a) && (Z = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (Z = "onCompositionStart");
        Z && (Zc && a.locale !== "ko" && (ka || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && ka && (G = Gc()) : (Ft = r, ni = "value" in Ft ? Ft.value : Ft.textContent, ka = !0)), D = _n(m, Z), 0 < D.length && (Z = new Qc(
          Z,
          l,
          null,
          a,
          r
        ), z.push({ event: Z, listeners: D }), G ? Z.data = G : (G = Jc(a), G !== null && (Z.data = G)))), (G = by ? zy(l, a) : Ty(l, a)) && (Z = _n(m, "onBeforeInput"), 0 < Z.length && (D = new Qc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          r
        ), z.push({
          event: D,
          listeners: Z
        }), D.data = G)), ym(
          z,
          l,
          m,
          a,
          r
        );
      }
      Hd(z, t);
    });
  }
  function oe(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function _n(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a), e != null && u.unshift(
        oe(l, e, n)
      ), e = Ru(l, t), e != null && u.push(
        oe(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function gm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rd(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var f = a, c = f.alternate, m = f.stateNode;
      if (f = f.tag, c !== null && c === u) break;
      f !== 5 && f !== 26 && f !== 27 || m === null || (c = m, e ? (m = Ru(a, n), m != null && i.unshift(
        oe(a, m, c)
      )) : e || (m = Ru(a, n), m != null && i.push(
        oe(a, m, c)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var rm = /\r\n?/g, Sm = /\u0000|\uFFFD/g;
  function qd(l) {
    return (typeof l == "string" ? l : "" + l).replace(rm, `
`).replace(Sm, "");
  }
  function Cd(l, t) {
    return t = qd(t), qd(l) === t;
  }
  function tl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, a, u);
        break;
      case "style":
        Cc(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "onScroll":
        u != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Q("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = He("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        Q("beforetoggle", l), Q("toggle", l), Me(l, "popover", u);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Jo.get(a) || a, Me(l, a, u));
    }
  }
  function xf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Cc(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Q("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_c.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[xl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Me(l, a, u);
          }
    }
  }
  function Ul(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Q("error", l), Q("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  tl(l, t, n, i, a, null);
              }
          }
        e && tl(l, t, "srcSet", a.srcSet, a, null), u && tl(l, t, "src", a.src, a, null);
        return;
      case "input":
        Q("invalid", l);
        var f = n = i = e = null, c = null, m = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var r = a[u];
            if (r != null)
              switch (u) {
                case "name":
                  e = r;
                  break;
                case "type":
                  i = r;
                  break;
                case "checked":
                  c = r;
                  break;
                case "defaultChecked":
                  m = r;
                  break;
                case "value":
                  n = r;
                  break;
                case "defaultValue":
                  f = r;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (r != null)
                    throw Error(h(137, t));
                  break;
                default:
                  tl(l, t, u, r, a, null);
              }
          }
        Hc(
          l,
          n,
          f,
          c,
          m,
          i,
          e,
          !1
        );
        return;
      case "select":
        Q("invalid", l), u = i = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (f = a[e], f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                u = f;
              default:
                tl(l, t, e, f, a, null);
            }
        t = n, a = i, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        Q("invalid", l), n = e = u = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (f = a[i], f != null))
            switch (i) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(h(91));
                break;
              default:
                tl(l, t, i, f, a, null);
            }
        Rc(l, u, e, n);
        return;
      case "option":
        for (c in a)
          a.hasOwnProperty(c) && (u = a[c], u != null) && (c === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : tl(l, t, c, u, a, null));
        return;
      case "dialog":
        Q("beforetoggle", l), Q("toggle", l), Q("cancel", l), Q("close", l);
        break;
      case "iframe":
      case "object":
        Q("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++)
          Q(de[u], l);
        break;
      case "image":
        Q("error", l), Q("load", l);
        break;
      case "details":
        Q("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", l), Q("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in a)
          if (a.hasOwnProperty(m) && (u = a[m], u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                tl(l, t, m, u, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (r in a)
            a.hasOwnProperty(r) && (u = a[r], u !== void 0 && xf(
              l,
              t,
              r,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && (u = a[f], u != null && tl(l, t, f, u, a, null));
  }
  function bm(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, i = null, f = null, c = null, m = null, r = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = z;
              default:
                u.hasOwnProperty(g) || tl(l, t, g, null, u, z);
            }
        }
        for (var v in u) {
          var g = u[v];
          if (z = a[v], u.hasOwnProperty(v) && (g != null || z != null))
            switch (v) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                m = g;
                break;
              case "defaultChecked":
                r = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(h(137, t));
                break;
              default:
                g !== z && tl(
                  l,
                  t,
                  v,
                  g,
                  u,
                  z
                );
            }
        }
        In(
          l,
          i,
          f,
          c,
          m,
          r,
          n,
          e
        );
        return;
      case "select":
        g = i = f = v = null;
        for (n in a)
          if (c = a[n], a.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                u.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  u,
                  c
                );
            }
        for (e in u)
          if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== c && tl(
                  l,
                  t,
                  e,
                  n,
                  u,
                  c
                );
            }
        t = f, a = i, u = g, v != null ? Ja(l, !!a, v, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (f in a)
          if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, f, null, u, e);
            }
        for (i in u)
          if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null))
            switch (i) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && tl(l, t, i, e, u, n);
            }
        Nc(l, v, g);
        return;
      case "option":
        for (var O in a)
          v = a[O], a.hasOwnProperty(O) && v != null && !u.hasOwnProperty(O) && (O === "selected" ? l.selected = !1 : tl(
            l,
            t,
            O,
            null,
            u,
            v
          ));
        for (c in u)
          v = u[c], g = a[c], u.hasOwnProperty(c) && v !== g && (v != null || g != null) && (c === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : tl(
            l,
            t,
            c,
            v,
            u,
            g
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in a)
          v = a[N], a.hasOwnProperty(N) && v != null && !u.hasOwnProperty(N) && tl(l, t, N, null, u, v);
        for (m in u)
          if (v = u[m], g = a[m], u.hasOwnProperty(m) && v !== g && (v != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(h(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  m,
                  v,
                  u,
                  g
                );
            }
        return;
      default:
        if (li(t)) {
          for (var al in a)
            v = a[al], a.hasOwnProperty(al) && v !== void 0 && !u.hasOwnProperty(al) && xf(
              l,
              t,
              al,
              void 0,
              u,
              v
            );
          for (r in u)
            v = u[r], g = a[r], !u.hasOwnProperty(r) || v === g || v === void 0 && g === void 0 || xf(
              l,
              t,
              r,
              v,
              u,
              g
            );
          return;
        }
    }
    for (var o in a)
      v = a[o], a.hasOwnProperty(o) && v != null && !u.hasOwnProperty(o) && tl(l, t, o, null, u, v);
    for (z in u)
      v = u[z], g = a[z], !u.hasOwnProperty(z) || v === g || v == null && g == null || tl(l, t, z, v, u, g);
  }
  function Bd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function zm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, i = e.initiatorType, f = e.duration;
        if (n && f && Bd(i)) {
          for (i = 0, f = e.responseEnd, u += 1; u < a.length; u++) {
            var c = a[u], m = c.startTime;
            if (m > f) break;
            var r = c.transferSize, z = c.initiatorType;
            r && Bd(z) && (c = c.responseEnd, i += r * (c < f ? 1 : (f - m) / (c - m)));
          }
          if (--u, t += 8 * (n + i) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zf = null, Vf = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Lf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kf = null;
  function Tm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Kf ? !1 : (Kf = l, !0) : (Kf = null, !1);
  }
  var jd = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Am = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(l) {
    return Xd.resolve(null).then(l).catch(pm);
  } : jd;
  function pm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function Qd(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), pu(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          ye(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, ye(a);
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling, f = n.nodeName;
            n[Hu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
          }
        } else
          a === "body" && ye(l.ownerDocument.body);
      a = e;
    } while (a);
    pu(t);
  }
  function xd(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Jf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jf(a), kn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function _m(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Hu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Om(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function wf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mm(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $f = null;
  function Vd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ld(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Kd(l, t, a) {
    switch (t = On(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function ye(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var gt = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = p.d;
  p.d = {
    f: Dm,
    r: Um,
    D: Hm,
    C: Nm,
    L: Rm,
    m: qm,
    X: Bm,
    S: Cm,
    M: Ym
  };
  function Dm() {
    var l = wt.f(), t = Sn();
    return l || t;
  }
  function Um(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? s0(t) : wt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function wd(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = ct(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Jd.has(e) || (Jd.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Ul(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function Hm(l) {
    wt.D(l), wd("dns-prefetch", l, null);
  }
  function Nm(l, t) {
    wt.C(l, t), wd("preconnect", l, t);
  }
  function Rm(l, t, a) {
    wt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ct(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ct(
        a.imageSizes
      ) + '"]')) : e += '[href="' + ct(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Au(l);
      }
      gt.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), gt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(me(n)) || t === "script" && u.querySelector(ve(n)) || (t = u.createElement("link"), Ul(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function qm(l, t) {
    wt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Au(l);
      }
      if (!gt.has(n) && (l = R({ rel: "modulepreload", href: l }, t), gt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n)))
              return;
        }
        u = a.createElement("link"), Ul(u, "link", l), El(u), a.head.appendChild(u);
      }
    }
  }
  function Cm(l, t, a) {
    wt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = La(u).hoistableStyles, n = Eu(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = u.querySelector(
          me(n)
        ))
          f.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = gt.get(n)) && kf(l, a);
          var c = i = u.createElement("link");
          El(c), Ul(c, "link", l), c._p = new Promise(function(m, r) {
            c.onload = m, c.onerror = r;
          }), c.addEventListener("load", function() {
            f.loading |= 1;
          }), c.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Dn(i, t, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, e.set(n, i);
      }
    }
  }
  function Bm(l, t) {
    wt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Au(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = R({ src: l, async: !0 }, t), (t = gt.get(e)) && Ff(l, t), n = a.createElement("script"), El(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Ym(l, t) {
    wt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Au(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && Ff(l, t), n = a.createElement("script"), El(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Wd(l, t, a, u) {
    var e = (e = j.current) ? Mn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Eu(a.href), a = La(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Eu(a.href);
          var n = La(
            e
          ).hoistableStyles, i = n.get(l);
          if (i || (e = e.ownerDocument || e, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = e.querySelector(
            me(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), gt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(l, a), n || Gm(
            e,
            l,
            a,
            i.state
          ))), t && u === null)
            throw Error(h(528, ""));
          return i;
        }
        if (t && u !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Au(a), a = La(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + ct(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $d(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Gm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Ul(t, "link", a), El(t), l.head.appendChild(t));
  }
  function Au(l) {
    return '[src="' + ct(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function kd(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + ct(a.href) + '"]'
          );
          if (u)
            return t.instance = u, El(u), u;
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), El(u), Ul(u, "style", e), Dn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(
            me(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, El(n), n;
          u = $d(a), (e = gt.get(e)) && kf(u, e), n = (l.ownerDocument || l).createElement("link"), El(n);
          var i = n;
          return i._p = new Promise(function(f, c) {
            i.onload = f, i.onerror = c;
          }), Ul(n, "link", u), t.state.loading |= 4, Dn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Au(a.src), (e = l.querySelector(
            ve(n)
          )) ? (t.instance = e, El(e), e) : (u = a, (e = gt.get(n)) && (u = R({}, a), Ff(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), El(e), Ul(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Dn(u, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
      var f = u[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function kf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function Fd(l, t, a) {
    if (Un === null) {
      var u = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Un, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Hu] || n[_l] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = u.get(i);
        f ? f.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Id(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function jm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Pd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Xm(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Eu(u.href), n = t.querySelector(
          me(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, El(n);
          return;
        }
        n = t.ownerDocument || t, u = $d(u), (e = gt.get(e)) && kf(u, e), n = n.createElement("link"), El(n);
        var i = n;
        i._p = new Promise(function(f, c) {
          i.onload = f, i.onerror = c;
        }), Ul(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var If = 0;
  function Qm(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && If === 0 && (If = 62500 * zm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > If ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(xm, l), Nn = null, Hn.call(l));
  }
  function xm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      e = t.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = Hn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Zm(l, t, a, u, e, n, i, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lo(l, t, a, u, e, n, i, f, c, m, r, z) {
    return l = new Zm(
      l,
      t,
      a,
      i,
      c,
      m,
      r,
      z,
      f
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Hi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Ci(n), l;
  }
  function to(l) {
    return l ? (l = lu, l) : lu;
  }
  function ao(l, t, a, u, e, n) {
    e = to(e), u.context === null ? u.context = e : u.pendingContext = e, u = ua(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = ea(l, u, t), a !== null && (wl(a, l, t), wu(a, l, t));
  }
  function uo(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pf(l, t) {
    uo(l, t), (l = l.alternate) && uo(l, t);
  }
  function eo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && wl(t, l, 67108864), Pf(l, 67108864);
    }
  }
  function no(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Ma(l, t);
      a !== null && wl(a, l, t), Pf(l, t);
    }
  }
  var qn = !0;
  function Vm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = p.p;
    try {
      p.p = 2, lc(l, t, a, u);
    } finally {
      p.p = n, S.T = e;
    }
  }
  function Lm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = p.p;
    try {
      p.p = 8, lc(l, t, a, u);
    } finally {
      p.p = n, S.T = e;
    }
  }
  function lc(l, t, a, u) {
    if (qn) {
      var e = tc(u);
      if (e === null)
        Qf(
          l,
          t,
          u,
          Cn,
          a
        ), fo(l, u);
      else if (Jm(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (fo(l, u), t & 4 && -1 < Km.indexOf(l)) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Ea(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var c = 1 << 31 - Il(i);
                      f.entanglements[1] |= c, i &= ~c;
                    }
                    Mt(n), (W & 6) === 0 && (gn = kl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ma(n, 2), f !== null && wl(f, n, 2), Sn(), Pf(n, 2);
            }
          if (n = tc(u), n === null && Qf(
            l,
            t,
            u,
            Cn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Qf(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function tc(l) {
    return l = ai(l), ac(l);
  }
  var Cn = null;
  function ac(l) {
    if (Cn = null, l = Za(l), l !== null) {
      var t = zl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = pl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = Rl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function io(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ho()) {
          case vc:
            return 2;
          case hc:
            return 8;
          case Ee:
          case No:
            return 32;
          case gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uc = !1, ha = null, ga = null, ra = null, ge = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Sa = [], Km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        re.delete(t.pointerId);
    }
  }
  function Se(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Va(t), t !== null && eo(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Jm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ha = Se(
          ha,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ga = Se(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ra = Se(
          ra,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          Se(
            ge.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, re.set(
          n,
          Se(
            re.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function co(l) {
    var t = Za(l.target);
    if (t !== null) {
      var a = zl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = pl(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              no(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Rl(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              no(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = tc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        ti = u, a.target.dispatchEvent(u), ti = null;
      } else
        return t = Va(a), t !== null && eo(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function so(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function wm() {
    uc = !1, ha !== null && Bn(ha) && (ha = null), ga !== null && Bn(ga) && (ga = null), ra !== null && Bn(ra) && (ra = null), ge.forEach(so), re.forEach(so);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, uc || (uc = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      wm
    )));
  }
  var Gn = null;
  function oo(l) {
    Gn !== l && (Gn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (ac(u || a) === null)
              continue;
            break;
          }
          var n = Va(a);
          n !== null && (l.splice(t, 3), t -= 3, lf(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function pu(l) {
    function t(c) {
      return Yn(c, l);
    }
    ha !== null && Yn(ha, l), ga !== null && Yn(ga, l), ra !== null && Yn(ra, l), ge.forEach(t), re.forEach(t);
    for (var a = 0; a < Sa.length; a++) {
      var u = Sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); )
      co(a), a.blockedOn === null && Sa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], i = e[xl] || null;
        if (typeof n == "function")
          i || oo(a);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, i = n[xl] || null)
              f = i.formAction;
            else if (ac(e) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3), oo(a);
        }
      }
  }
  function yo() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return e = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ec(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ec.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var a = t.current, u = nt();
    ao(a, u, l, t, null, null);
  }, jn.prototype.unmount = ec.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ao(l.current, 2, null, l, null, null), Sn(), t[xa] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Tc();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++) ;
      Sa.splice(a, 0, l), a === 0 && co(l);
    }
  };
  var mo = ul.version;
  if (mo !== "19.2.3")
    throw Error(
      h(
        527,
        mo,
        "19.2.3"
      )
    );
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = E(t), l = l !== null ? $(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Wm = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        Mu = Xn.inject(
          Wm
        ), Fl = Xn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!cl(l)) throw Error(h(299));
    var a = !1, u = "", e = b0, n = z0, i = T0;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lo(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      i,
      yo
    ), l[xa] = t.current, Xf(l), new ec(t);
  }, ze.hydrateRoot = function(l, t, a) {
    if (!cl(l)) throw Error(h(299));
    var u = !1, e = "", n = b0, i = z0, f = T0, c = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.formState !== void 0 && (c = a.formState)), t = lo(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      c,
      n,
      i,
      f,
      yo
    ), t.context = to(null), a = t.current, u = nt(), u = wn(u), e = ua(u), e.callback = null, ea(a, e, u), a = u, t.current.lanes = a, Uu(t, a), Mt(t), l[xa] = t.current, Xf(l), new jn(t);
  }, ze.version = "19.2.3", ze;
}
var Ao;
function iv() {
  if (Ao) return fc.exports;
  Ao = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), fc.exports = nv(), fc.exports;
}
var fv = iv();
const _o = () => "https://gen-ui-guitars-production.up.railway.app/", cv = [
  {
    id: 1,
    name: "Beachside Ukelele",
    image: "/example-ukelele-tanstack.jpg",
    description: "Introducing the TanStack Signature Ukulele—a beautifully handcrafted concert ukulele that combines exceptional sound quality with distinctive style. Featuring a warm, resonant koa-wood body with natural grain patterns, this instrument delivers the rich, mellow tones Hawaii is famous for. The exclusive TanStack palm tree inlay on the soundhole adds a unique touch of island flair, while the matching branded headstock makes this a true collector's piece for developers and musicians alike. Whether you're a beginner looking for a quality starter instrument or an experienced player wanting something special, the TanStack Ukulele brings together craftsmanship, character, and that unmistakable tropical spirit.",
    shortDescription: "Premium koa-wood ukulele featuring exclusive TanStack branding, perfect for beach vibes and island-inspired melodies.",
    price: 299,
    weight: 1.2,
    strings: 4,
    tuners: "Vintage-style friction tuners",
    nut: "Bone",
    bridge: "Tie-bar bridge"
  },
  {
    id: 2,
    name: "Video Game Guitar",
    image: "/example-guitar-video-games.jpg",
    description: "The Video Game Guitar is a unique acoustic guitar that features a design inspired by video games. It has a sleek, high-gloss finish and a comfortable playability. The guitar's ergonomic body and fast neck profile ensure comfortable playability for hours on end.",
    shortDescription: "A unique electric guitar with a video game design, high-gloss finish, and comfortable playability.",
    price: 699,
    weight: 7.5,
    strings: 6,
    tuners: "Locking tuners",
    nut: "Graphite",
    bridge: "Tune-o-matic"
  },
  {
    id: 3,
    name: "Superhero Guitar",
    image: "/example-guitar-superhero.jpg",
    description: "The Superhero Guitar is a bold black electric guitar that stands out with its unique superhero logo design. Its sleek, high-gloss finish and powerful pickups make it perfect for high-energy performances. The guitar's ergonomic body and fast neck profile ensure comfortable playability for hours on end.",
    shortDescription: "A bold black electric guitar with a unique superhero logo, high-gloss finish, and powerful pickups.",
    price: 699,
    weight: 8.2,
    strings: 6,
    tuners: "Standard sealed tuners",
    nut: "Graphite",
    bridge: "Fixed bridge"
  },
  {
    id: 4,
    name: "Motherboard Guitar",
    image: "/example-guitar-motherboard.jpg",
    description: "This guitar is a tribute to the motherboard of a computer. It's a unique and stylish instrument that will make you feel like a hacker. The intricate circuit-inspired design features actual LED lights that pulse with your playing intensity, while the neck is inlaid with binary code patterns that glow under stage lights. Each pickup has been custom-wound to produce tones ranging from clean digital precision to glitched-out distortion, perfect for electronic music fusion. The Motherboard Guitar seamlessly bridges the gap between traditional craftsmanship and cutting-edge technology, making it the ultimate instrument for the digital age musician.",
    shortDescription: "A tech-inspired electric guitar featuring LED lights and binary code inlays that glow under stage lights.",
    price: 649,
    weight: 7.8,
    strings: 6,
    tuners: "Locking tuners with LED indicators",
    nut: "Graphite",
    bridge: "Floyd Rose tremolo"
  },
  {
    id: 5,
    name: "Racing Guitar",
    image: "/example-guitar-racing.jpg",
    description: "Engineered for speed and precision, the Racing Guitar embodies the spirit of motorsport in every curve and contour. Its aerodynamic body, painted in classic racing stripes and high-gloss finish, is crafted from lightweight materials that allow for effortless play during extended performances. The custom low-action setup and streamlined neck profile enable lightning-fast fretwork, while specially designed pickups deliver a high-octane tone that cuts through any mix. Built with performance-grade hardware including racing-inspired control knobs and checkered flag inlays, this guitar isn't just played—it's driven to the limits of musical possibility.",
    shortDescription: "A lightweight, aerodynamic guitar with racing stripes and a low-action setup designed for speed and precision.",
    price: 679,
    weight: 5.8,
    strings: 6,
    tuners: "High-ratio locking tuners",
    nut: "Graphite",
    bridge: "Fixed bridge with low-profile design"
  },
  {
    id: 6,
    name: "Steamer Trunk Guitar",
    image: "/example-guitar-steamer-trunk.jpg",
    description: "The Steamer Trunk Guitar is a semi-hollow body instrument that exudes vintage charm and character. Crafted from reclaimed antique luggage wood, it features brass hardware that adds a touch of elegance and durability. The fretboard is adorned with a world map inlay, making it a unique piece that tells a story of travel and adventure.",
    shortDescription: "A semi-hollow body guitar with brass hardware and a world map inlay, crafted from reclaimed antique luggage wood.",
    price: 629,
    weight: 6.5,
    strings: 6,
    tuners: "Vintage-style open-back tuners",
    nut: "Bone",
    bridge: "Tune-o-matic with brass tailpiece"
  },
  {
    id: 7,
    name: "Travelin' Man Guitar",
    image: "/example-guitar-traveling.jpg",
    description: "The Travelin' Man Guitar is an acoustic masterpiece adorned with vintage postcards from around the world. Each postcard tells a story of adventure and wanderlust, making this guitar a unique piece of art. Its rich, resonant tones and comfortable playability make it perfect for musicians who love to travel and perform.",
    shortDescription: "An acoustic guitar with vintage postcards, rich tones, and comfortable playability.",
    price: 499,
    weight: 4.2,
    strings: 6,
    tuners: "Chrome-plated sealed tuners",
    nut: "Bone",
    bridge: "Pin bridge with compensated saddle"
  },
  {
    id: 8,
    name: "Flowerly Love Guitar",
    image: "/example-guitar-flowers.jpg",
    description: "The Flowerly Love Guitar is an acoustic masterpiece adorned with intricate floral designs on its body. Each flower is hand-painted, adding a touch of nature's beauty to the instrument. Its warm, resonant tones make it perfect for both intimate performances and larger gatherings.",
    shortDescription: "An acoustic guitar with hand-painted floral designs and warm, resonant tones.",
    price: 599,
    weight: 4.5,
    strings: 6,
    tuners: "Gold-plated sealed tuners",
    nut: "Bone",
    bridge: "Pin bridge with bone saddle"
  }
];
function sv({
  id: A,
  children: ul
}) {
  const V = cv.find((h) => h.id === +A);
  return V ? /* @__PURE__ */ Yl.jsxs("div", { className: "my-4 rounded-lg overflow-hidden border border-green-500/20 bg-stone-800/50", children: [
    /* @__PURE__ */ Yl.jsx("div", { className: "aspect-4/3 relative overflow-hidden", children: /* @__PURE__ */ Yl.jsx(
      "img",
      {
        src: `${_o()}${V.image}`,
        alt: V.name,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ Yl.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ Yl.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: V.name }),
      /* @__PURE__ */ Yl.jsx("p", { className: "text-sm text-gray-300 mb-3 line-clamp-2", children: V.shortDescription }),
      /* @__PURE__ */ Yl.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ Yl.jsxs("div", { className: "text-lg font-bold text-emerald-400", children: [
          "$",
          V.price
        ] }),
        ul
      ] })
    ] })
  ] }) : null;
}
const Oo = _u.createContext({
  toolOutput: null
});
function dv({
  children: A
}) {
  const [ul, V] = _u.useState(() => window.openai.toolOutput);
  _u.useEffect(() => {
    let cl = setInterval(() => {
      window.openai && window.openai.toolOutput && (V(window.openai.toolOutput), clearInterval(cl));
    }, 100);
    return () => clearInterval(cl);
  }, []);
  const h = _u.useMemo(
    () => ({
      toolOutput: ul
    }),
    [ul]
  );
  return /* @__PURE__ */ Yl.jsx(Oo.Provider, { value: h, children: A });
}
function ov() {
  const { toolOutput: A } = _u.useContext(Oo);
  return A;
}
const po = "tanstack-app-root";
function yv() {
  const A = document.getElementById(po);
  if (!A)
    throw new Error(`Container #${po} not found`);
  let ul = A._reactRoot;
  return ul || (ul = fv.createRoot(A), A._reactRoot = ul), ul;
}
function mv() {
  const A = ov();
  return A?.id ? /* @__PURE__ */ Yl.jsx(sv, { id: A.id, children: /* @__PURE__ */ Yl.jsx(
    "a",
    {
      onClick: () => {
        window.openai.openExternal({
          href: `${_o()}example/guitars/${A.id}`
        });
      },
      children: /* @__PURE__ */ Yl.jsx("button", { className: "bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity", children: "View Details" })
    }
  ) }) : null;
}
function vv() {
  yv().render(
    /* @__PURE__ */ Yl.jsx(lv.StrictMode, { children: /* @__PURE__ */ Yl.jsx(dv, { children: /* @__PURE__ */ Yl.jsx(mv, {}) }) })
  );
}
vv();
