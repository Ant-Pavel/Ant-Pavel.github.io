
function Component(element) {
  this._element = element;
}

Component.prototype.on = function(eventType, selector, callback) {
  if (!callback) {
    callback = selector;
    this._element.addEventListener(eventType, callback);
    return;
  }

  this._element.addEventListener(eventType, function (event) {
    let delegateTarget = event.target.closest(selector);
    if (!delegateTarget) return;

    event.delegateTarget = delegateTarget;
    callback(event);
  });
};

Component.prototype._trigger = function (eventName, detail) {
  let customEvent = new CustomEvent(eventName, { detail: detail });
  this._element.dispatchEvent(customEvent);
};