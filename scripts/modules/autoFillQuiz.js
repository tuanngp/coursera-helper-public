function _0x4164(_0x3fb7dd, _0x55e7d9) {
  const _0x3ebf1a = _0x3ebf();
  return (
    (_0x4164 = function (_0x41641d, _0x2e3b38) {
      _0x41641d = _0x41641d - 0x163;
      let _0x160a7f = _0x3ebf1a[_0x41641d];
      return _0x160a7f;
    }),
    _0x4164(_0x3fb7dd, _0x55e7d9)
  );
}
(function (_0x4c7d94, _0x4177c7) {
  const _0xbaf51a = _0x4164,
    _0x34010d = _0x4c7d94();
  while (!![]) {
    try {
      const _0x5aa02b =
        (parseInt(_0xbaf51a(0x1aa)) / 0x1) *
          (parseInt(_0xbaf51a(0x17a)) / 0x2) +
        -parseInt(_0xbaf51a(0x18d)) / 0x3 +
        parseInt(_0xbaf51a(0x1a3)) / 0x4 +
        -parseInt(_0xbaf51a(0x177)) / 0x5 +
        -parseInt(_0xbaf51a(0x1ae)) / 0x6 +
        (parseInt(_0xbaf51a(0x19e)) / 0x7) *
          (parseInt(_0xbaf51a(0x1a0)) / 0x8) +
        parseInt(_0xbaf51a(0x1a2)) / 0x9;
      if (_0x5aa02b === _0x4177c7) break;
      else _0x34010d["push"](_0x34010d["shift"]());
    } catch (_0x1c44d4) {
      _0x34010d["push"](_0x34010d["shift"]());
    }
  }
})(_0x3ebf, 0xec302),
  (() => {
    const _0x225f30 = _0x4164;
    let _0x4248f0,
      _0x11261d,
      _0x3ece20,
      _0x3a6e48,
      _0x460674,
      _0x397e27,
      _0x4516fe,
      _0x4bcd61;
    _0x10ae1f();
    async function _0x10ae1f() {
      const _0x14f000 = _0x4164;
      (_0x4248f0 = _0x474d55()),
        (_0x11261d = await _0x9b6dea()),
        (_0x3ece20 = _0xa5d4e8()),
        (_0x3a6e48 = null),
        (_0x460674 = 0x0),
        (_0x397e27 = ![]),
        (_0x4516fe = ![]),
        chrome["runtime"]["onMessage"][_0x14f000(0x1b4)](
          (_0x32d047, _0x1ad877, _0x4b9af4) => {
            const _0x2ce6e6 = _0x14f000;
            _0x32d047["action"] === _0x2ce6e6(0x179) &&
              (_0x4bcd61 = _0x32d047[_0x2ce6e6(0x17e)]);
          }
        ),
        chrome[_0x14f000(0x18f)][_0x14f000(0x173)](
          { action: "setApiKey" },
          (_0x53bce4) => {
            const _0x1a525b = _0x14f000;
            _0x4bcd61 = _0x53bce4[_0x1a525b(0x17e)];
          }
        ),
        await _0xd7410f();
    }
    async function _0xd7410f() {
      const _0x55287a = _0x4164;
      if (!_0x11261d || !_0x3ece20) return;
      _0x3ece20["forEach"](
        async ({ question: _0x59deeb, answers: _0x4fc4f3 }) => {
          const _0x3be314 = _0x4164,
            _0x360dd6 = _0x11261d[_0x3be314(0x193)]((_0x3eafbe) =>
              _0x3eafbe["answers"][_0x3be314(0x1ac)]((_0x1d778d) =>
                _0x4fc4f3[_0x3be314(0x1ac)](
                  (_0x531ef0) =>
                    String(_0x531ef0[_0x3be314(0x174)])[_0x3be314(0x166)]() ===
                    String(_0x1d778d)[_0x3be314(0x166)]()
                )
              )
            ),
            _0x3aec07 = _0x360dd6["find"](
              (_0x244aef) =>
                String(_0x244aef[_0x3be314(0x1b0)])["toLowerCase"]() ===
                String(_0x59deeb[_0x3be314(0x174)])[_0x3be314(0x166)]()
            );
          if (_0x3aec07) {
            let _0x564a1e = ![];
            _0x3aec07[_0x3be314(0x188)][_0x3be314(0x175)]((_0x585d0e) => {
              const _0x415785 = _0x3be314,
                _0x269b02 = _0x4fc4f3[_0x415785(0x1a1)](
                  (_0x37720e) =>
                    String(_0x37720e[_0x415785(0x174)])["toLowerCase"]() ===
                    String(_0x585d0e)["toLowerCase"]()
                ),
                _0x268951 = _0x59deeb["element"]["style"]["cssText"],
                _0x2de7e6 =
                  "border-style:\x20solid;\x20border-color:\x20green;";
              _0x269b02 &&
                !_0x268951[_0x415785(0x17f)](_0x2de7e6) &&
                (_0x269b02["input"][_0x415785(0x194)](),
                (_0x59deeb[_0x415785(0x19f)]["style"] = _0x415785(0x17d)),
                (_0x564a1e = !![]));
            }),
              _0x564a1e && ++answerClicked;
          } else {
            if (
              _0x59deeb[_0x3be314(0x19f)][_0x3be314(0x17c)][_0x3be314(0x16a)][
                _0x3be314(0x17f)
              ]("border-style:\x20solid;\x20border-color:\x20green;")
            )
              return;
            const _0x59649a = _0x3be314(0x18a);
            _0x59deeb[_0x3be314(0x19f)]["style"] = _0x59649a;
            const _0x178853 = _0x4fc4f3[_0x3be314(0x1ac)](
              (_0x36ba15) => _0x36ba15[_0x3be314(0x199)]
            );
            _0x59deeb[_0x3be314(0x19f)][_0x3be314(0x17c)][_0x3be314(0x16a)][
              _0x3be314(0x17f)
            ](_0x59649a) &&
              !_0x178853 &&
              !_0x4516fe &&
              !_0x59deeb[_0x3be314(0x180)] &&
              (await _0x213fc9(0x7d0), await _0x181fc1(_0x59deeb, _0x4fc4f3));
          }
        }
      );
      !_0x397e27 &&
        (chrome[_0x55287a(0x18f)][_0x55287a(0x173)]({
          action: _0x55287a(0x16d),
        }),
        (_0x397e27 = !![]));
      const _0x856a65 = document[_0x55287a(0x1a4)](_0x55287a(0x1a9));
      _0x856a65 &&
        !_0x856a65[_0x55287a(0x18e)] &&
        _0x856a65[_0x55287a(0x194)]();
    }
    async function _0x9b6dea(_0x14049f = 0x5, _0x3f751b = 0x7d0) {
      const _0x599223 = _0x4164;
      for (let _0x5105fe = 0x1; _0x5105fe <= _0x14049f; _0x5105fe++) {
        try {
          const _0x1061af = await _0x589f66(_0x599223(0x185));
          if (
            _0x1061af[_0x599223(0x186)] &&
            _0x1061af[_0x599223(0x186)] === _0x599223(0x1b3)
          )
            return [];
          _0x11261d = _0x1061af["data"];
          if (_0x11261d) return _0x11261d;
        } catch (_0x5c5b99) {
          console[_0x599223(0x1b1)](
            "Attempt\x20" + _0x5105fe + _0x599223(0x1a6),
            _0x5c5b99
          );
        }
        _0x5105fe < _0x14049f &&
          (await new Promise((_0x36f7fd) =>
            setTimeout(_0x36f7fd, _0x14049f * _0x3f751b)
          ));
      }
      return (
        console[_0x599223(0x1b1)](
          _0x599223(0x183) + _0x14049f + "\x20attempts."
        ),
        []
      );
    }
    function _0x474d55() {
      const _0xe29911 = _0x4164,
        _0x4b84ed =
          document[_0xe29911(0x1a4)](_0xe29911(0x182)) ??
          document[_0xe29911(0x1a4)]("h1.css-1rckjf5");
      return _0x4b84ed ? _0x4b84ed[_0xe29911(0x172)][_0xe29911(0x176)]() : "";
    }
    function _0xa5d4e8() {
      const _0x2769bc = _0x4164,
        _0x477964 = document["querySelectorAll"](
          ".css-1hhf6i,\x20.css-1629yt7,\x20.rc-FormPartsQuestion"
        );
      return Array["from"](_0x477964)[_0x2769bc(0x163)]((_0x5868d8) => {
        const _0x96cd5e = _0x2769bc,
          _0x19a5f5 = _0x5868d8[_0x96cd5e(0x1a4)](_0x96cd5e(0x170)),
          _0x67668f = _0x19a5f5
            ? _0x19a5f5[_0x96cd5e(0x172)][_0x96cd5e(0x176)]()
            : "",
          _0x3d70d3 = Array["from"](
            _0x5868d8["querySelectorAll"](_0x96cd5e(0x1b7))
          )[_0x96cd5e(0x163)]((_0x55f5a3) => {
            const _0x24c67e = _0x96cd5e;
            if (_0x55f5a3["tagName"][_0x24c67e(0x166)]() === "select") {
              const _0x5e7916 =
                _0x55f5a3[_0x24c67e(0x184)][_0x55f5a3[_0x24c67e(0x196)]];
              return {
                text: _0x5e7916
                  ? _0x5e7916[_0x24c67e(0x172)][_0x24c67e(0x176)]()
                  : "",
                selected: !!_0x5e7916,
                input: _0x55f5a3,
              };
            } else {
              const _0x59babf = _0x55f5a3[_0x24c67e(0x1a4)](_0x24c67e(0x1ab)),
                _0x115195 = _0x59babf
                  ? _0x59babf[_0x24c67e(0x172)][_0x24c67e(0x176)]()
                  : "",
                _0x42d083 = _0x55f5a3["querySelector"](
                  "input[type=\x22radio\x22],\x20input[type=\x22checkbox\x22]"
                ),
                _0x1335e4 = _0x42d083 ? _0x42d083["checked"] : ![];
              return { text: _0x115195, selected: _0x1335e4, input: _0x42d083 };
            }
          });
        return {
          question: { text: _0x67668f, element: _0x19a5f5, isDetected: ![] },
          answers: _0x3d70d3,
        };
      });
    }
    function _0x31cc76() {
      const _0x5e1cce = _0x4164,
        _0x1f844c = document["querySelectorAll"](
          ".css-1hhf6i,\x20.css-1629yt7,\x20.rc-FormPartsQuestion"
        );
      return Array["from"](_0x1f844c)
        ["map"]((_0x18db0e) => {
          const _0x4f5e8e = _0x4164,
            _0x712444 = _0x18db0e[_0x4f5e8e(0x1a4)](
              "[data-testid=\x22legend\x22]\x20.rc-CML"
            ),
            _0x24c577 = _0x712444
              ? _0x712444[_0x4f5e8e(0x172)][_0x4f5e8e(0x176)]()
              : "",
            _0x318fc1 = [],
            _0x35999f =
              _0x18db0e[_0x4f5e8e(0x1a4)](
                "[data-testid=\x22icon-correct\x22],\x20[data-testid=\x22GradeFeedback-success\x22]"
              ) !== null;
          if (!_0x35999f) return null;
          return (
            Array[_0x4f5e8e(0x167)](
              _0x18db0e[_0x4f5e8e(0x1b2)](_0x4f5e8e(0x19a))
            )["forEach"]((_0x251902) => {
              const _0x4b4ca4 = _0x4f5e8e,
                _0x4b33e1 = _0x251902[_0x4b4ca4(0x1a4)](_0x4b4ca4(0x1ab)),
                _0x2971b7 = _0x4b33e1
                  ? _0x4b33e1["textContent"][_0x4b4ca4(0x176)]()
                  : "",
                _0x40ca76 = _0x251902[_0x4b4ca4(0x1a4)](_0x4b4ca4(0x1a7)),
                _0x2db930 = _0x40ca76 ? _0x40ca76[_0x4b4ca4(0x18e)] : ![];
              _0x2db930 && _0x318fc1[_0x4b4ca4(0x1b5)](_0x2971b7);
            }),
            { question: _0x24c577, answers: _0x318fc1, isCorrect: _0x35999f }
          );
        })
        [_0x5e1cce(0x193)]((_0x477601) => _0x477601 !== null);
    }
    async function _0x306c6f() {
      const _0x4ffd4a = _0x4164,
        _0x37782a = document[_0x4ffd4a(0x1a4)](_0x4ffd4a(0x1a5));
      _0x3ece20 = _0xa5d4e8();
      const _0x840ec6 = _0x3ece20[_0x4ffd4a(0x1ad)]((_0x58d0bf) =>
        _0x58d0bf[_0x4ffd4a(0x188)][_0x4ffd4a(0x1ac)](
          (_0x5699ff) => _0x5699ff[_0x4ffd4a(0x199)]
        )
      );
      _0x37782a &&
        _0x840ec6 &&
        (_0x37782a[_0x4ffd4a(0x194)](),
        setTimeout(async () => {
          const _0xa6794 = _0x4ffd4a,
            _0x4f4f45 = document["querySelector"](_0xa6794(0x171));
          _0x4f4f45 && _0x4f4f45[_0xa6794(0x194)]();
        }, 0x2bc));
    }
    function _0x3e342d(_0x25f023, _0xe32ea0) {
      const _0x83688c = _0x4164;
      if (!_0x25f023 || !_0xe32ea0) return [];
      return _0xe32ea0["filter"](
        (_0x121eba) =>
          !_0x25f023[_0x83688c(0x1ac)](
            (_0x58266f) =>
              String(_0x58266f[_0x83688c(0x1b0)]) ===
                String(_0x121eba[_0x83688c(0x1b0)]) &&
              String(_0x58266f[_0x83688c(0x178)]) ===
                String(_0x121eba[_0x83688c(0x178)])
          )
      );
    }
    function _0x28ee50() {
      const _0x2fa1f3 = _0x3ece20["length"],
        _0x17b282 = answerClicked;
      return { totalQuestions: _0x2fa1f3, completedQuestions: _0x17b282 };
    }
    async function _0x589f66(_0xc71ea7) {
      const _0x314fc2 = _0x4164;
      let _0x546dbd = [];
      if (_0xc71ea7 === _0x314fc2(0x195)) {
        if (!_0x3a6e48) return;
        _0x546dbd = _0x3e342d(_0x11261d, _0x3a6e48);
        if (_0x546dbd[_0x314fc2(0x1b6)] === 0x0) return;
      }
      if (!_0x4248f0) return;
      const _0x258972 = JSON[_0x314fc2(0x165)]({
        action: _0xc71ea7,
        title: _0x4248f0,
        data: _0x546dbd,
      });
      try {
        const _0x14a8e2 = await fetch(
          "https://script.google.com/macros/s/AKfycbxScRW0pDfpS3AlX3MhjAtUMbE-e3FZrh92E9GySz4gj5dIqOXO5lBDpjdiSlnlNe9A/exec",
          {
            redirect: _0x314fc2(0x19c),
            method: _0x314fc2(0x1a8),
            headers: { "Content-Type": _0x314fc2(0x17b) },
            body: _0x258972,
          }
        );
        if (!_0x14a8e2["ok"])
          throw new Error(
            "HTTP\x20error!\x20status:\x20" + _0x14a8e2["status"]
          );
        return await _0x14a8e2["json"]();
      } catch (_0x6fa52f) {
        console[_0x314fc2(0x1b1)](_0x314fc2(0x168), _0x6fa52f);
      }
    }
    async function _0x181fc1(_0x5828f3, _0x253f1b, _0x147a4a = 0x1) {
      const _0x266d2f = _0x4164;
      if (!_0x5828f3[_0x266d2f(0x180)]) ++answerClicked;
      _0x5828f3[_0x266d2f(0x180)] = !![];
      let _0xdd4e6f = _0x5828f3[_0x266d2f(0x174)] + "\x0a";
      multichoice =
        _0x253f1b[0x0][_0x266d2f(0x187)][_0x266d2f(0x192)] === "checkbox";
      if (typeof multichoice == _0x266d2f(0x16b)) {
        for (
          let _0x55e719 = 0x0;
          _0x55e719 < _0x253f1b["length"];
          _0x55e719++
        ) {
          _0xdd4e6f +=
            _0x266d2f(0x184) +
            _0x55e719 +
            _0x266d2f(0x164) +
            _0x253f1b[_0x55e719][_0x266d2f(0x174)] +
            "\x0a";
        }
        multichoice
          ? (_0xdd4e6f += _0x266d2f(0x181))
          : (_0xdd4e6f +=
              "This\x20is\x20a\x20single-choice\x20question;\x20choose\x20only\x20one\x20answer.\x0a"),
          (_0xdd4e6f += _0x266d2f(0x19b));
      }
      if (!_0x4bcd61) return;
      const _0x287fb4 =
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
          _0x4bcd61,
        _0x46b0d9 = { contents: [{ parts: [{ text: _0xdd4e6f }] }] },
        _0x1502d8 = await fetch(_0x287fb4, {
          method: _0x266d2f(0x1a8),
          headers: { "Content-Type": _0x266d2f(0x19d) },
          body: JSON[_0x266d2f(0x165)](_0x46b0d9),
        });
      try {
        const _0x36e6e0 = await _0x1502d8[_0x266d2f(0x190)](),
          _0x457fe6 =
            _0x36e6e0[_0x266d2f(0x18c)][0x0][_0x266d2f(0x18b)][
              _0x266d2f(0x191)
            ][0x0][_0x266d2f(0x174)][_0x266d2f(0x176)](),
          _0x5995cc = _0x36e6e0[_0x266d2f(0x1b1)]
            ? _0x36e6e0[_0x266d2f(0x1b1)][_0x266d2f(0x169)]
            : 0xc8;
        _0x5995cc == 0x190 &&
          !_0x4516fe &&
          (chrome[_0x266d2f(0x18f)]["sendMessage"]({
            action: _0x266d2f(0x189),
            data: _0x266d2f(0x16c),
          }),
          (_0x4516fe = !![]));
        let _0x1cb1a6 = _0x457fe6[_0x266d2f(0x198)](",")[_0x266d2f(0x163)](
          (_0x504b51) => parseInt(_0x504b51["trim"](), 0xa)
        );
        for (let _0x1e3821 of _0x1cb1a6) {
          !isNaN(_0x1e3821) &&
            0x0 <= _0x1e3821 &&
            _0x1e3821 < _0x253f1b[_0x266d2f(0x1b6)] &&
            (_0x253f1b[_0x1e3821]["input"][_0x266d2f(0x194)](),
            (_0x5828f3["element"][_0x266d2f(0x17c)] = _0x266d2f(0x17d)));
        }
      } catch (_0x147c7c) {
        if (_0x147a4a < 0x2)
          return (
            await _0x213fc9(_0x147a4a * 0x3e8),
            await _0x181fc1(_0x5828f3, _0x253f1b, _0x147a4a + 0x1)
          );
      }
    }
    function _0x213fc9(_0x111a60) {
      return new Promise((_0x2efc3e) => setTimeout(_0x2efc3e, _0x111a60));
    }
    Object["prototype"]["hasOwnProperty"][_0x225f30(0x1af)](
      window,
      _0x225f30(0x16e)
    ) && delete window["answerClicked"];
    Object[_0x225f30(0x16f)](window, "answerClicked", {
      get() {
        return _0x460674;
      },
      set(_0x5df6bb) {
        const _0x189f9d = _0x225f30;
        (_0x460674 = _0x5df6bb),
          chrome[_0x189f9d(0x18f)][_0x189f9d(0x173)]({
            action: _0x189f9d(0x197),
            data: _0x28ee50(),
          });
      },
      configurable: !![],
    });
    async function _0x1d0edf() {
      const _0x50087e = _0x225f30;
      if (!_0x4248f0) {
        chrome[_0x50087e(0x18f)]["sendMessage"]({ action: _0x50087e(0x16d) }),
          clearInterval(_0x314475);
        return;
      }
      await _0x306c6f(), _0x4765c0();
    }
    function _0x4765c0() {
      const _0x459043 = _0x225f30;
      _0x3a6e48 = _0x31cc76();
      if (!_0x3a6e48) return;
      const _0x384629 =
        _0x3a6e48[_0x459043(0x1b6)] > 0x0 &&
        _0x3a6e48[_0x459043(0x1ad)](
          (_0x3c4617) => _0x3c4617[_0x459043(0x188)][_0x459043(0x1b6)] > 0x0
        );
      _0x384629 && (_0x589f66(_0x459043(0x195)), clearInterval(_0x314475));
    }
    let _0x314475 = setInterval(_0x1d0edf, 0x1f4);
  })();
function _0x3ebf() {
  const _0x304b5b = [
    "4220856MgHeSR",
    "find",
    "14761854kgThDd",
    "700444SODobo",
    "querySelector",
    "button[data-testid=\x22submit-button\x22]:not([disabled])",
    "\x20failed:",
    "input[type=\x22radio\x22],\x20input[type=\x22checkbox\x22]",
    "POST",
    "#agreement-checkbox-base",
    "322378JKgzjI",
    ".rc-CML",
    "some",
    "every",
    "5957994ltRnul",
    "call",
    "question",
    "error",
    "querySelectorAll",
    "Sheet\x20không\x20tồn\x20tại.",
    "addListener",
    "push",
    "length",
    ".rc-Option,\x20select",
    "map",
    "\x20:\x20",
    "stringify",
    "toLowerCase",
    "from",
    "Error:",
    "code",
    "cssText",
    "boolean",
    "API\x20Key\x20is\x20invalid.\x20Please\x20enter\x20a\x20valid\x20API\x20Key.",
    "stopProcess",
    "answerClicked",
    "defineProperty",
    "[data-testid=\x22legend\x22]\x20.rc-CML",
    "button[data-testid=\x22dialog-submit-button\x22]",
    "textContent",
    "sendMessage",
    "text",
    "forEach",
    "trim",
    "3936710ZlVqqC",
    "answer",
    "setApiKey",
    "2IauEKx",
    "text/plain;charset=utf-8",
    "style",
    "border-style:\x20solid;border-color:\x20green;",
    "apiKey",
    "includes",
    "isDetected",
    "This\x20is\x20a\x20multiple-choice\x20question;\x20you\x20can\x20choose\x20multiple\x20answers.\x0a",
    "h1.css-6pmrmn",
    "Failed\x20to\x20fetch\x20quiz\x20data\x20after\x20",
    "options",
    "readData",
    "message",
    "input",
    "answers",
    "invalidAPI",
    "border-style:\x20solid;\x20border-color:\x20red;",
    "content",
    "candidates",
    "2918247dNYvJW",
    "checked",
    "runtime",
    "json",
    "parts",
    "type",
    "filter",
    "click",
    "addData",
    "selectedIndex",
    "getQuizProgress",
    "split",
    "selected",
    ".rc-Option",
    "Only\x20output\x20the\x20number\x20of\x20the\x20correct\x20options;\x20do\x20not\x20explain.\x0a",
    "follow",
    "application/json",
    "21MpiisM",
    "element",
  ];
  _0x3ebf = function () {
    return _0x304b5b;
  };
  return _0x3ebf();
}
