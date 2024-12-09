import com.batterymonitor.BatteryMonitorPackage;

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new BatteryMonitorPackage()
    );
}
