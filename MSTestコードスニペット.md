# MSTestコードスニペット

#### 環境
+ Windows 10 64bit
+ Visual Studio Community 2022
+ .NET 7.0
+ [MSTest（テストフレームワーク）](https://www.nuget.org/packages/MSTest.TestFramework)
+ [Moq（mock）](https://www.nuget.org/packages/Moq)

#### サンプルコード
```csharp
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace Test
{
    /// <summary>
    /// テストクラス
    /// </summary>
    [TestClass]
    public class XxxxServiceTest
    {
        /// <summary>
        /// テスト開始処理
        /// </summary>
        [ClassInitialize]
        public static void ClassInit(TestContext context)
        {
        }

        /// <summary>
        /// テスト終了処理
        /// </summary>
        [ClassCleanup]
        public static void ClassCleanup()
        {
        }

        /// <summary>
        /// テスト毎の開始処理
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
        }

        /// <summary>
        /// テスト毎の終了処理
        /// </summary>
        [TestCleanup]
        public void TestCelean()
        {
        }

        /// <summary>
        /// テスト
        /// </summary>
        [TestMethod]
        public void Test_正常系()
        {
            // Arrange
            Mock<ILogger<XxxxService>> mockLogger = new();
            Mock<ZzzzRepository> mockRepository = new();
            mockRepository.Setup(x => x.GetStatus("1234")).Returns(getNg);
            mockRepository.Setup(x => x.SetStatusAsync("1234")).ReturnAync(setAsync);   // 非同期はReturnAyncを使う
            var service = new XxxxService(mockLogger.Object, mockRepository.Object);

            // Act
            var actual = service.GetXxxxYyyy("1234");

            // Assert
            Assert.AreEqual(0, actual.Count()); // 第1引数が期待値、第2引数が実行値
            mockRepository.VerifyAll(); // mockが意図したとおりに呼び出されたいるか検証する
        }
    }
}
```

