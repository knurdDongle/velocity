var QUnit, Velocity, Data, defaultOptions, defaultProperties, defaultStyles, asyncCheckDuration, completeCheckDuration;

QUnit.test("Redirects", function(assert) {
	var done = assert.async(2),
			$target1 = getTarget(),
			$target2 = getTarget(),
			redirectOptions = {duration: 1500};

	(window.jQuery || window.Zepto || window).Velocity.Redirects.test = function(element, options, elementIndex, elementsLength) {
		if (elementIndex === 0) {
			assert.deepEqual(element, $target1, "Element passed through #1.");
			assert.deepEqual(options, redirectOptions, "Options object passed through #1.");
			assert.equal(elementIndex, 0, "Element index passed through #1.");
			assert.equal(elementsLength, 2, "Elements length passed through #1.");

			done();
		} else if (elementIndex === 1) {
			assert.deepEqual(element, $target2, "Element passed through #2.");
			assert.deepEqual(options, redirectOptions, "Options object passed through #2.");
			assert.equal(elementIndex, 1, "Element index passed through #2.");
			assert.equal(elementsLength, 2, "Elements length passed through #2.");

			done();
		}
	};

	Velocity([$target1, $target2], "test", redirectOptions);
});