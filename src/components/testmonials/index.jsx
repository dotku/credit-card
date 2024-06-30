import {
  List,
  PlainCard,
  Stack,
  Text,
  mergeStyleSets,
  useTheme,
} from "@fluentui/react";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import { useCallback, useMemo } from "react";

const generateStyles = (theme) => {
  const { palette, fonts } = theme;
  return mergeStyleSets({
    listGridExample: {
      ".ms-List-page": {
        marginTop: "8px",
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        flexWrap: "wrap",
        "@media(max-width: 600px)": {
          flexDirection: "column",
        },
      },
      ".ms-List-cell": {
        flex: 1,
        "@media(max-width: 600px)": {
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        },
      },
      ".fui-Card": {
        borderRadius: "4px",
      },
    },
    listGridExampleTile: {},
    listGridExampleItem: {
      maxWidth: "100%",
    },
    listGridExamplePadder: {},
    listGridExampleLabel: {},
  });
};

export default function Testmonials() {
  const theme = useTheme();
  const data = [
    {
      userName: "User A",
      description: "在购物时使用返现信用卡，已经节省了很多钱！",
    },
    {
      userName: "User B",
      description: "旅行达人信用卡帮我免费兑换了几次机票。",
    },
    {
      userName: "User C",
      description: "零年费信用卡非常适合我这样的学生。",
    },
  ];
  const classNames = useMemo(() => generateStyles(theme), [theme]);

  const onRenderCell = useCallback(
    ({ userName, description }) => (
      <Card className={classNames.listGridExampleItem}>
        <CardHeader
          className={classNames.listGridExamplePadder}
          header={
            <Text variant={"large"} block>
              {userName}
            </Text>
          }
          description={
            <Text className={classNames.listGridExampleLabel}>
              {description}
            </Text>
          }
        />
      </Card>
    ),
    [data, classNames]
  );

  return (
    <>
      <h2>听听我们的用户怎么说</h2>
      <List
        className={classNames.listGridExample}
        items={data}
        onRenderCell={onRenderCell}
      />
    </>
  );
}
