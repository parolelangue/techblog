module.exports = function (context, options) {
  return {
    name: "my-dynamic-routes",
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;

      // Example: Dynamic routes based on some data
      const dynamicItems = [
        { id: "method1", title: "Item 1" },
        { id: "method2", title: "Item 2" },
      ];

      // Generate routes dynamically
      for (const item of dynamicItems) {
        const itemJsonPath = await createData(
          `item-${item.id}.json`,
          JSON.stringify(item)
        );

        addRoute({
          path: `/methods/${item.id}`,
          component: "@site/src/components/DynamicPage.js", // Custom component
          modules: { item: itemJsonPath },
          exact: true,
        });
      }
    },
  };
};
