// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "HenryStickmin",
    platforms: [
        .iOS(.v14)
    ],
    products: [
        .executable(name: "HenryStickmin", targets: ["HenryStickmin"])
    ],
    targets: [
        .executableTarget(
            name: "HenryStickmin",
            path: "HenryApp"
        )
    ]
)
